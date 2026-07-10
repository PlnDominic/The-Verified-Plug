import LandingPage from "@/components/LandingPage";
import { readSlotImages } from "@/lib/uploads";

export const dynamic = "force-dynamic";

export default async function Home() {
  const images = await readSlotImages();
  return <LandingPage images={images} />;
}
