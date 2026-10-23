import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { personal } from '@/data/personal'
import { Brick } from '@/components/Brick'

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
        <figure className="brick-figure" aria-label="Three interlocking black and white building bricks labeled web, mobile, and backend">
          <div className="assembly-label"><span>SMALL PIECES.</span><span>WORKING TOGETHER.</span></div>
          <div className="brick-stack" aria-hidden="true">
            <Brick label="WEB" dark className="stack-top" />
            <Brick label="MOBILE" className="stack-middle" />
            <Brick label="BACKEND" dark className="stack-bottom" />
          </div>
          <figcaption>ONE BUILD AT A TIME. <span>↗</span></figcaption>
        </figure>
      </div>
      <div className="hero-bottomline"><span>{personal.location}</span><a href="#about">A little about me <ArrowDown size={14} /></a></div>
    </section>
  )
}
