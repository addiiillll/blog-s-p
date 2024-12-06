import { NextResponse } from 'next/server';

const blogPosts = [
  { id: 1, title: "Introduction to Next.js", excerpt: "Learn the basics of Next.js", category: "technology" },
  { id: 2, title: "10 Healthy Breakfast Ideas", excerpt: "Start your day right with these recipes", category: "food" },
  { id: 3, title: "The Art of Minimalism", excerpt: "Simplify your life and living space", category: "lifestyle" },
  { id: 4, title: "JavaScript ES6 Features", excerpt: "Explore the new features in ES6", category: "technology" },
  { id: 5, title: "5-Minute Meditation Guide", excerpt: "Quick meditation techniques for busy people", category: "lifestyle" },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const category = searchParams.get('category');

  let filteredPosts = blogPosts;

  if (query) {
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (category && category !== 'all') {
    filteredPosts = filteredPosts.filter(post => post.category === category);
  }

  return NextResponse.json(filteredPosts);
}
