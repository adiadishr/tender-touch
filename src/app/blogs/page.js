import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import AuxHero from "@/components/sections/aux-hero";
import Image from "next/image";

export const metadata = {
  title: "Tender Touch | Contact Us",
};

export default function Page() {
  return (<>
    <AuxHero title="Blogs" />
    <div className="py-20 w-[85%] mx-auto text-cyan-950">
      <div className="text-3xl tracking-tight mb-8">Featured Articles</div>
      <div className="grid md:grid-cols-2 gap-8">
        <Link href="/#" className="flex flex-col gap-6 group">
          <div className="relative w-full h-90 rounded-md overflow-hidden">
            <Image fill src="/hero.jpg" alt="blog" className="object-cover group-hover:scale-105 duration-500" />
          </div>
          <div className="py-1.5 px-3 bg-cyan-600/20 text-xs w-max rounded-md">Potty Training</div>
          <div className="text-2xl -mb-4">How to change your baby&apos;s diaper?</div>
          <div className="">Learn the best techniques on how to change a baby&apos;s diaper step by step. Expert tips for efficient and hygienic diaper changing.</div>
        </Link>
        <Link href="/#" className="flex flex-col gap-6 group">
          <div className="relative w-full h-90 rounded-md overflow-hidden">
            <Image fill src="/hero.jpg" alt="blog" className="object-cover group-hover:scale-105 duration-500" />
          </div>
          <div className="py-1.5 px-3 bg-cyan-600/20 text-xs w-max rounded-md">Potty Training</div>
          <div className="text-2xl -mb-4">How to change your baby&apos;s diaper?</div>
          <div className="">Learn the best techniques on how to change a baby&apos;s diaper step by step. Expert tips for efficient and hygienic diaper changing.</div>
        </Link>
      </div>
    </div>
    <div className="pb-20 w-[85%] mx-auto text-cyan-950">
      <div className="text-3xl tracking-tight mb-8">All Articles</div>
    </div>
  </>)
}