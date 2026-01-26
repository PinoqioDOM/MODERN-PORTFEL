"use client";

import React, { useState, useEffect } from "react";
import { SpiralAnimation } from "@/components/ui/spiral-animation"; 
import { MinimalistHero } from "@/components/minimalist-hero";
import { Instagram, Twitter, Facebook, Github, Linkedin, Mail } from "lucide-react";
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
            imageSrc="./1.png"
            imageAlt="Fashion model"
            socialLinks={[
              { icon: Github, href: "https://github.com/PinoqioDOM" },
              { icon: Linkedin, href: "httpswww.linkedin.com/in/tornike-alxanishvili-58485b318" },
              { icon: Mail, href: "mailto:alkhanishvilit@gmail.com" }
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