"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function HubWaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [hasApex, setHasApex] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmed)) {
      setErrorMsg("Please enter a valid email.");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/hub-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, has_apex: hasApex }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(data?.error ?? "Could not save. Try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          background: "rgba(16,185,129,0.08)",
          border: "1px solid rgba(16,185,129,0.25)",
          borderRadius: "14px",
          padding: compact ? "20px" : "28px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "32px", marginBottom: "6px" }}>🎉</div>
        <div style={{ fontSize: "18px", fontWeight: 900, color: "var(--text-light)", marginBottom: "4px" }}>
          You&apos;re on the list!
        </div>
        <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.5 }}>
          We&apos;ll email <strong style={{ color: "var(--text-light)" }}>{email.toLowerCase()}</strong> when pre-orders open. Early reefers may get devices at cost in exchange for feedback.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: "8px", flexWrap: "wrap" }}>
        <input
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "submitting"}
          style={{
            flex: "1 1 240px",
            minWidth: 0,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "12px",
            padding: "14px 16px",
            fontSize: "15px",
            color: "var(--text-light)",
            fontFamily: "inherit",
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn primary"
          style={{ flex: "0 0 auto", padding: "14px 22px", fontSize: "15px", fontWeight: 900, cursor: status === "submitting" ? "wait" : "pointer" }}
        >
          {status === "submitting" ? "Adding…" : "Join the Waitlist"}
        </button>
      </div>
      <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--text-muted)", cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={hasApex}
          onChange={(e) => setHasApex(e.target.checked)}
          style={{ accentColor: "var(--reef)", width: 16, height: 16 }}
        />
        I currently use a Neptune Apex
      </label>
      {errorMsg ? (
        <div style={{ color: "#EF4444", fontSize: "13px", fontWeight: 700 }}>{errorMsg}</div>
      ) : (
        <div style={{ color: "var(--text-muted)", fontSize: "12px" }}>
          No spam. We&apos;ll email once when pre-orders open. Unsubscribe anytime.
        </div>
      )}
    </form>
  );
}
