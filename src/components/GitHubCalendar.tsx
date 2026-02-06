'use client'

import { useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export default function GitHubContributions() {
  const { theme } = useTheme()
  const [year, setYear] = useState<number | undefined>(undefined)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center gap-6"
    >
      {/* 📊 CALENDAR */}
      <div className="w-full overflow-x-auto flex justify-center">
        <GitHubCalendar
          username="Vivekpatel1234a"
          year={year}
          blockSize={14}
          blockMargin={4}
          fontSize={14}
          colorScheme={theme === 'dark' ? 'dark' : 'light'}
          theme={{
            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
          }}
          renderBlock={(block, activity) => {
            return (
              <div
                title={`${activity.date}: ${
                  activity.count === 0
                    ? 'No contributions'
                    : `${activity.count} contribution${
                        activity.count > 1 ? 's' : ''
                      }`
                }`}
              >
                {block}
              </div>
            )
          }}
        />
      </div>

      {/* 🔽 YEAR SELECTOR (SAFE) */}
      <GitHubCalendar
        username="Vivekpatel1234a"
        years
        renderYear={(availableYear) => (
          <button
            key={availableYear}
            onClick={() => setYear(availableYear)}
            className={`rounded-md px-3 py-1 text-sm border transition ${
              year === availableYear
                ? 'bg-primary text-primary-foreground'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            {availableYear}
          </button>
        )}
      />
    </motion.div>
  )
}
