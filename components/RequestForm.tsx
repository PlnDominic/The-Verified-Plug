"use client";

import { useState } from "react";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Header";
import { PHONE_DISPLAY, PHONE_TEL_HREF, RequestFormState, buildWaLink } from "@/lib/content";

const EMPTY_FORM: RequestFormState = { name: "", budget: "", want: "", notes: "" };

export default function RequestForm({ initialSrc }: { initialSrc?: string }) {
  const [form, setForm] = useState<RequestFormState>(EMPTY_FORM);

  function setField(key: keyof RequestFormState, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onSubmit() {
    window.open(buildWaLink(form), "_blank", "noopener");
  }

  return (
    <section id="request" className="vp-request">
      <div className="vp-request-media">
        <ImageSlot
          id="vp-request"
          fit="cover"
          placeholder="Drop image (cars on a carrier, or a delivered vehicle)"
          initialSrc={initialSrc}
          tone="linear-gradient(160deg,#e7ddcf 0%,#d8cbb8 52%,#cdbba4 100%)"
        />
      </div>

      <Reveal className="vp-request-form-wrap">
        <p className="vp-section-eyebrow">Tell us what you want</p>
        <h2 className="vp-request-title">Request a car or consignment</h2>
        <p className="vp-request-sub">
          Send a brand, model, photo, or budget. We&apos;ll source it and quote you. Submitting opens
          WhatsApp with your details ready to send.
        </p>

        <div className="vp-fields">
          <div className="vp-field-row">
            <label className="vp-field">
              <span className="vp-field-label">Your name</span>
              <input
                type="text"
                className="vp-input"
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
                placeholder="Full name"
              />
            </label>
            <label className="vp-field">
              <span className="vp-field-label">Budget (optional)</span>
              <input
                type="text"
                className="vp-input"
                value={form.budget}
                onChange={(e) => setField("budget", e.target.value)}
                placeholder="e.g. GHS 250,000"
              />
            </label>
          </div>

          <label className="vp-field">
            <span className="vp-field-label">Car brand / model or goods</span>
            <input
              type="text"
              className="vp-input"
              value={form.want}
              onChange={(e) => setField("want", e.target.value)}
              placeholder="e.g. Toyota RAV4 2020, or forklift parts"
            />
          </label>

          <label className="vp-field">
            <span className="vp-field-label">Anything else</span>
            <textarea
              rows={3}
              className="vp-textarea"
              value={form.notes}
              onChange={(e) => setField("notes", e.target.value)}
              placeholder="Colour, year, condition, timeline…"
            />
          </label>

          <button onClick={onSubmit} className="vp-submit">
            <WhatsAppIcon size={17} />
            Send on WhatsApp
          </button>

          <p className="vp-call-note">
            Prefer to call? <a href={PHONE_TEL_HREF}>{PHONE_DISPLAY}</a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
