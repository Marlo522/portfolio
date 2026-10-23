import { ArrowUp } from 'lucide-react'
import { personal } from '@/data/personal'

export function Footer() {
  return <footer className="site-footer"><p>© {new Date().getFullYear()} {personal.name}</p><a href="#hero">Back to top <ArrowUp size={15} /></a></footer>
}
