
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type BlogPost = {
  id: string;
  title: string;
  content: any;
  image_url?: string | null;
  created_at: string;
};

const fetchPost = async (id: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id,title,content,image_url,created_at")
    .eq("id", id)
    .eq("is_published", true)
    .maybeSingle();
  if (error) throw error;
  return data;
};

function renderContent(content: any) {
  if (typeof content === "string") {
    try {
      content = JSON.parse(content);
    } catch {
      return <div className="prose prose-lg max-w-none leading-relaxed text-black">{content}</div>;
    }
  }
  if (!content?.ops) return <div />;
  return (
    <div className="prose prose-lg max-w-none leading-relaxed text-black">
      {content.ops.map((op: any, i: number) => {
        if (typeof op.insert === "string") {
          return <span key={i} className="text-black leading-relaxed">{op.insert}</span>;
        }
        return null;
      })}
    </div>
  );
}

export default function BlogPost() {
  const { id } = useParams();
  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blog_post", id],
    queryFn: () => fetchPost(id as string),
    enabled: !!id,
  });

  if (isLoading) return <div className="bg-white min-h-screen p-4 text-black">Loading...</div>;
  if (error || !post) return <div className="text-red-600 bg-white min-h-screen p-4">Not found!</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 bg-white min-h-screen">
      <Link to="/blog" className="text-blue-600 hover:text-blue-800 underline mb-4 block">
        &larr; Kembali ke Blog
      </Link>
      {post.image_url && (
        <img src={post.image_url} alt={post.title} className="w-full h-80 object-cover mb-6 rounded border border-black" />
      )}
      <h1 className="text-2xl font-bold mb-2 text-black">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-6">{new Date(post.created_at).toLocaleDateString()}</p>
      <div>{renderContent(post.content)}</div>
    </div>
  );
}
