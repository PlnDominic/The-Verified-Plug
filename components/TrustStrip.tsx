import Reveal from "@/components/Reveal";

const ITEMS = [
  { title: "Verified suppliers", body: "Vetted partners, inspected before export." },
  { title: "Transparent pricing", body: "Covers the car, system change, export paperwork and shipping." },
  { title: "End-to-end handling", body: "Sourcing to delivery, one point of contact." },
];

export default function TrustStrip() {
  return (
    <section className="vp-trust">
      <Reveal className="vp-trust-grid">
        {ITEMS.map((item) => (
          <div key={item.title}>
            <p className="vp-trust-title">{item.title}</p>
            <p className="vp-trust-body">{item.body}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
