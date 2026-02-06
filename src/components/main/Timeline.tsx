'use client'

import { motion } from 'framer-motion'
import { FC, JSX } from 'react'
import Image from 'next/image'
import { Timeline as TimelineComponent } from '@/components/ui/timeline'
import { FaBriefcase, FaBuilding, FaCode, FaLaptopCode } from 'react-icons/fa'

export interface TimelineItem {
  id: number
  type: 'work' | 'project'
  title: string
  company: string
  location: string
  date: string
  imageURL: string
  description: string
  achievements: string[]
  icon: JSX.Element
  companyIcon: JSX.Element
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'AI Agent Hackathon : AI Fitness Analyst',
    company: 'KIET University',
    location: 'Ghaziabad',
    date: 'Nov 2025 - Present',
    imageURL: '/whatbytes_logo.jpeg',
    description:
      'Designed and developed an AI-driven fitness analysis solution focusing on posture, body shape, and muscle group analysis.',
    achievements: [
      'Built an intelligent agent to provide personalized fitness and diet recommendations.',
      'Collaborated with a team to implement core AI logic under time constraints.',
      'Applied problem-solving and rapid prototyping skills in a real-world health-tech use case.',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-primary" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 2,
    type: 'work',
    title: 'Red Hat Linux Fundamentals',
    company: 'Red Hat',
    location: 'Online',
    date: 'Oct 2025',
    imageURL: '/talent-corner-logo.png',
    description: 'Completed hands-on training focused on core Linux system fundamentals.',
    achievements: [
      'Worked with Linux file systems, permissions, users, and process management.',
      'Practiced essential shell commands for system navigation and administration.',
      'Built a strong foundation in Linux concepts used in backend and cloud environments.',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-primary" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-orange-500" />,
  },
  {
    id: 3,
    type: 'project',
    title: 'Galgotias Hackathon',
    company: 'Galgotias College of Engineering and Technology',
    location: 'Hackathon',
    imageURL: '/gihcertificate.jpg',
    date: 'Aug 2025',
    description: 'Participated in my first hackathon, gaining hands-on experience.',
    achievements: [
      'Worked with a team to explore new ideas and build a project in a limited time frame.',
      'Experienced the end-to-end hackathon process from ideation to presentation.',
    ],
    icon: <FaCode className="w-6 h-6 text-primary" />,
    companyIcon: <FaLaptopCode className="w-8 h-8 text-blue-500" />,
  },
]

export const TimelineElement: FC<{ item: TimelineItem; index: number }> = ({ item, index }) => (
  <div className="space-y-6" key={index}>
    <div className="flex items-center gap-4">
      {item.type === 'work' && (
        <Image
          src={item.imageURL}
          alt={`${item.company} Logo`}
          width={48}
          height={48}
          className="rounded-md shadow bg-muted p-1"
        />
      )}
      <div>
        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm text-muted-foreground">
          {item.company} • {item.location}
        </p>
        <p className="text-sm text-muted-foreground">{item.date}</p>
      </div>
    </div>

    <p className="text-sm text-muted-foreground">{item.description}</p>

    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
      {item.achievements.map((ach) => (
        <li key={ach}>{ach}</li>
      ))}
    </ul>

    {item.type === 'project' && (
      <div className="w-full mt-4">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md bg-background">
          <Image
            src={item.imageURL}
            alt={`${item.title} Architecture`}
            className="object-contain"
            loading="lazy"
            fill
          />
        </div>
      </div>
    )}
  </div>
)

const Timeline: FC = () => {
  const timelineContent = timelineData.map((item) => ({
    title: item.date,
    content: <TimelineElement key={item.id} item={item} index={item.id} />,
  }))

  return (
    <section id="experience" className="py-20 bg-background text-foreground transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold tracking-tight text-primary">
            Professional Experience & Projects
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base">
            Highlights of my career and key projects showcasing my skills & impact.
          </p>
        </motion.div>

        <div className="relative w-full">
          <TimelineComponent data={timelineContent} />
        </div>
      </div>
    </section>
  )
}

export default Timeline
