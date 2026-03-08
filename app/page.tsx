import HeroSection from "@/components/landing-page/hero-section";
import FeaturedProducts from "@/components/landing-page/featured-products";
import { Card } from "@/components/ui/card";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched--products";




export default function Home() {
  return (
    <div>
      <HeroSection />
       
     <FeaturedProducts />

    <Card />

    <RecentlyLaunchedProducts />

    
  
    </div>

  );
}
