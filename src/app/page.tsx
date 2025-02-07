import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";
import GetAccessToKlooma from "@/components/GetAccessToKlooma";
import Hero from "@/components/Hero";
import SecondSection from "@/components/SecondSection";
import WhatsOnKlooma from "@/components/WhatsOnKlooma";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-40">
        <Hero />
        <SecondSection />
        <ContentSection/>
        <WhatsOnKlooma />
        <GetAccessToKlooma />
      </div>
      <Footer />
    </>
  );
}
