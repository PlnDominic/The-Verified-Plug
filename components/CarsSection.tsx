import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import { CARS } from "@/lib/content";

export default function CarsSection({ images }: { images: Record<string, string> }) {
  return (
    <section id="cars" className="vp-cars">
      <Reveal className="vp-cars-head">
        <div>
          <p className="vp-section-eyebrow">Sourced for clients &middot; strictly pre-order</p>
          <h2 className="vp-cars-title">What we source</h2>
        </div>
        <a href="#request" className="vp-cars-link">Request yours &rarr;</a>
      </Reveal>

      <div className="vp-cars-grid">
        {CARS.map((car, i) => (
          <Reveal as="article" index={i} key={car.slotId} className="vp-card">
            <div className="vp-card-media">
              <ImageSlot
                id={car.slotId}
                fit="cover"
                placeholder="Drop photo"
                initialSrc={images[car.slotId]}
                tone={car.tone}
              />
              <span className="vp-card-tag">{car.tag}</span>
            </div>
            <div className="vp-card-body">
              <h3 className="vp-card-title">{car.title}</h3>
              <p className="vp-card-note">{car.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="vp-cars-note">
        Examples of what we source. No ready stock in Ghana; everything is sourced to order. Prices
        quoted per request. Import duty is payable on arrival.
      </p>
    </section>
  );
}
