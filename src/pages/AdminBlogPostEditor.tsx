
import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";

// Basic Rich Text Editor using Quill CDN (for MVP, not for production!)
// We'll use unpkg to load Quill
declare global {
  interface Window { Quill: any; }
}

function useQuill(ref: React.RefObject<HTMLDivElement>, value: any, setValue: (val: any) => void) {
  useEffect(() => {
    let quill: any;
    let loaded = false;
    
    const initQuill = () => {
      if (ref.current && window.Quill && !loaded) {
        loaded = true;
        quill = new window.Quill(ref.current, {
          theme: "snow",
          modules: { 
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["link", "image"],
            ] 
          }
        });
        
        // Apply custom styling for better readability
        const editor = ref.current.querySelector('.ql-editor');
        if (editor) {
          editor.style.backgroundColor = '#fefefe';
          editor.style.color = '#374151';
          editor.style.fontSize = '16px';
          editor.style.lineHeight = '1.6';
          editor.style.fontFamily = 'system-ui, -apple-system, sans-serif';
          editor.style.padding = '16px';
          editor.style.border = '1px solid #e5e7eb';
          editor.style.borderRadius = '8px';
          editor.style.minHeight = '200px';
        }
        
        if (value) quill.setContents(value);
        quill.on("text-change", () => {
          setValue(quill.getContents());
        });
      }
    };
    
    if (!window.Quill) {
      const script = document.createElement("script");
      script.src = "https://cdn.quilljs.com/1.3.7/quill.js";
      script.onload = initQuill;
      document.body.appendChild(script);
      
      // Add custom CSS for better readability
      const style = document.createElement("style");
      style.textContent = `
        .ql-toolbar {
          background-color: #f9fafb !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 8px 8px 0 0 !important;
        }
        .ql-container {
          border: 1px solid #e5e7eb !important;
          border-top: none !important;
          border-radius: 0 0 8px 8px !important;
        }
        .ql-editor {
          font-size: 16px !important;
          line-height: 1.6 !important;
          color: #374151 !important;
          background-color: #fefefe !important;
        }
        .ql-editor h1, .ql-editor h2 {
          color: #1f2937 !important;
          margin: 16px 0 8px 0 !important;
        }
        .ql-editor p {
          margin: 8px 0 !important;
        }
      `;
      document.head.appendChild(style);
      
      document.head.insertAdjacentHTML(
        "beforeend",
        `<link rel="stylesheet" href="https://cdn.quilljs.com/1.3.7/quill.snow.css" />`
      );
    } else {
      initQuill();
    }
    return () => {
      if (quill && ref.current) {
        ref.current.innerHTML = "";
      }
    };
  }, []);
}

type BlogPostForm = {
  title: string;
  content: any;
  image_url: string;
  is_published: boolean;
};

export default function AdminBlogPostEditor() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<any>({ ops: [{ insert: "\n" }] });
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isPublished, setIsPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const quillRef = useRef<HTMLDivElement>(null);

  useQuill(quillRef, content, setContent);

  useEffect(() => {
    if (isEdit) {
      supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .maybeSingle()
        .then(({ data, error }) => {
          if (data) {
            setTitle(data.title);
            setContent(typeof data.content === "string" ? JSON.parse(data.content) : data.content);
            setImageUrl(data.image_url || "");
            setIsPublished(data.is_published);
          }
        });
    }
  }, [isEdit, id]);

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const newFileName = `${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage
      .from("blog-images")
      .upload(newFileName, file);

    if (error) {
      toast({ title: "Upload gagal", description: error.message });
    } else {
      // get public URL for the uploaded image
      const { data: urlData } = supabase
        .storage
        .from("blog-images")
        .getPublicUrl(newFileName);
      const url = urlData?.publicUrl || "";
      setImageUrl(url);
      toast({ title: "Gambar berhasil di-upload." });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (!title || !content) {
      toast({ title: "Judul & konten wajib diisi." });
      setLoading(false);
      return;
    }

    const data: BlogPostForm = {
      title,
      content: typeof content === "string" ? content : JSON.stringify(content),
      image_url: imageUrl,
      is_published: isPublished,
    };

    if (isEdit) {
      const { error } = await supabase
        .from("blog_posts")
        .update(data)
        .eq("id", id);
      if (error) {
        toast({ title: "Gagal update", description: error.message });
      } else {
        toast({ title: "Berhasil diupdate" });
        navigate("/admin-blog");
      }
    } else {
      const { error } = await supabase
        .from("blog_posts")
        .insert([data]);
      if (error) {
        toast({ title: "Gagal membuat postingan", description: error.message });
      } else {
        toast({ title: "Berhasil dibuat" });
        navigate("/admin-blog");
      }
    }
    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">{isEdit ? "Edit Post" : "Tulis Postingan Baru"}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="title" className="text-gray-700">Judul</Label>
          <Input
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="mb-4 text-gray-700"
            autoFocus
            required
          />
          <label className="block text-sm font-medium text-gray-700 mb-2">Konten</label>
          <div ref={quillRef} className="bg-white border rounded h-52 min-h-[12rem] mb-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gambar (opsional)</label>
          {imageUrl && (
            <img src={imageUrl} alt="cover" className="h-40 rounded mb-3" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="text-gray-700"
          />
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center text-base text-gray-700">
            <input
              type="checkbox"
              checked={isPublished}
              onChange={e => setIsPublished(e.target.checked)}
              className="mr-2"
            />
            Publish?
          </label>
        </div>
        <div className="flex gap-4">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Menyimpan..." : isEdit ? "Update" : "Publish"}
          </Button>
          <Button type="button" variant="secondary" className="w-full" onClick={() => navigate("/admin-blog")}>
            Batal
          </Button>
        </div>
      </form>
    </div>
  );
}
