'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Skill, skills } from '@/constants'
import SkillDataProvider from '../sub/SkillDataProvider'

const uniqueSkills: Skill[] = Array.from(
  skills
    .reduce((map, skill) => {
      if (!map.has(skill.skill_name)) {
        map.set(skill.skill_name, { ...skill, width: 40, height: 40 })
      }
      return map
    }, new Map<string, Skill>())
    .values(),
).sort((a, b) => a.skill_name.localeCompare(b.skill_name))

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-10 py-16 px-4 sm:px-8 min-h-[600px] bg-gradient-to-br from-background via-muted to-background"
      aria-labelledby="skills-heading"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl">
        <h2
          id="skills-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
        >
          Technical Expertise
        </h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground font-medium">
          A refined selection of my proficiency in modern development tools and technologies
        </p>
      </div>

      {/* Skills Grid */}
      <motion.div
        className="w-full max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.05 }}
      >
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 gap-3 sm:gap-4">
          {uniqueSkills.map((skill, index) => (
            <motion.div
              key={skill.skill_name}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative flex flex-col items-center justify-center p-3 rounded-md hover:bg-white/5 dark:hover:bg-black/10 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              role="listitem"
              aria-label={skill.skill_name}
            >
              {/* Minimal Hover Effect */}
              <div className="absolute inset-0 rounded-md bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              {/* Logo */}
              <SkillDataProvider
                src={skill.Image}
                width={40}
                height={40}
                index={index}
                className="relative z-10 transition-transform duration-200 group-hover:scale-110"
              />

              {/* Label */}
              <span className="relative z-10 mt-2 text-xs font-medium text-foreground text-center tracking-tight">
                {skill.skill_name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <p className="mt-6 text-center text-sm text-muted-foreground font-medium">
        Constantly refining and expanding my technical skillset
      </p>
    </section>
  )
}

export default Skills
