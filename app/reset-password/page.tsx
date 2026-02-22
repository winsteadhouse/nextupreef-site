"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<"ready" | "loading" | "success" | "error" | "no-session">("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // Supabase appends tokens as hash fragments: #access_token=...&type=recovery
    const hash = window.location.hash;
    if (hash && hash.includes("access_token")) {
      // Parse the hash into query params
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");
      const type = params.get("type");

      if (accessToken && type === "recovery") {
        supabase.auth
          .setSession({ access_token: accessToken, refresh_token: refreshToken || "" })
          .then(({ error }) => {
            if (error) {
              setStatus("no-session");
              setErrorMsg("Invalid or expired reset link. Please request a new one from the app.");
            } else {
              setStatus("ready");
            }
          });
      } else {
        setStatus("no-session");
        setErrorMsg("Invalid reset link. Please request a new one from the app.");
      }
    } else {
      setStatus("no-session");
      setErrorMsg("No reset token found. Please request a password reset from the NextUpReef app.");
    }
  }, []);

  async function handleReset() {
    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
    } else {
      setStatus("success");
    }
  }

  return (
    <section className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "12px", textAlign: "center" }}>
          Reset Password
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "16px", marginBottom: "40px", fontWeight: "700", textAlign: "center" }}>
          Enter your new password below
        </p>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "40px",
          }}
        >
          {status === "loading" && (
            <p style={{ color: "var(--text-muted)", fontWeight: "700", textAlign: "center" }}>
              Verifying reset link...
            </p>
          )}

          {status === "no-session" && (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>⚠️</div>
              <p style={{ color: "var(--text-muted)", fontWeight: "700", lineHeight: "1.6" }}>
                {errorMsg}
              </p>
            </div>
          )}

          {status === "ready" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {errorMsg && (
                <p style={{ color: "#EF4444", fontWeight: "700", fontSize: "14px", textAlign: "center" }}>
                  {errorMsg}
                </p>
              )}

              <div>
                <label style={{ display: "block", color: "var(--text-muted)", fontWeight: "800", fontSize: "13px", marginBottom: "6px" }}>
                  New Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    color: "white",
                    fontSize: "15px",
                    fontWeight: "700",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", color: "var(--text-muted)", fontWeight: "800", fontSize: "13px", marginBottom: "6px" }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  onKeyDown={(e) => e.key === "Enter" && handleReset()}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    color: "white",
                    fontSize: "15px",
                    fontWeight: "700",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <button
                onClick={handleReset}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "none",
                  backgroundColor: "var(--reef)",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "900",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
              >
                Update Password
              </button>
            </div>
          )}

          {status === "error" && (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>❌</div>
              <p style={{ color: "#EF4444", fontWeight: "700", marginBottom: "16px" }}>{errorMsg}</p>
              <button
                onClick={() => { setStatus("ready"); setErrorMsg(""); }}
                style={{
                  padding: "12px 24px",
                  borderRadius: "12px",
                  border: "none",
                  backgroundColor: "var(--reef)",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "900",
                  cursor: "pointer",
                }}
              >
                Try Again
              </button>
            </div>
          )}

          {status === "success" && (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
              <h2 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "8px" }}>Password Updated!</h2>
              <p style={{ color: "var(--text-muted)", fontWeight: "700", lineHeight: "1.6" }}>
                Your password has been changed. You can now log in with your new password in the NextUpReef app.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}