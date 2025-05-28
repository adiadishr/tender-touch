"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { products } from "@/constants/products";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductNavigation() {
  const pathname = usePathname();
  return (<>
    <div className="sticky top-[calc(110px+2.5rem)] flex flex-wrap md:flex-col gap-4">
      <div className="text-sm text-neutral-600">Product Types</div>
      <Link href="/products" className={cn("text-base hover:underline duration-300 hover:text-cyan-900", pathname === "/products" && "text-violet-600 hover:text-violet-600")}>All Products</Link>
      <Accordion
        type="multiple"
        collapsible="true"
        defaultValue={products.map(cat => cat.id)}
        className="w-full"
      >
        {products.map((category, idx) => (
          <AccordionItem key={idx} className="pt-0 pb-4 border-0" value={category.id}>
            {category.accordian ? (
              <>
                <AccordionTrigger className="py-0 text-base">{category.title}</AccordionTrigger>
                <AccordionContent className="flex flex-col pb-0">
                  {category.subCategories?.map((sub, subIdx) => (
                    <Link href={`/products/${sub.id}`} key={subIdx} className={cn("pb-2 duration-300 hover:text-cyan-900 text-base pl-4 first:pt-4 hover:underline last:pb-0", pathname === `/products/${sub.id}` && "text-violet-600 hover:text-violet-600")}>
                      {sub.title}
                    </Link>
                  ))}
                </AccordionContent>
              </>
            ) : (
              <Link href={`/products/${category.id}`} className={cn("text-base hover:underline duration-300 hover:text-cyan-900", pathname === `/products/${category.id}` && "text-violet-600 hover:text-violet-600")}>{category.title}</Link>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </>)
}