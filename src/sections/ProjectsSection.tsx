import { useState } from 'react'
import { ArrowUpRight, Globe, Smartphone } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { projects, projectCategories } from '@/data/projects'

export function ProjectsSection() {
  const [category, setCategory] = useState('all')
  const visible = projects.filter((project) => category === 'all' || project.category === category)
  return (
    <SectionWrapper id="projects" label="Projects">
      <SectionHeading eyebrow="02 / SELECTED WORK" title="Things I've worked on." subtitle="Scholarship management, inventory, e-commerce, and mobile projects. My role: backend development." />
      <div className="project-filters" role="group" aria-label="Filter projects">
        {projectCategories.map((item) => <button key={item.value} type="button" id={'filter-' + item.value} aria-pressed={category === item.value} onClick={() => setCategory(item.value)}>{item.label}</button>)}
      </div>
      <div className="projects-list" aria-live="polite" aria-atomic="true">
        {visible.map((project) => {
          const Icon = project.category === 'mobile' ? Smartphone : Globe
          return (
            <article key={project.id} className={'project-row' + (project.featured ? ' project-featured' : '')}>
              <div className="project-symbol" aria-hidden="true"><Icon size={project.featured ? 44 : 25} strokeWidth={1.3} /><span>{project.category === 'mobile' ? 'APP' : 'WEB'}</span></div>
              <div className="project-body">
                <p className="project-kind">{project.featured ? 'FEATURED / ' : ''}{project.category.toUpperCase()}</p>
                <h3>{project.title}</h3><p>{project.description}</p>
                <ul className="project-tags" aria-label="Project technologies and topics">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
              </div>
              {project.github && <a className="project-repo" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={'View ' + project.title + ' on GitHub'}>View repository <ArrowUpRight size={20} /></a>}
            </article>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
