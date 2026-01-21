import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase, SiBootstrap, SiGithub, SiJavascript, SiClaude, SiHtml5, SiCss3 } from 'react-icons/si';

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  imageSrc: string;
  imageAlt: string;
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

const techLogos = [
  { node: <SiReact />, title: "React"},
  { node: <SiNextdotjs />, title: "Next.js"},
  { node: <SiTypescript />, title: "TypeScript"},
  { node: <SiJavascript />, title: "JavaScript"},
  { node: <SiTailwindcss />, title: "Tailwind CSS"},
  { node: <SiSupabase />, title: "Supabase"},
  { node: <SiBootstrap />, title: "Boostrap"},
  { node: <SiGithub />, title: "GitHub", href: "https://github.com/PinoqioDOM" },
  { node: <SiClaude />, title: "Claude"},
  { node: <SiHtml5 />, title: "HMTL5"},
  { node: <SiCss3 />, title: "CSS3"},
];

// Helper component for social media icons
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sky-400 hover:scale-110   duration-300">
    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
  </a>
);  

export const MinimalistHero = ({
  mainText,
  imageSrc,
  imageAlt,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col items-center justify-between overflow-hidden bg-black text-white font-sans',
        className
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full py-4 items-center justify-between">
        <div className="flex w-full items-end justify-between px-4 sm:px-6 lg:px-8 mb-2 sm:mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center font-bold space-x-3 sm:space-x-4"
          >
            {socialLinks.map((link, index) => (
              <SocialIcon key={index} href={link.href} icon={link.icon} />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-base sm:text-lg font-bold hover:text-sky-400 hover:scale-105 duration-300 cursor-pointer"
          >
            {locationText}
          </motion.div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full px-4 sm:px-6 lg:px-8 py-4 text-white flex-grow grid-cols-1 items-center gap-4 sm:gap-6 lg:gap-8 md:grid-cols-3">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-relaxed md:mx-0 font-extrabold text-shadow-lg text-shadow-sky-300">{mainText}</h1>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full min-h-[250px] sm:min-h-[300px]">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute z-0 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] rounded-full bg-yellow-400/90 md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]"
            ></motion.div>
            <motion.img
                src={imageSrc}
                alt={imageAlt}
                className="relative z-10 h-full w-auto object-cover scale-125 sm:scale-150 right-8 sm:right-12 md:right-16 lg:right-20 bottom-4 sm:bottom-6 md:bottom-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found`;
                }}
            />
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-3 flex flex-col items-center justify-center text-center md:justify-start"
        >
          <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-relaxed md:mx-0 font-extrabold text-shadow-lg text-shadow-sky-300 tracking-wider'>FRONTEND</p>
          <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-relaxed md:mx-0 font-extrabold text-shadow-lg text-shadow-sky-300 tracking-widest'>DEVELOPER</p>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 w-full pb-2 sm:pb-4">
        {/* Logo Loop Container - Fixed positioning */}
        <div className="w-full relative h-[50px] sm:h-[40px] lg:h-[60px] overflow-hidden cursor-pointer ">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={40}
            gap={30}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technology partners"
          />
        </div>
      </footer>
    </div>
  );
};