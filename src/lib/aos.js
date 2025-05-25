'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function UseAOS() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
}