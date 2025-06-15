
import React, { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";

export default function AdminBlogLogin() {
  const [email] = useState("bparif21@gmail.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (email !== "bparif21@gmail.com") {
      toast({
        title: "Login gagal",
        description: "Email tidak diizinkan.",
      });
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast({
        title: "Login gagal",
        description: error.message,
      });
    } else {
      navigate("/admin-blog");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md border-2 border-black w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold mb-2 text-black text-center">Login Admin Blog</h1>
        <div>
          <Label htmlFor="email" className="text-black">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            disabled
            autoComplete="username"
            className="bg-gray-100 text-black border-black"
          />
        </div>
        <div>
          <Label htmlFor="password" className="text-black">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
            className="text-black border-black bg-white"
          />
        </div>
        <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
