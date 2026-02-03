import { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AllProducts from "./components/AllProducts/AllProducts";
import ProductShopVideo from "./components/ProductShopVideo/ProductShopVideo";
import Footer from "./components/Footer/Footer";
import DeliveryArea from "./components/DeliveryArea/DeliveryArea";
import EarnAndHow from "./components/EarnAndHow/EarnAndHow";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* ✅ IMPORTANT: Suspense wrapper */}
      <Suspense fallback={<div style={{ padding: 40 }}>Loading products...</div>}>
        <AllProducts />
      </Suspense>

      <ProductShopVideo />
      <DeliveryArea />
      <EarnAndHow />
      <Footer />
    </>
  );
}

