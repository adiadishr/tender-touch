'use client'

import { navItems } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="h-[30px] bg-cyan-950 text-xs justify-center tracking-tight w-full text-white flex items-center">New look, same Rascal + Friends, Meet Rascals</div>
      <div className={cn("h-[80px] px-[5%] flex items-center justify-between", scrolled ? "bg-white text-cyan-950" : "bg-transparent text-white duration-500")}>
        <div className="flex items-center">
          <div className="text-3xl font-cursive -rotate-5 mr-20">Rascals</div>
          <div className="flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="tracking-tight"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="btn">Shop Now</div>
          <Search size={20} />
        </div>
      </div>
    </div>
  )
}