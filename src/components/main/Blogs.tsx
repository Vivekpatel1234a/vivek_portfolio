'use client'

import { BlogTile } from '@/components/sub/BlogTile'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useState } from 'react'

const blogs = [
  {
    id: 1,
    title: '🛒ShopUI: Online Marketplace UI Clone',
    excerpt:
      'A frontend project focused on recreating the visual experience of a modern e-commerce platform.',
    content: `This project is a complete online marketplace UI clone built using HTML, CSS, and JavaScript.
It emphasizes responsive layouts, clean design, and accurate replication of real-world e-commerce interfaces.`,
  },
  {
    id: 2,
    title: '🎓 Learniverse: Gamified Learning Platform',
    excerpt:
      'An interactive learning platform designed to make education engaging and accessible for students.',
    content: `Learniverse is a fully functional gamified learning platform developed using HTML, CSS, and JavaScript.
It focuses on interactive learning experiences while maintaining simplicity and ease of use.`,
  },
  {
    id: 3,
    title: '🏙️ PragatiPulse: Online Civic Complaint System',
    excerpt:
      'A digital solution for registering, tracking, and managing civic issues efficiently.',
    content: `PragatiPulse enables users to submit and track civic complaints through an online platform.
Administrators can review complaints and assign workers to ensure timely and transparent issue resolution.`,
  },
]

export function BlogsSection() {
  const [selectedBlog, setSelectedBlog] = useState<null | (typeof blogs)[0]>(null)

  return (
    <section id="blogs" className="w-full py-12 dark:bg-neutral-950">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100">
          Blogs
        </h2>

        <div className="grid gap-4">
          {blogs.map((blog) => (
            <BlogTile
              key={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              onRead={() => setSelectedBlog(blog)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] max-h-[90vh] overflow-y-auto p-6 rounded-lg bg-white dark:bg-neutral-900">
          {selectedBlog && (
            <>
              <DialogHeader className="sticky top-0 bg-white dark:bg-neutral-900 z-10 pb-4 border-b border-zinc-200 dark:border-zinc-700">
                <DialogTitle className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                  {selectedBlog.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-6 prose prose-zinc dark:prose-invert max-w-none">
                <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {selectedBlog.content}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
