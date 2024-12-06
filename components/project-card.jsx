'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github } from 'lucide-react'
import Link from 'next/link'

export default function ProjectCard({ title, description, url, status, type, github, index }) {
  const [isHovered, setIsHovered] = useState(false)

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
      case 'ongoing':
        return 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20'
      case 'in-progress':
        return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20'
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'freelance':
        return 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20'
      case 'personal':
        return 'bg-pink-500/10 text-pink-500 hover:bg-pink-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20'
    }
  }

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Card 
        className="group relative overflow-hidden border-white/10 bg-white dark:bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
        style={{ 
          animationDelay: `${index * 0.1}s`,
          transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-xl font-semibold transition-colors group-hover:text-purple-400">
                {title}
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className={getStatusColor(status)}>
                  {status}
                </Badge>
                <Badge variant="secondary" className={getTypeColor(type)}>
                  {type}
                </Badge>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-400">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}

