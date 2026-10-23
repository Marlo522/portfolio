import { ArrowUpRight, Award, Blocks, Braces, GraduationCap, House, Mail, PanelsTopLeft, UserRound } from 'lucide-react'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { personal } from '@/data/personal'

const links = [
  { id: 'hero', label: 'Home', Icon: House },
  { id: 'projects', label: 'Projects', Icon: PanelsTopLeft },
  { id: 'about', label: 'About', Icon: UserRound },
  { id: 'skills', label: 'Skills', Icon: Braces },
  { id: 'certifications', label: 'Certificates', Icon: Award },
  { id: 'experience', label: 'Education', Icon: GraduationCap },
  { id: 'contact', label: 'Contact', Icon: Mail },
]
const sectionIds = links.map((link) => link.id)

export function Navbar() {
  const activeId = useScrollSpy(sectionIds)
  return (
    <aside className="sidebar" aria-label="Portfolio sidebar">
      <a className="brand" href="#hero" aria-label={personal.name + ' — home'}>
        <span className="brand-mark"><Blocks size={28} strokeWidth={1.6} /></span>
        <span className="brand-name">MARLO VELUZ<span>WEB & MOBILE</span></span>
      </a>
      <p className="sidebar-caption">THE PORTFOLIO</p>
      <nav aria-label="Main navigation">
        <ul className="nav-list">
          {links.map(({ id, label, Icon }, index) => (
            <li key={id}>
              <a href={'#' + id} className={'nav-link' + (activeId === id ? ' is-active' : '')}
                aria-current={activeId === id ? 'location' : undefined} title={label}>
                <Icon size={18} aria-hidden="true" />
                <span className="nav-label">{label}</span>
                <span className="nav-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-bottom">
        <p>Based in<br /><strong>Navotas, Philippines</strong></p>
        <a href={personal.socials.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a>
        {personal.resume && <a href={personal.resume} download>Download resume <ArrowUpRight size={14} /></a>}
        <span className="sidebar-signature">MV / PERSONAL PORTFOLIO</span>
      </div>
    </aside>
  )
}
