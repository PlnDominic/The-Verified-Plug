import Reveal from "@/components/Reveal";

const PRICING_NOTES = [
  "All cars are sourced and shipped from China to Ghana.",
  "Any price you see me post covers the cost of buying the car, change of system/language, export processes, and shipping to Ghana.",
  "Import duty is NOT included in the posted prices and is payable on arrival in Ghana.",
];

const PREORDER_NOTES = [
  "All cars you see me post are sourced for clients.",
  "I do not have readily available cars in Ghana.",
  "All cars are strictly by pre-order.",
];

const HOW_TO_INQUIRE = [
  "Send me a picture of the car, or",
  "Tell me the brand/model you want, or",
  "Share your budget, and I’ll source the best available option for you.",
];

export default function HowItWorks() {
  return (
    <section id="how" className="vp-how">
      <Reveal className="vp-how-head">
        <p className="vp-section-eyebrow">Before you inquire</p>
        <h2 className="vp-how-title">Hello 👋🏽 Welcome to The Verified Plug.</h2>
        <p className="vp-how-sub">Kindly take note of the following before making an inquiry:</p>
      </Reveal>

      <Reveal className="vp-terms">
        <ul className="vp-terms-list">
          {PRICING_NOTES.map((note) => (
            <li className="vp-terms-item" key={note}>
              <span className="vp-terms-bullet">&bull;</span>
              {note}
            </li>
          ))}
        </ul>

        <p className="vp-notice-label">Also, please note that:</p>
        <ul className="vp-terms-list">
          {PREORDER_NOTES.map((note) => (
            <li className="vp-terms-item" key={note}>
              <span className="vp-terms-bullet">&bull;</span>
              {note}
            </li>
          ))}
        </ul>

        <p className="vp-notice-label">If you&rsquo;re interested in getting a car, kindly:</p>
        <ul className="vp-terms-list">
          {HOW_TO_INQUIRE.map((note) => (
            <li className="vp-terms-item" key={note}>
              <span className="vp-terms-bullet">&bull;</span>
              {note}
            </li>
          ))}
        </ul>

        <p className="vp-notice-closing">
          Thank you for your understanding and for trusting The Verified Plug
          <br />
          I&rsquo;ll attend to you shortly.
        </p>
      </Reveal>
    </section>
  );
}
