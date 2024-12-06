'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function BlogPostCard({ title, excerpt, category, id, index }) {
  const [isHovered, setIsHovered] = useState(false)

  const getCategoryColor = (category) => {
    switch (category) {
      case 'technology':
        return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20'
      case 'food':
        return 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
      case 'lifestyle':
        return 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20'
    }
  }

  return (
    <Link href={`/blog/${id}`}>
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
              <CardTitle className="text-xl font-semibold transition-colors group-hover:text-purple-400 dark:text-white">
                {title}
              </CardTitle>
              <Badge variant="secondary" className={getCategoryColor(category)}>
                {category}
              </Badge>
            </div>
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            {excerpt}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
