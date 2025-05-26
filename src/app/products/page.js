import AuxHero from "@/components/sections/aux-hero";
import { ArrowRight, Star, StarHalf } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (<>
    <AuxHero title="Products" />
    <div className="relative py-20 text-cyan-950 w-[90%] mx-auto grid md:grid-cols-4 gap-8">
      <div className="col-span-1">
        <div className="sticky top-[calc(110px+2.5rem)] flex flex-wrap md:flex-col gap-4">
          <div className="text-neutral-600">Product Types</div>
          <div className="text-lg text-violet-400">All</div>
          <div className="text-lg">Diapers</div>
          <div className="text-lg">Sanitary Pads</div>
          <div className="text-lg">Wet Wipes</div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3">
        <div className="mb-8 text-3xl">Award Winning Diapers</div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-12">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="flex flex-col" key={index}>
              <div className="relative mb-4 aspect-square">
                <Image
                  src='/hero.jpg'
                  alt='product'
                  fill
                  className="object-cover rounded-md"
                />
                <div className="absolute z-10 px-2 py-1 text-xs rounded-md bg-white/80 text-cyan-950 top-2 left-2">Up to 12 hours of leak protection</div>
              </div>
              <div className="flex flex-col gap-2 mb-2 md:items-center md:flex-row">
                <div className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, subIndex) => {
                    return subIndex < 4 ? (
                      <Star key={subIndex} size={13} className="text-yellow-500" fill="oklch(79.5% 0.184 86.047)" />
                    ) : (
                      <StarHalf key={subIndex} size={13} className="text-yellow-500" fill="oklch(79.5% 0.184 86.047)" />
                    );
                  })}
                </div>
                {/* <div className="text-sm tracking-tight underline text-cyan-950">4.58/5 based on 17749 reviews</div> */}
              </div>
              <div className="-mb-1 text-2xl tracking-tight text-cyan-950">Premium Diapers</div>
              <div className="mb-4 tracking-tight text-cyan-950">From $18.17</div>
              <div className="btn">Learn More <ArrowRight size={16} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>)
}