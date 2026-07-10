import ImageSlot from "@/components/ImageSlot";

export default function Hero({ initialSrc }: { initialSrc?: string }) {
  return (
    <section id="top" className="vp-hero">
      <div className="vp-hero-media">
        <ImageSlot
          id="vp-hero"
          fit="cover"
          placeholder="Drop hero image (a shipping yard of cars, or a hero vehicle)"
          initialSrc={initialSrc}
          tone="linear-gradient(155deg,#2a3344 0%,#1d2533 60%,#16181f 100%)"
        />
      </div>
      <div className="vp-hero-scrim" />

      <div className="vp-hero-content">
        <p className="vp-eyebrow">Source &middot; Inspect &middot; Ship &middot; Deliver</p>

        <div className="vp-hero-copy">
          <h1 className="vp-hero-title">Verified imports, straight from China to Ghana.</h1>
          <p className="vp-hero-sub">
            Vehicles and general goods, sourced and shipped from China to Ghana. Verified suppliers,
            transparent pricing, handled end to end.
          </p>
          <div className="vp-cta-row">
            <a href="#cars" className="vp-btn vp-btn-primary">Browse what we source</a>
            <a href="#request" className="vp-btn vp-btn-outline">Request a car</a>
          </div>
        </div>
      </div>
    </section>
  );
}
