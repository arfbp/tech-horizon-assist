
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const fetchPost = async (id: string) => {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id,title,content,image_url,created_at")
    .eq("id", id)
    .eq("is_published", true)
    .single();
  if (error) throw error;
  return data;
};

// render rich text from JSON to HTML (simple for MVP)
function renderContent(content: any) {
  if (typeof content === "string") {
    try {
      content = JSON.parse(content);
    } catch {
      return <div>{content}</div>;
    }
  }
  if (!content?.ops) return <div />;
  // Just a rudimentary rendering
  return (
    <div className="prose prose-neutral max-w-none">
      {content.ops.map((op: any, i: number) => {
        if (typeof op.insert === "string") {
          return <span key={i}>{op.insert}</span>;
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

  if (isLoading) return <div>Loading...</div>;
  if (error || !post) return <div className="text-red-600">Not found!</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link to="/blog" className="text-pintu-600 underline mb-4 block">
        &larr; Kembali ke Blog
      </Link>
      {post.image_url && (
        <img src={post.image_url} alt={post.title} className="w-full h-80 object-cover mb-6 rounded" />
      )}
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{new Date(post.created_at).toLocaleDateString()}</p>
      <div>{renderContent(post.content)}</div>
    </div>
  );
}
