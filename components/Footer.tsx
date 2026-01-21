'use client'

import { DottedSurface } from './dotted-surface';
import { cn } from '@/lib/utils';
import LogoLoop from './LogoLoop';

// Text items for the loop
const textItems = [
  { node: <span className="font-extrabold text-white">LETS WORK TOGETHER</span>, title: "Let's Work Together!" },
  { node: <span className="font-extrabold text-white">LETS WORK TOGETHER</span>, title: "Let's Work Together!" },
  { node: <span className="font-extrabold text-white">LETS WORK TOGETHER</span>, title: "Let's Work Together!" },
];

const CvText = [
  { node: <span className="font-extrabold text-white">DOWNLOAD</span>, title: "DOWNLOAD!" },
  { node: <span className="font-extrabold text-white">DOWNLOAD</span>, title: "DOWNLOAD!" },
  { node: <span className="font-extrabold text-white">DOWNLOAD</span>, title: "DOWNLOAD!" },
];

  const handleCvDownload = () => {
    const cvFiles = [
      { url: '/English.pdf', name: 'CV_English.pdf' },
      { url: '/Georgian.pdf', name: 'CV_Georgian.pdf' }
    ];

    cvFiles.forEach((file, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = file.url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 100);
    });
  };

export default function Footer() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* DottedSurface as background */}
      <DottedSurface />
      
      {/* Logo Loop at the top */}
      <div className="absolute top-0 left-0 right-0 z-20 w-full h-[60px] sm:h-[80px] lg:h-[100px] overflow-hidden cursor-pointer">
        <LogoLoop
          logos={textItems}
          speed={200}
          direction="left"
          logoHeight={60}
          gap={50}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Let's work together"
        />
      </div>

      <div className="absolute top-15 left-0 right-0 z-20 w-full h-[60px] sm:h-[80px] lg:h-[100px] overflow-hidden cursor-pointer">
        <LogoLoop
          logos={CvText}
          speed={200}
          direction="right"
          logoHeight={60}
          gap={50}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="DOWNLOAD REQUIRED"
        />
      </div>
      
      {/* Footer content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <div
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2',
              'bg-[radial-gradient(ellipse_at_center,hsl(var(--foreground)/0.1),transparent_50%)]',
              'blur-[30px]',
            )}
          />
          <h1 
            onClick={handleCvDownload}
            className="relative font-sans text-9xl md:text-9xl font-extrabold text-white tracking-widest text-shadow-lg text-shadow-sky-300
            hover:scale-300 hover:text-shadow-lg hover:text-shadow-sky-400  duration-500 cursor-pointer">
            CV
          </h1>
        </div>
      </div>
    </section>
  );
}