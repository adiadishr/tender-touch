'use client'

import { navItems } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Cart from "@/components/cart";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.1)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href, pathname) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };


  return (<>
    {/* Header */}
    <div className="fixed top-0 z-50 w-full">
      <div className="h-[30px] bg-cyan-950 text-xs justify-center tracking-tight w-full text-white flex items-center">
        Get 15% off when you order online! <span className="ml-2 underline text-violet-400 hover:text-violet-300">Shop now!</span>
      </div>
      <div className={cn("h-[80px] px-[5%] flex items-center justify-center md:justify-between duration-300", scrolled ? "bg-white text-cyan-950" : "bg-transparent text-white")}>
        <div className="flex items-center">
          <div className="text-3xl font-cursive -rotate-5 lg:mr-20"><Link href="/">Tender Touch</Link></div>
          <div className="hidden gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "tracking-tight duration-0",
                  isActive(item.href, pathname) && "underline",
                  isActive(item.href, pathname) && scrolled && "text-violet-600 hover:text-violet-500",
                  scrolled ? "hover:text-violet-600" : "hover:underline"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute flex items-center gap-4 right-[5%]">
          <Cart scrolled={scrolled} />
          <div className="flex items-center justify-center p-2 text-white rounded-full cursor-pointer md:hidden bg-violet-600">
            <Menu onClick={() => { setMobileNav(!mobileNav) }} size={20} />
          </div>
        </div>
      </div>
    </div>
    {/* Mobile Navigation Interface */}
    <div className={cn("fixed z-[100] w-full white duration-500 h-0 top-0 left-0 bg-cyan-950 opacity-0 invisible", mobileNav && "h-[100dvh] opacity-100 inset-x-0 visible")}>
      <div className="h-[80px] mt-[30px] px-[5%] flex items-center justify-center duration-500 text-white">
        <div className="text-3xl font-cursive -rotate-5 w-max"><Link href="/">Tender Touch</Link></div>
        <div className="absolute flex items-center gap-4 right-[5%]">
          <div className="flex items-center justify-center p-2 bg-white rounded-full cursor-pointer md:hidden text-violet-600">
            <X onClick={() => { setMobileNav(!mobileNav) }} size={20} />
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col items-center w-full gap-4 py-10 text-center -translate-y-1/2 top-1/2 ">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={() => { setMobileNav(false) }}
            className={cn("tracking-tight text-white text-3xl duration-300 hover:text-violet-400", isActive(item.href, pathname) && "underline text-violet-400")}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  </>)
}