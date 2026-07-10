export const WHATSAPP_NUMBER = "233241906750";
export const PHONE_DISPLAY = "+233 24 190 6750";
export const PHONE_TEL_HREF = "tel:+233241906750";

export type Car = {
  title: string;
  note: string;
  tag: string;
  slotId: string;
  tone: string;
  defaultImage: string;
};

export const CARS: Car[] = [
  { title: "Toyota RAV4", note: "SUV · by pre-order", tag: "Vehicle", slotId: "car-1", tone: "linear-gradient(160deg,#e7ddcf,#cdbba4)", defaultImage: "/images/car-1-toyota-rav4.jpg" },
  { title: "Honda CR-V", note: "SUV · by pre-order", tag: "Vehicle", slotId: "car-2", tone: "linear-gradient(160deg,#f1ece3,#d8cbb8)", defaultImage: "/images/car-2-honda-crv.jpg" },
  { title: "Toyota Corolla", note: "Sedan · by pre-order", tag: "Vehicle", slotId: "car-3", tone: "linear-gradient(160deg,#d8cbb8,#cdbba4)", defaultImage: "/images/car-3-toyota-corolla.jpg" },
  { title: "BYD Song Plus", note: "EV / Hybrid · by pre-order", tag: "Vehicle", slotId: "car-4", tone: "linear-gradient(160deg,#e7ddcf,#d8cbb8)", defaultImage: "/images/car-4-byd-song-plus.jpg" },
  { title: "Mercedes-Benz C-Class", note: "Sedan · by pre-order", tag: "Vehicle", slotId: "car-5", tone: "linear-gradient(160deg,#cdbba4,#b9a78d)", defaultImage: "/images/car-5-mercedes-c-class.jpg" },
  { title: "Changan / GAC models", note: "SUV & sedan · by pre-order", tag: "Vehicle", slotId: "car-6", tone: "linear-gradient(160deg,#f1ece3,#cdbba4)", defaultImage: "/images/car-6-changan-cs75.jpg" },
  { title: "Lexus RX", note: "Luxury SUV · by pre-order", tag: "Vehicle", slotId: "car-7", tone: "linear-gradient(160deg,#d8cbb8,#e7ddcf)", defaultImage: "/images/car-7-lexus-rx.jpg" },
  { title: "General goods & machinery", note: "Sourced to order · by request", tag: "Goods", slotId: "car-8", tone: "linear-gradient(160deg,#2a3344,#1d2533)", defaultImage: "/images/car-8-goods-machinery.jpg" },
];

export type Step = {
  num: string;
  title: string;
  body: string;
};

export const STEPS: Step[] = [
  { num: "01", title: "Source & inspect", body: "Send a photo, model, or budget. We source and inspect before purchase." },
  { num: "02", title: "Export & ship", body: "We handle system change, documentation and shipping, and keep you updated." },
  { num: "03", title: "Arrive in Ghana", body: "Arrives in Ghana. Duty settled on arrival, then handed over to you." },
];

export type RequestFormState = {
  name: string;
  budget: string;
  want: string;
  notes: string;
};

export function buildWaLink(form: RequestFormState): string {
  const lines = ["Hello The Verified Plug! I'd like to inquire."];
  if (form.name) lines.push("Name: " + form.name);
  if (form.want) lines.push("Looking for: " + form.want);
  if (form.budget) lines.push("Budget: " + form.budget);
  if (form.notes) lines.push("Notes: " + form.notes);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export const DEFAULT_WA_LINK = buildWaLink({ name: "", budget: "", want: "", notes: "" });
