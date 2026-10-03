import Header from "./components/Header";
import CategoryNav from "./components/CategoryNav";
import HeroBanner from "./components/HeroBanner";
import ProductSection from "./components/ProductSection";
import CategorySection from "./components/CategorySection";
import BrandSection from "./components/BrandSection";
import EssentialsSection from "./components/EssentialsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <CategoryNav />
      <main className="pb-16">
        <HeroBanner />
        <ProductSection />
        <CategorySection />
        <BrandSection />
        <EssentialsSection />
      </main>
      <Footer />
    </>
  );
}
