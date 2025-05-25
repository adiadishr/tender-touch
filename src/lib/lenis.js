'use client'

import Lenis from 'lenis';
import { useEffect } from "react";

export function UseLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, [])
}