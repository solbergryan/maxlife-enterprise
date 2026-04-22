"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface LoginFormProps {
  nextPath?: string;
}

export function LoginForm({ nextPath }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const redirectTo = `${typeof window !== "undefined" ? window.location.origin : ""}/academy/auth/callback${
    nextPath ? `?next=${encodeURIComponent(nextPath)}` : ""
  }`;

  const sendMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo },
    });

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
      return;
    }
    setStatus("sent");
  };

  const googleEnabled = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED === "true";

  const signInWithGoogle = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });
  };

  if (status === "sent") {
    return (
      <div className="text-center">
        <div className="mb-4 text-4xl">📧</div>
        <h2 className="mb-2 text-xl font-bold text-white">Check your email</h2>
        <p className="text-sm text-gray-400">
          We sent a sign-in link to <strong className="text-white">{email}</strong>.
          Click the link to complete sign-in.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={sendMagicLink} className="space-y-4">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-dark-border bg-dark px-4 py-2.5 text-white placeholder:text-gray-600 focus:border-gold focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-lg bg-gold px-4 py-2.5 font-semibold text-dark transition-colors hover:bg-gold-dark disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send sign-in link"}
        </button>
        {errorMsg && <p className="text-sm text-red-400">{errorMsg}</p>}
      </form>

      {googleEnabled && (
        <>
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-grow bg-dark-border" />
            <span className="text-xs uppercase text-gray-500">or</span>
            <div className="h-px flex-grow bg-dark-border" />
          </div>

          <button
            type="button"
            onClick={signInWithGoogle}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-dark-border bg-dark px-4 py-2.5 font-medium text-white transition-colors hover:border-gold"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
              />
            </svg>
            Continue with Google
          </button>
        </>
      )}
    </div>
  );
}
