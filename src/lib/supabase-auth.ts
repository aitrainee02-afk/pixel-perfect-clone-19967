import { createClient } from "@supabase/supabase-js";

export const supabaseAuth = createClient(
  "https://llbaoazenchzafwqzwpi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsYmFvYXplbmNoemFmd3F6d3BpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4Mzg3NTUsImV4cCI6MjA4NzQxNDc1NX0.XuiAr3XBUoLi-DFISdZJylb3WN6h-nM_a97bFjSZSyI"
);

export async function signInWithGoogle() {
  await supabaseAuth.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: "https://modaic-frontend.vercel.app" },
  });
}
