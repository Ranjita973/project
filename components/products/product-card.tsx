import { Badge, ChevronDownIcon, ChevronUpIcon, Link, StarIcon } from "lucide-react";
// import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";


interface Product {
    id: number;
    name: string;
    description: string;
    tags: string[];
    votes: number;
    isFeatured: boolean;
}


export default function ProductCard({ product }:{
    product: Product }) {
        const hasVoted = false;
         return (
                <div className="flex flex-row gap-6 overflow-x-auto">
            {/* //  <Link href={`/products/${product.id}`}> */}
                <Card className="min-w-[320px] group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-[180px]">
                    <CardHeader className="flex-1">
                        <div className="flex item-start gap-4">
                            <div className="flex-l min-w-0">
                                <div className="flex item-center gap-2">
                        <CardTitle className="text-lg group-hover:text-primary 
                        transition-colors">
                            {product.name}
                        </CardTitle>
                        {product.isFeatured && (
                            // <button className="gap-1 bg-primary text-primary-foreground"> 
                            // <StarIcon  className="h-4 w-4" />
                            //    Featured
                            //  </button>
                            <Button>
                              <StarIcon className="h-4 w-4" />
                               featured
                          </Button>

                            )}
                        </div>
                        <CardDescription>
                            {product.description}
                        </CardDescription>
                        </div>
                        {/** voting button */}
                        <div className="flex flex-col items-center gap-1 shrink-0">
                        <Button variant="ghost"
                        size="icon-sm"
                         className={cn(
                            "h-8 w-8 text-primary",
                          hasVoted 
                          ? "bg:primary/10 text-primary hover:bg-primary/20"
                           :"hover:bg-primary/10 hover:text-primary"
                        )}
                        >
                           
                            <ChevronUpIcon className="size-5 text-destructive" />
                        </Button>
                        <span className="text-sm font-semibold transition-colors text-foreground">
                           10
                        </span>
                        <Button 
                          variant="ghost"
                          size="icon-sm"
                          className={cn(
                            "h-8 w-8 text-primary",
                          hasVoted 
                          ? "hover:text-destructive"
                           :"opacity-50 cursor-not-allowed"
                        )}
                        >
                         <ChevronDownIcon className="size-5 text-destructive" />
                        </Button>
                        </div>
                        </div>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex item-start gap-4">
                           {product.tags.map((tag) => (
                              <Button variant="outline" key={tag}>{tag}
                              </Button>
                           ))}
                         
                         </div>
                    </CardFooter>
                    
                </Card>
            {/* //   </Link> */}
            </div>
            
            


         ) 
    }