import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RemoteSupport from "./pages/RemoteSupport";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminBlogLogin from "./pages/AdminBlogLogin";
import AdminBlog from "./pages/AdminBlog";
import AdminBlogPostEditor from "./pages/AdminBlogPostEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Blog public section */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          {/* Admin Blog Login */}
          <Route path="/admin-blog-login" element={<AdminBlogLogin />} />
          {/* Admin Blog Dashboard */}
          <Route path="/admin-blog" element={<AdminBlog />} />
          <Route path="/admin-blog/new" element={<AdminBlogPostEditor />} />
          <Route path="/admin-blog/edit/:id" element={<AdminBlogPostEditor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/" element={<Index />} />
          <Route path="/remote-support" element={<RemoteSupport />} />
          <Route path="/TnC" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
