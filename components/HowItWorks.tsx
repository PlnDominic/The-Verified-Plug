import Reveal from "@/components/Reveal";
import { STEPS } from "@/lib/content";

const TERMS = [
  "Sourced and shipped from China to Ghana.",
  "Prices cover car, system change, export and shipping.",
  "Import duty not included. Payable on arrival.",
  "Strictly by pre-order. No ready stock.",
];

export default function HowItWorks() {
  return (
    <section id="how" className="vp-how">
      <Reveal className="vp-how-head">
        <p className="vp-section-eyebrow">The process</p>
        <h2 className="vp-how-title">Source &rarr; Ship &rarr; Arrive</h2>
        <p className="vp-how-sub">A tracked path from China to Ghana, with one point of contact.</p>
      </Reveal>

      <div className="vp-steps">
        {STEPS.map((step, i) => (
          <Reveal index={i} key={step.num}>
            <div className="vp-step-num">{step.num}</div>
            <div className="vp-step-rule" />
            <h3 className="vp-step-title">{step.title}</h3>
            <p className="vp-step-body">{step.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="vp-terms">
        <p className="vp-terms-eyebrow">Before you inquire</p>
        <ul className="vp-terms-list">
          {TERMS.map((term) => (
            <li className="vp-terms-item" key={term}>
              <span className="vp-terms-bullet">&bull;</span>
              {term}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
