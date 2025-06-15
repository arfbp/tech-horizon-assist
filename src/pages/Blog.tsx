
import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";

type BlogPost = {
  id: string;
  title: string;
  image_url?: string | null;
  created_at: string;
};

const fetchPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, title, image_url, created_at")
    .eq("is_published", true)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
};

export default function Blog() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["blog_posts"],
    queryFn: fetchPosts,
  });

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Blog</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div className="text-red-600">Error loading posts.</div>}
      <div className="space-y-6">
        {posts &&
          posts.map((post) => (
            <Card key={post.id} className="p-4 hover:shadow-md transition-all rounded-lg">
              <Link to={`/blog/${post.id}`}>
                {post.image_url && (
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-48 object-cover mb-2 rounded"
                  />
                )}
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
              </Link>
            </Card>
          ))}
        {!isLoading && (!posts || posts.length === 0) && (
          <div className="text-gray-500">Belum ada postingan.</div>
        )}
      </div>
    </div>
  );
}
