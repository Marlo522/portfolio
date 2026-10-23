import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { skills, learning } from '@/data/skills'
import { skillIcons } from '@/data/skillIcons'

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" label="Skills and technologies">
      <SectionHeading eyebrow="04 / THE TOOLBOX" title="My building blocks." subtitle="The languages, frameworks, and tools in my stack." />
      <div className="skills-grid">
        {skills.map((category, index) => (
          <article className="skill-block" key={category.category}>
            <div className="skill-block-top"><span>{String(index + 1).padStart(2, '0')}</span><span className="mini-studs" aria-hidden="true"><i /><i /></span></div>
            <h3>{category.category}</h3>
            <ul className="skill-list">
              {category.skills.map((skill) => {
                const Icon = skillIcons[skill]
                return <li key={skill}><span className="skill-logo"><Icon size={24} aria-hidden="true" /></span><span>{skill}</span>{skill === 'React.js' && <span className="learning-mark">Learning</span>}</li>
              })}
            </ul>
          </article>
        ))}
      </div>
      <div className="learning-note"><span className="eyebrow">CURRENTLY LEARNING</span><ul className="learning-tools">{learning.map((skill) => {
        const Icon = skillIcons[skill]
        return <li key={skill}><Icon size={25} aria-hidden="true" />{skill}</li>
      })}</ul></div>
    </SectionWrapper>
  )
}
