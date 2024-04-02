import { DirectionAwareHoverDemo } from "@/components/DirectionAwareHoverDemo";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { NavbarDemo } from "@/components/Navbar";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { AnimatedTooltipPreview } from "@/components/Tooltip";

export default function Home() {
  return (
   <>
   <NavbarDemo />
   <AnimatedTooltipPreview />
   <ThreeDCardDemo />
   <HeroScrollDemo />
   <DirectionAwareHoverDemo />
   <HeroParallaxDemo />

   </>
  );
}
