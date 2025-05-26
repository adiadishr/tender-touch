'use client'

import { navItems } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false)
  const [items, setItems] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.1)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="h-[30px] bg-cyan-950 text-xs justify-center tracking-tight w-full text-white flex items-center">New look, same Rascal + Friends, Meet Rascals</div>
      <div className={cn("h-[80px] px-[5%] flex items-center justify-between duration-300", scrolled ? "bg-white text-cyan-950" : "bg-transparent text-white")}>
        <div className="flex items-center">
          <div className="text-3xl font-cursive -rotate-5 lg:mr-20"><Link href="/">Tender Touch</Link></div>
          <div className="hidden gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn("tracking-tight duration-0 hover:text-violet-400", pathname === item.href && "underline", pathname === item.href & scrolled && "underline text-violet-400")}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div onClick={() => { setItems(items + 1) }} className="relative cursor-pointer">
            <div className="rounded-full selection:bg-transparent text-sm absolute -top-2 -right-2 bg-violet-400 size-4.5 text-white flex items-center justify-center">{items}</div>
            <ShoppingBag size={20} />
          </div>
          <div className="btn">Shop Now</div>
          <Search size={20} />
        </div>
      </div>
    </div>
  )
}