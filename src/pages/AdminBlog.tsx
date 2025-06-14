
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

// Admin check: only bparif21@gmail.com allowed
async function checkAdmin() {
  const { data, error } = await supabase.auth.getUser();
  const user = data?.user;
  if (!user || !user.email || user.email !== "bparif21@gmail.com") {
    return false;
  }
  return true;
}

type AdminBlogPost = {
  id: string;
  title: string;
  is_published: boolean;
  created_at: string;
};

const fetchPosts = async (): Promise<AdminBlogPost[]> => {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id,title,is_published,created_at")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
};

export default function AdminBlog() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const { data: posts, isLoading, refetch } = useQuery({
    queryKey: ["admin_blog_posts"],
    queryFn: fetchPosts,
  });

  useEffect(() => {
    checkAdmin().then(is => {
      setIsAdmin(is);
      if (!is) {
        toast({ title: "Akses ditolak", description: "Bukan admin blog." });
        navigate("/admin-blog-login");
      }
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_evt, session) => {
      if (!session) {
        setIsAdmin(false);
        navigate("/admin-blog-login");
      }
    });
    return () => subscription?.unsubscribe();
    // eslint-disable-next-line
  }, []);

  if (isAdmin === null) {
    return <div className="h-screen flex justify-center items-center bg-white text-black">Checking access...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Blog Admin Panel</h1>
        <Button 
          onClick={async () => {
            await supabase.auth.signOut();
            navigate("/admin-blog-login");
          }}
          className="bg-black text-white hover:bg-gray-800"
        >
          Logout
        </Button>
      </div>
      <Button 
        className="mb-6 bg-black text-white hover:bg-gray-800" 
        onClick={() => navigate("/admin-blog/new")}
      >
        + New Post
      </Button>
      <div className="space-y-4">
        {isLoading && <div className="text-black">Memuat postingan...</div>}
        {posts && posts.length === 0 && <div className="text-black">Tidak ada postingan.</div>}
        {posts &&
          posts.map((post) => (
            <div key={post.id} className="border-2 border-black rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between bg-white">
              <div>
                <div className="font-bold text-lg text-black">{post.title}</div>
                <div className="text-sm text-gray-600">
                  {new Date(post.created_at).toLocaleDateString()}
                  {post.is_published ? (
                    <span className="ml-3 text-green-600 font-semibold">Published</span>
                  ) : (
                    <span className="ml-3 text-yellow-600 font-semibold">Draft</span>
                  )}
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => navigate(`/admin-blog/edit/${post.id}`)}
                  className="bg-white text-black border-black hover:bg-gray-100"
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={async () => {
                    if (!window.confirm("Hapus postingan ini?")) return;
                    const { error } = await supabase
                      .from("blog_posts")
                      .delete()
                      .eq("id", post.id);
                    if (error) {
                      toast({ title: "Gagal hapus", description: error.message });
                    } else {
                      toast({ title: "Berhasil dihapus" });
                      refetch();
                    }
                  }}
                  className="bg-red-600 text-white hover:bg-red-700"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
