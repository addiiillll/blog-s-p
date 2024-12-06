import Layout from '@/components/layout'
import ProjectCard from '@/components/project-card'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const projects = [
  {
    title: "Portfolio",
    description: "My personal portfolio website showcasing my projects and skills, built with Next.js and modern web technologies.",
    url: "https://adil-qureshi.vercel.app/",
    status: "completed",
    type: "personal"
  },
  {
    title: "The Future Tech 2.0",
    description: "College techfest website featuring event details, registration, and interactive elements.",
    url: "https://thefuturetech2.vercel.app/",
    status: "completed",
    type: "org"
  },
  {
    title: "The Heavens Perfume",
    description: "Full-featured e-commerce platform with admin dashboard for perfume sales and management.",
    url: "https://the-heavens-perfume.vercel.app/",
    status: "completed",
    type: "personal"
  },
  {
    title: "TH Perfume (Persistent Cart)",
    description: "Enhanced version of The Heavens Perfume with persistent shopping cart functionality.",
    url: "https://thperfume.vercel.app/",
    status: "completed",
    type: "personal"
  },
  {
    title: "Sentimentix",
    description: "Advanced sentiment analysis tool for processing and analyzing textual content.",
    url: "https://sentimentix.vercel.app/",
    status: "completed",
    type: "personal"
  },
  {
    title: "Pens Edu",
    description: "Educational platform providing comprehensive learning resources and tools.",
    url: "https://www.pensedu.com/",
    status: "completed",
    type: "freelance"
  },
  {
    title: "Pass Manager",
    description: "Secure password management solution with encryption and easy access.",
    url: "https://passmanager-fawn.vercel.app/",
    status: "completed",
    type: "personal"
  },
  {
    title: "Learn n Earn",
    description: "Platform connecting learning opportunities with earning potential.",
    url: "https://learnnearn.vercel.app/",
    status: "completed",
    type: "personal"
  },
  {
    title: "Ad Campaign",
    description: "Digital marketing campaign management platform with analytics.",
    url: "https://digital-marketing-gules.vercel.app/",
    status: "in-progress",
    type: "freelance"
  },
  {
    title: "Ezy-English",
    description: "Interactive English learning platform with personalized lessons.",
    url: "https://ezy-english.onrender.com/",
    status: "in-progress",
    type: "personal"
  }
]

export default function Home() {
  return (
    <Layout>
      <div className="relative max-w-4xl mx-auto text-center mt-20 mb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 blur-3xl" />
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-400 bg-clip-text text-transparent animate-fade-in">
          Welcome to My Portfolio!
        </h1>
        <p className="text-gray-800 dark:text-gray-400 mb-8 text-lg animate-fade-in animation-delay-200">
          This website is built using the latest technology, "Next.js", a powerful React
          framework for building modern web applications. It features server-side rendering
          and static site generation for optimal performance.
        </p>
          <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 hover:scale-105 transition-all">
          <Link href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
            Learn More →
          </Link>
          </Button>
      </div>
      <div className="space-y-12 mt-20">
        <div>
          <h2 className="text-2xl font-semibold mb-6 animate-fade-in">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter(p => p.status === "completed")
              .map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6 animate-fade-in">Ongoing Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter(p => p.status === "in-progress")
              .map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

