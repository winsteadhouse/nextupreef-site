// A YouTube video embed with VideoObject markup, so Google can show the video in search results.
type Props = {
  id: string;
  title: string;
  description: string;
  uploadDate: string; // ISO date
  duration: string; // ISO 8601, e.g. PT1M11S
  vertical?: boolean;
  caption?: string;
};

export default function YouTubeVideo({ id, title, description, uploadDate, duration, vertical = false, caption }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description,
    thumbnailUrl: [`https://i.ytimg.com/vi/${id}/hqdefault.jpg`],
    uploadDate,
    duration,
    contentUrl: `https://www.youtube.com/watch?v=${id}`,
    embedUrl: `https://www.youtube.com/embed/${id}`,
  };
  return (
    <figure style={{ margin: "40px auto", maxWidth: vertical ? 340 : 720 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ position: "relative", width: "100%", aspectRatio: vertical ? "9 / 16" : "16 / 9", borderRadius: 16, overflow: "hidden", background: "#070b14" }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
      {caption ? (
        <figcaption style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center", marginTop: "12px" }}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}
