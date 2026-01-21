import CardSwap, { Card } from './CardSwap'
import Image from 'next/image'
import Gallery from '@/app/assets/Gallery.png'
import GYM from '@/app/assets/GYM.png'
import HrThoth from '@/app/assets/HrThoth.png'
import TBC from '@/app/assets/TBC.png'
import CLUB from '@/app/assets/Pool Club.png'
import TORSPACE from '@/app/assets/OLD PORTFOLIO.png'

export default function Projects() {
    const projects = [
        {
            title: 'Hr Thoth',
            description: 'HR Management System',
            image: HrThoth,
            link: 'https://www.hrthoth.com/',
            bgColor: 'bg-gradient-to-br from-blue-900 to-purple-900'
        },
        {
            title: 'PRO FITNESS',
            description: 'FITNESS WEB',
            image: GYM,
            link: 'https://pro-fitness-hualing.netlify.app/',
            bgColor: 'bg-gradient-to-br from-red-900 to-orange-900'
        },
        {
            title: 'Pool Club',
            description: 'Billiard Club',
            image: CLUB,
            link: 'https://poolclub.com',
            bgColor: 'bg-gradient-to-br from-green-900 to-teal-900'
        },
        {
            title: 'TorSpace',
            description: 'OLD PORTFOLIO',
            image: TORSPACE,
            link: 'https://torspace.netlify.app/',
            bgColor: 'bg-gradient-to-br from-indigo-900 to-blue-900'
        },
        {
            title: 'Gallery',
            description: 'GALLERY FOR PHOTOS',
            image: Gallery,
            link: 'https://memory-lovers.vercel.app/',
            bgColor: 'bg-gradient-to-br from-red-900 to-orange-900'
        },
        {
            title: 'TBC CAREERS PAGE',
            description: 'CARRERS PAGE',
            image: TBC,
            link: 'https://job-finder-app-ruby.vercel.app/',
            bgColor: 'bg-gradient-to-br from-red-900 to-orange-900'
        },
    ];

    return (
        <div className='text-white relative min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:h-[750px] py-8 sm:py-12 md:py-16'>
            <h1 className='font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-left px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 text-shadow-lg text-shadow-sky-300 hover:scale-105 hover:text-shadow-sky-400 duration-500 cursor-poiter'>PROJECTS</h1>
            <CardSwap
                cardDistance={10}
                verticalDistance={45}
                delay={1000}
                skewAmount={9}
                onCardClick={(idx) => {
                    window.open(projects[idx].link, '_blank');
                }}
            >
                {projects.map((project, index) => (
                    <Card 
                        key={index}
                        className="cursor-pointer overflow-hidden group"
                        onClick={() => window.open(project.link, '_blank')}
                    >
                        <div className="relative w-full h-full">
                            <Image 
                                src={project.image} 
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                            
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10" />
                            
                            <div className="relative z-20 flex flex-col justify-center items-center h-full p-3 sm:p-4 md:p-6 text-center">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-xs sm:text-sm md:text-base text-gray-200">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </CardSwap>
        </div>
    );
}