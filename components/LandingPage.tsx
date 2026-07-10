import "./page.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import CarsSection from "@/components/CarsSection";
import HowItWorks from "@/components/HowItWorks";
import RequestForm from "@/components/RequestForm";
import Footer from "@/components/Footer";

export default function LandingPage({ images }: { images: Record<string, string> }) {
  return (
    <div>
      <Header />
      <Hero initialSrc={images["vp-hero"]} />
      <TrustStrip />
      <CarsSection images={images} />
      <HowItWorks />
      <RequestForm initialSrc={images["vp-request"]} />
      <Footer />
    </div>
  );
}
