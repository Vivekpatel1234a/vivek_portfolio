import { BlogsSection } from '@/components/main/Blogs'
import ContactUs from '@/components/main/ContactUs'
import GitHubContributions from '@/components/GitHubCalendar'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import ResumeSection from '@/components/main/Resume'
import Skills from '@/components/main/Skills'
import Timeline from '@/components/main/Timeline'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <ResumeSection />
        <Timeline />
        <Projects />

        {/* 🔥 GITHUB CONTRIBUTIONS SECTION */}
        <section
          id="github"
          className="flex flex-col items-center gap-8 px-4 md:px-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            GitHub Contributions
          </h2>

          <GitHubContributions />
        </section>

        <BlogsSection />
        <ContactUs />
        <Toaster position="bottom-right" />
      </div>
    </div>
  )
}
