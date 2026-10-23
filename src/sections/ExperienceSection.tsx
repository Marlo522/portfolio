import { GraduationCap, Users } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { timeline } from '@/data/experience'

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" label="Education and organizations">
      <SectionHeading eyebrow="06 / FOUNDATIONS" title="Where I'm learning." />
      <div className="education-list">{timeline.map((item) => {
        const Icon = item.type === 'education' ? GraduationCap : Users
        return <article className="education-row" key={item.id}><Icon size={26} strokeWidth={1.5} aria-hidden="true" /><div><p className="eyebrow">{item.period}</p><h3>{item.title}</h3><p className="education-org">{item.organisation}</p><p>{item.description}</p></div></article>
      })}</div>
    </SectionWrapper>
  )
}
