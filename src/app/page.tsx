import Image from "next/image";
import MainPage from "../components/MainPage";
import SecondSection from "@/components/SecondSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainPage />
      <SecondSection />
    </main>
  );
}
