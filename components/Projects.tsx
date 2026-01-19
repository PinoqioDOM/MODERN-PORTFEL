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
        <div style={{ height: '750px', position: 'relative' }} className='text-white'>
            <h1 className='font-extrabold text-9xl text-left p-8'>PROJECTS</h1>
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
                            
                            <div className="relative z-20 flex flex-col justify-center items-center h-full p-6 text-center">
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-200">
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