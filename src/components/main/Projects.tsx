'use client'

import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { Badge } from '../ui/badge'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'

const projectsData = [
  {
    title: 'ShopUI',
    description:
      'Online marketplace UI clone built using HTML, CSS, and JavaScript.',
    imageURL: '/amazonclone.png',
    github: 'https://github.com/Vivekpatel1234a',
    live: 'https://amazon-clone-vivek.netlify.app/',
    icon: <IconClipboardCopy className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: 'Learniverse',
    description:
      'Gamified learning platform built with HTML, CSS & JavaScript.',
    imageURL: '/learniverse.png',
    github: 'https://github.com/Vivekpatel1234a/Learniverse',
    live: 'https://sprightly-biscotti-09fabf.netlify.app/',
    icon: <IconFileBroken className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: 'Pragatipulse',
    description: 'Digital platform to register, track, and manage civic complaints.',
    imageURL: '/pragatipulse.png',
    github: 'https://github.com/Vivekpatel1234a/PragatiPulse',
    live: 'https://pragatipulse.netlify.app/',
    icon: <IconSignature className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: 'Portfolio',
    description:
      'Modern portfolio built with Next.js, TailwindCSS, and ShadCN, deployed on Cloudflare Pages.',
    imageURL: '/portfoliovivek.png',
    github: 'https://github.com/Vivekpatel1234a',
    live: 'https://vivek-portfolio-pearl.vercel.app/',
    icon: <IconTableColumn className="h-4 w-4 text-muted-foreground" />,
  },
  
]

const LiveIndicator = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
  </span>
)

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text ">My Projects</h1>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-base font-semibold md:text-lg italic">
            A collection of innovative projects showcasing technical expertise & creativity.
          </p>
        </motion.div>
      </div>

      <BentoGrid className="max-w-5xl mx-auto">
        {projectsData.map((project,idx) => (
          <BentoGridItem
            key={project.title}
            title={project.title}
            description={
              <div className="space-y-1 text-sm text-foreground">
                <p>{project.description}</p>
                <div className="flex gap-3">
                  <Badge asChild variant="secondary" className="gap-1 rounded-full">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <FaGithub className="size-3" />
                      GitHub
                    </a>
                  </Badge>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-0.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <LiveIndicator />
                    Live
                  </a>
                </div>
              </div>
            }
           header={
  <div className="relative w-full h-64 rounded-xl overflow-hidden">
    <Image
      src={project.imageURL}
      alt={project.title}
      className="object-cover w-full h-full"
      sizes="(max-width: 768px) 100vw, 50vw"
      quality={80}
      fill
    />
  </div>
}
            icon={project.icon}
            className={idx === 3 ? 'md:col-span-3' : ''}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Projects
