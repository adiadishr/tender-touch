'use client';

import { cn } from "@/lib/utils";
import { ChevronRight, ShoppingBag, ShoppingBasket, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Cart({ scrolled }) {
  const [showCart, setShowCart] = useState(false);

  return (<>
    {/* Desktop Cart Button */}
    <div onClick={() => { setShowCart(!showCart) }} className={cn("relative border hidden md:flex items-center duration-500 gap-4 py-1 rounded-md px-3 cursor-pointer", scrolled ? "bg-violet-600 border-violet-600 hover:bg-violet-500 hover:border-violet-500 text-white backdrop-blur" : "bg-transparent border-white text-white")}>
      <ShoppingBasket size={24} />
      <div className="flex flex-col">
        <div className="font-semibold text-sm/4">13 items</div>
        <div className="text-sm/4">$450</div>
      </div>
    </div>
    {/* Mobile Cart Button */}
    <div onClick={() => { setShowCart(!showCart) }} className="fixed shadow-2xl flex w-[90%] py-2 px-4 text-white rounded-md cursor-pointer left-[5%] bottom-4 md:hidden bg-violet-600/80 backdrop-blur justify-between items-center">
      <div className=""></div>
      <div className="flex items-center">View Cart <ChevronRight size={16} /></div>
    </div>
    {/* Cart UI */}
    <div className={cn("fixed -z-[100] h-[100dvh] white duration-500 w-full inset-0 bg-black/50 opacity-0 invisible", showCart && "z-[100] opacity-100 visible")}>
      <div className="absolute right-0 top-0 z-[500] bg-white w-full md:w-1/3 h-[100dvh]">
        <X onClick={() => { setShowCart(!showCart) }} className="absolute cursor-pointer text-cyan-950 top-4 right-4" size={20} />
      </div>
    </div>
  </>)
}