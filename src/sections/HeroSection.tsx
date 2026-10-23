import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { personal } from '@/data/personal'
import { ProfilePicture } from '@/components/ProfilePicture'

export function HeroSection() {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="hero-topline"><span>MARLO S. VELUZ JR.</span><span>PERSONAL PORTFOLIO / 01</span></div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">IT STUDENT / ASPIRING DEVELOPER</p>
          <h1>Hi, I'm Marlo.<br /><span>I build for</span><br />web & mobile.</h1>
          <p className="hero-description">{personal.tagline}</p>
          <div className="hero-actions">
            <a href="#projects" id="hero-view-projects-btn" className="button button-dark">Explore my work <ArrowDown size={17} /></a>
            <a href="#contact" className="text-link">Get in touch <ArrowUpRight size={17} /></a>
          </div>
        </div>
        <figure className="profile-figure">
          <div className="portrait-studs" aria-hidden="true"><span /><span /><span /><span /></div>
          <ProfilePicture className="hero-portrait" priority />
          <figcaption><span>ONE BUILD AT A TIME.</span><ArrowUpRight size={20} aria-hidden="true" /></figcaption>
        </figure>
      </div>
      <div className="hero-bottomline"><span>{personal.location}</span><a href="#about">A little about me <ArrowDown size={14} /></a></div>
    </section>
  )
}
