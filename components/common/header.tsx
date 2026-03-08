import { CompassIcon, HomeIcon, SparkleIcon } from "lucide-react"
import { Button } from "../ui/button";


const Logo = () => {
    return(
    <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
        <SparkleIcon  className="size-4 text-primary-foreground"/>
        <span className="text-xl font-bold">
           i<span className="text-primary">
               Built
            </span>This
        </span>
    </div>
    
    );
};


export default function Header(){
    const isSignedIn = true;;
    return(
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur
    supports-backdrop-filter:bg-background/60">
        <div className="wrapper px-12">
            <div className="flex h-16 items-center justify-between"></div>
            <Logo />
            <nav className="flex items-center gap-1">
                {/* <link className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground
                hover;text-foreground transition-colors
                hover:bg-muted/50"> */}
                    <HomeIcon  className="size-4"/>
                    <span>Home</span>
                {/* </link> */}

                <CompassIcon  className="size-4"/>
                <span>Explore</span>
                
                
                <div className="flex items-center gap-3">
                  {isSignedIn ? (<Button>
                      <SparkleIcon className="h-4 w-4" />
                      Submit project
                   </Button>
                ) : (
                    <>
                    <Button variant="ghost">Sign In</Button>
                    <Button>SignUp</Button>
                    </>
                )}
                </div>
            </nav>
        </div>
    </header>
        
    ) 
}