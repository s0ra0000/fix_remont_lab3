import MainPage from "../components/MainPage";
import SecondSection from "@/components/SecondSection";
import ContactPage from "@/components/ContactPage";
import SlideShow from "@/components/SlideShow";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainPage />
      <SecondSection />
      <SlideShow />
      <ContactPage />
    </main>
  );
}
