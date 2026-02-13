import FeatureBanner from "@/components/FeatureBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TopBanner from "@/components/TopBanner";
import ProductsSection from "@/components/ProductsSection";
import RecoverySection from "@/components/RecoverySection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Header />
      <HeroSection />
      <FeatureBanner />
      <ProductsSection />
      <RecoverySection/>
      <JoinSection/>
      <Footer />
    </>
  );
}
