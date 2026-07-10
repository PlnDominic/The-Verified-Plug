"use client";

import { useRef, useState } from "react";

type ImageSlotProps = {
  id: string;
  placeholder: string;
  initialSrc?: string;
  tone?: string;
  fit?: "cover" | "contain";
  className?: string;
  style?: React.CSSProperties;
};

export default function ImageSlot({
  id,
  placeholder,
  initialSrc,
  tone,
  fit = "cover",
  className,
  style,
}: ImageSlotProps) {
  const [src, setSrc] = useState<string | undefined>(initialSrc);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function upload(file: File) {
    setError(null);
    setUploading(true);
    try {
      const body = new FormData();
      body.append("slotId", id);
      body.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Upload failed");
      setSrc(json.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) upload(file);
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={`vp-slot ${className ?? ""}`}
      style={{
        background: src ? undefined : tone,
        ...style,
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) upload(file);
          e.target.value = "";
        }}
      />

      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: fit,
            display: "block",
          }}
        />
      ) : null}

      <div
        aria-hidden="true"
        className={`vp-slot-overlay ${src ? "is-filled" : "is-empty"} ${
          dragging ? "is-dragging" : ""
        }`}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="vp-slot-caption">
          {uploading ? "Uploading…" : src ? "Click or drop to replace" : placeholder}
        </span>
        {error ? <span className="vp-slot-error">{error}</span> : null}
      </div>
    </div>
  );
}
