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
    <div className="py-20 w-[90%] mx-auto text-cyan-950">
      <div className="mb-8 text-3xl tracking-tight">Featured Articles</div>
      <div className="grid gap-8 md:grid-cols-2">
        <Link href="/#" className="flex flex-col gap-6 group">
          <div className="relative w-full overflow-hidden rounded-md h-90">
            <Image fill src="/hero.jpg" alt="blog" className="object-cover duration-500 group-hover:scale-105" />
          </div>
          <div className="py-1.5 px-3 bg-cyan-600/20 text-xs w-max rounded-md">Potty Training</div>
          <div className="-mb-4 text-2xl">How to change your baby&apos;s diaper?</div>
          <div className="">Learn the best techniques on how to change a baby&apos;s diaper step by step. Expert tips for efficient and hygienic diaper changing.</div>
        </Link>
        <Link href="/#" className="flex flex-col gap-6 group">
          <div className="relative w-full overflow-hidden rounded-md h-90">
            <Image fill src="/hero.jpg" alt="blog" className="object-cover duration-500 group-hover:scale-105" />
          </div>
          <div className="py-1.5 px-3 bg-cyan-600/20 text-xs w-max rounded-md">Potty Training</div>
          <div className="-mb-4 text-2xl">How to change your baby&apos;s diaper?</div>
          <div className="">Learn the best techniques on how to change a baby&apos;s diaper step by step. Expert tips for efficient and hygienic diaper changing.</div>
        </Link>
      </div>
    </div>
    <div className="pb-20 w-[90%] mx-auto text-cyan-950">
      <div className="mb-8 text-3xl tracking-tight">All Articles</div>
    </div>
  </>)
}