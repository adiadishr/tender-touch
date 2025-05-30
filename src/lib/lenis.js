'use client'

import Lenis from 'lenis';
import { useEffect } from "react";

let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

export function UseLenis() {

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    lenisInstance = lenis

    return () => {
      lenisInstance = null
    }

  }, [])
}