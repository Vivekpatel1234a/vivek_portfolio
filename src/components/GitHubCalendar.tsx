'use client'

import { GitHubCalendar } from 'react-github-calendar'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import './GitHubCalendar.css'

export default function GitHubContributions() {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center justify-center gap-6 py-8"
    >
      {/* 📊 CALENDAR */}
      <div className="w-full max-w-5xl overflow-x-auto rounded-lg bg-white dark:bg-slate-900 border border-gray-300 dark:border-gray-600 shadow-lg p-6">
        <GitHubCalendar
          username="Vivekpatel1234a"
          blockSize={13}
          blockMargin={3}
          colorScheme={theme === 'dark' ? 'dark' : 'light'}
        />
      </div>
    </motion.div>
  )
}
