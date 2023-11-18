import Image from "next/image";
import MainPage from "../components/MainPage";
import SecondSection from "@/components/SecondSection";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainPage />
      <SecondSection />
      <ContactPage />
      <Footer />
    </main>
  );
}
