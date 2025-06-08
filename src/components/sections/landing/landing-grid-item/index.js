import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LandingGridItem({ product, index }) {

  const isOdd = index % 2 !== 0;

  return (
    <div className="grid lg:grid-cols-2">
      <div className={cn(
        "flex my-auto px-[5%] md:px-[10%] flex-col gap-6 md:py-0 py-20",
        isOdd && "lg:order-last"
      )}>
        <div className="text-3xl tracking-tight">{product.title}</div>
        <p className="tracking-tight text-base/5">{product.tagline}</p>
        <p className="tracking-tight text-base/5">{product.desc}</p>
        <Link href={`/products/${product.id}`} className="btn">
          Shop for {product.title.toLowerCase()} <ArrowRight size={16} />
        </Link>
      </div>

      <div className={cn(
        "relative md:h-[calc(100dvh-110px)] h-80",
        isOdd ? "order-first" : "order-first lg:order-last"
      )}>
        <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-10" />
        <Image fill src={product.src} alt={product.title} className="object-cover -z-10" />
        <div className={cn(
          "absolute flex items-center gap-2 text-xs text-white rotate-90 md:text-sm top-1/2",
          isOdd ? "w-max h-max -right-4 md:left-0" : "-right-4 md:right-0"
        )}>
          Scroll to see more <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}
