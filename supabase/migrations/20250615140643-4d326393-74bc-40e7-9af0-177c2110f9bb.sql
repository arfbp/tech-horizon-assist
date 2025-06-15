
-- Create the blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content JSONB,
  image_url TEXT,
  is_published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) 
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for blog_posts (public read, admin write)
CREATE POLICY "Anyone can view published blog posts" 
  ON public.blog_posts 
  FOR SELECT 
  USING (is_published = true);

-- Admin can do everything (you can adjust this based on your admin logic)
CREATE POLICY "Admin can manage all blog posts" 
  ON public.blog_posts 
  FOR ALL 
  USING (true);

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('blog-images', 'blog-images', true);

-- Create storage policies
CREATE POLICY "Anyone can view blog images" 
  ON storage.objects 
  FOR SELECT 
  USING (bucket_id = 'blog-images');

CREATE POLICY "Admin can upload blog images" 
  ON storage.objects 
  FOR INSERT 
  WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Admin can update blog images" 
  ON storage.objects 
  FOR UPDATE 
  USING (bucket_id = 'blog-images');

CREATE POLICY "Admin can delete blog images" 
  ON storage.objects 
  FOR DELETE 
  USING (bucket_id = 'blog-images');
