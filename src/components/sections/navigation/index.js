'use client'

import { navItems } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { CircleX, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false)
  const [items, setItems] = useState(0)
  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.1)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileNav) {
      document.body.classList.add('overflow-hidden', 'max-h-screen', 'h-screen');
    } else {
      document.body.classList.remove('overflow-hidden', 'max-h-screen', 'h-screen');
    }
  }, [mobileNav]);

  return (<>
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
          <Menu onClick={() => { setMobileNav(!mobileNav) }} className="cursor-pointer md:hidden" size={20} />
        </div>
      </div>
    </div>
    <div className={cn("fixed z-[100] w-full white duration-500 h-0 top-0 left-0 bg-cyan-950 opacity-0 invisible", mobileNav && "h-[100dvh] opacity-100 inset-x-0 visible")}>
      <div className="h-[80px] mt-[30px] px-[5%] flex items-center justify-between duration-500 text-white">
        <div className="text-3xl font-cursive -rotate-5 w-max"><Link href="/">Tender Touch</Link></div>
        <X onClick={() => { setMobileNav(!mobileNav) }} className="cursor-pointer" size={20} />
      </div>
      <div className="absolute flex flex-col items-center w-full gap-4 py-10 text-center -translate-y-1/2 top-1/2 ">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={() => { setMobileNav(false) }}
            className={cn("tracking-tight text-white text-3xl duration-0 hover:text-violet-400", pathname === item.href && "underline text-violet-400")}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  </>)
}