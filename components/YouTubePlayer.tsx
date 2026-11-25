"use client";
import { useState } from "react";

// Shows our own poster until the viewer taps play, so YouTube's title overlay never sits on top of it.
export default function YouTubePlayer({ id, title, poster }: { id: string; title: string; poster: string }) {
  const [playing, setPlaying] = useState(false);
  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
      />
    );
  }
  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", padding: 0, border: 0, cursor: "pointer", background: "#070b14" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <span
        aria-hidden="true"
        style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 68, height: 68, borderRadius: "50%", background: "rgba(7,11,20,0.78)", border: "2px solid #38bdf8", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#38bdf8"><path d="M8 5v14l11-7z" /></svg>
      </span>
    </button>
  );
}
