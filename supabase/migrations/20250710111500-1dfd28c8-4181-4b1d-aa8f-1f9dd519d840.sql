
-- Create blogs table for content management
CREATE TABLE public.blogs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  author_id UUID REFERENCES public.profiles(id) NOT NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content JSONB NOT NULL, -- Store rich content with headings, paragraphs, links
  excerpt TEXT,
  featured_image_url TEXT,
  status TEXT NOT NULL DEFAULT 'draft', -- draft, published, archived
  tags TEXT[],
  meta_title TEXT,
  meta_description TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add RLS policies for blogs
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can read published blogs" 
  ON public.blogs 
  FOR SELECT 
  USING (status = 'published');

CREATE POLICY "Authors can manage their own blogs" 
  ON public.blogs 
  FOR ALL 
  USING (author_id = auth.uid());

CREATE POLICY "Admins can manage all blogs" 
  ON public.blogs 
  FOR ALL 
  USING (EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role IN ('admin', 'super_admin')
  ));

-- Add trigger for updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blogs_updated_at 
  BEFORE UPDATE ON public.blogs 
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Add some sample data for testing
INSERT INTO public.profiles (id, email, full_name, role) 
VALUES (gen_random_uuid(), 'admin@oecl.sg', 'Admin User', 'admin')
ON CONFLICT (email) DO NOTHING;
