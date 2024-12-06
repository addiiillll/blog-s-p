import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 dark:bg-black/70 bg-white/70 backdrop-blur-md text-primary-foreground py-4 z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold transition-transform hover:scale-105">
          Blog S&P
        </Link>
          <Button variant="ghost" asChild className="transition-transform hover:scale-105">
            <Link href="/portfolio">Portfolio</Link>
          </Button>
      </nav>
    </header>
  )
}

