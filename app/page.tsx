"use client";

import React, { useState, useEffect } from "react";
import { SpiralAnimation } from "@/components/ui/spiral-animation"; 
import { MinimalistHero } from "@/components/minimalist-hero";
import { Instagram, Twitter, Facebook } from "lucide-react";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  const [showSpiral, setShowSpiral] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpiral(false);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {showSpiral ? (
        <SpiralAnimation />
      ) : (
        <>
          <MinimalistHero 
            logoText="PINOQIO "
            navLinks={[
              { label: "PROJECTS", href: "#" },
              { label: "CONTACT", href: "#contact" }
            ]}
            mainText="TORNIKE ALKHANISHVILI"
            readMoreLink="FRONTEND DEVELOPER"
            imageSrc="./1.png"
            imageAlt="Fashion model"
            overlayText={{
              part1:"SEEK",
              part2: "NEXT"
            }}
            socialLinks={[
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Facebook, href: "https://facebook.com" }
            ]}
            locationText="Tbilisi, Georgia"
          />
          <Projects />
          <Footer />
        </>
      )}
    </div>
  );
}