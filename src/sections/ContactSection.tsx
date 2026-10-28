import { ArrowUpRight } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { personal } from '@/data/personal'

const links = [
  { label: 'GitHub', href: personal.socials.github },
  { label: 'LinkedIn', href: personal.socials.linkedin },
  { label: 'Facebook', href: personal.socials.facebook },
]

export function ContactSection() {
  return (
    <SectionWrapper id="contact" label="Contact">
      <SectionHeading eyebrow="07 / THE NEXT BUILD" title="Let's work together." subtitle="For web and mobile projects, collaboration, or a conversation about my work." />
      <div className="contact-layout">
        <div className="contact-details">
          <span className="eyebrow">DROP ME A LINE</span>
          <a className="contact-email" href={'mailto:' + personal.socials.email}>{personal.socials.email}<ArrowUpRight size={24} /></a>
          <p>{personal.location}</p>
          <div className="contact-socials">{links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={15} /></a>)}</div>
        </div>
      </div>
    </SectionWrapper>
  )
}
