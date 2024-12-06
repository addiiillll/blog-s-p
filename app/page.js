'use client'

import { useState, useEffect } from 'react'
import Layout from '@/components/layout'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import BlogPostCard from '@/components/blog-post-card'

export default function Home() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [results, setResults] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async (searchQuery = '', searchCategory = 'all') => {
    const res = await fetch(`/api/search?q=${searchQuery}&category=${searchCategory}`)
    const data = await res.json()
    setResults(data)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    await fetchPosts(query, category)
  }

  return (
    <Layout>
      <div className="relative max-w-4xl mx-auto text-center mt-20 mb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 blur-3xl" />
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-400 bg-clip-text text-transparent animate-fade-in">
          Welcome to My Blog!
        </h1>
        <p className="text-gray-800 dark:text-gray-400 mb-8 text-lg animate-fade-in animation-delay-200">
          Explore a world of knowledge across technology, lifestyle, and food. 
          Use the search below to find exactly what you're looking for.
        </p>
        <form onSubmit={handleSearch} className="flex flex-col items-center w-full sm:flex-row gap-4 animate-fade-in animation-delay-300">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blogs..."
            className="flex-grow transition-all focus:ring-2 focus:ring-purple-500"
          />
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="lifestyle">Lifestyle</SelectItem>
              <SelectItem value="food">Food</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all">
            Search
          </Button>
        </form>
      </div>
      <div className="space-y-12 mt-20">
        <h2 className="text-2xl font-semibold mb-6 animate-fade-in">Blog Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((post, index) => (
            <BlogPostCard key={post.id} {...post} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

