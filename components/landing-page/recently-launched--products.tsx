import { LucideRocket, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";

export default function RecentlyLaunchedProducts(){
    const recentlyLaunchedProducts = [];

   return(
    <section className="py-20">
        <div className="wrapper mx-20 space-y-12">
            <SectionHeader 
            title="Recently Launched" 
            icon={RocketIcon}
            description="Discover the latest product from our community"
                />
            
             {recentlyLaunchedProducts.length > 0 ? (
            <div className="grid-wrapper">
                {recentlyLaunchedProducts.map((product) => (
                  <ProductCard key={product.id} product=
                 {product} />
             ))}
            </div>
             ) :(
                  <EmptyState 
                  message="No products launchedin the lask week. 
                  check back soon or new launches."/>
             )}
             </div>
    </section>
   );
}