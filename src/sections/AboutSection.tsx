import { Bike, Dumbbell, MapPin } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { personal } from '@/data/personal'
import { GitHubContributions } from '@/components/GitHubContributions'
import { ProfilePicture } from '@/components/ProfilePicture'

export function AboutSection() {
  return (
    <SectionWrapper id="about" label="About Marlo">
      <SectionHeading eyebrow="03 / THE PERSON" title="A little about me." />
      <div className="about-layout">
        <div className="about-card"><ProfilePicture className="about-portrait" /><strong>{personal.name}</strong><span>BS Information Technology</span><span>Web & Mobile Application</span><p><MapPin size={14} />{personal.location}</p></div>
        <div className="about-copy">
          {personal.bio.split('\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="interests"><span>AWAY FROM THE KEYBOARD</span><span><Dumbbell size={16} />Exercising</span></div>
        </div>
      </div>
      <dl className="stats">{personal.stats.map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl>
      <GitHubContributions />
    </SectionWrapper>
  )
}
