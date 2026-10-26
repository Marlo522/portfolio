import { useState } from 'react'
import { ArrowUpRight, Globe, Play } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { projects, projectCategories } from '@/data/projects'
import type { Project } from '@/data/projects'

export function ProjectsSection() {
  const [category, setCategory] = useState<Project['category'] | 'all'>('all')
  const visible = projects.filter((project) => category === 'all' || project.category === category)
  return (
    <SectionWrapper id="projects" label="Web and mobile projects">
      <SectionHeading eyebrow="02 / SELECTED WORK" title="My work, on web & mobile." />
      <div className="project-filters" role="group" aria-label="Filter projects">
        {projectCategories.map((item) => <button key={item.value} type="button" id={'filter-' + item.value} aria-pressed={category === item.value} onClick={() => setCategory(item.value)}>{item.label}</button>)}
      </div>
      <div className="projects-list" aria-live="polite" aria-atomic="true">
        {visible.map((project) => {
          const PreviewIcon = project.category === 'mobile' ? Play : Globe
          return (
            <article key={project.id} className="project-card">
              <a className={'project-visual project-visual-' + project.category} href={project.preview} target="_blank" rel="noopener noreferrer" aria-label={project.previewLabel + ': ' + project.title}>
                <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" width={project.imageWidth} height={project.imageHeight} />
              </a>
              <div className="project-body">
                <p className="project-kind">{project.kind.toUpperCase()} / {project.category.toUpperCase()}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-role">{project.role}</p>
                <ul className="project-tags" aria-label="Technologies used">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                <div className="project-links">
                  <a className="button button-dark" href={project.preview} target="_blank" rel="noopener noreferrer" aria-label={project.previewLabel + ': ' + project.title}><PreviewIcon size={18} aria-hidden="true" />{project.previewLabel}<ArrowUpRight size={18} aria-hidden="true" /></a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
