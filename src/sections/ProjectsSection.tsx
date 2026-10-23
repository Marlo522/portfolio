import { useState } from 'react'
import { ArrowUpRight, Globe, Play } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { projects, projectCategories } from '@/data/projects'

export function ProjectsSection() {
  const [category, setCategory] = useState('all')
  const visible = projects.filter((project) => category === 'all' || project.category === category)
  return (
    <SectionWrapper id="projects" label="ISKKOLAR projects">
      <SectionHeading eyebrow="02 / SELECTED WORK" title="ISKKOLAR, on web & mobile." subtitle="Two applications for one scholarship management system. My role: backend development." />
      <div className="project-filters" role="group" aria-label="Filter projects">
        {projectCategories.map((item) => <button key={item.value} type="button" id={'filter-' + item.value} aria-pressed={category === item.value} onClick={() => setCategory(item.value)}>{item.label}</button>)}
      </div>
      <div className="projects-list" aria-live="polite" aria-atomic="true">
        {visible.map((project) => {
          const PreviewIcon = project.category === 'mobile' ? Play : Globe
          return (
            <article key={project.id} className="project-card">
              <a className={'project-visual project-visual-' + project.category} href={project.preview} target="_blank" rel="noopener noreferrer" aria-label={project.previewLabel + ': ' + project.title}>
                <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" width={project.category === 'web' ? 1710 : 178} height={project.category === 'web' ? 993 : 397} />
              </a>
              <div className="project-body">
                <p className="project-kind">ISKKOLAR / {project.category.toUpperCase()}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-role">{project.role}</p>
                <ul className="project-tags" aria-label="Project topics">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                <div className="project-links">
                  <a className="button button-dark" href={project.preview} target="_blank" rel="noopener noreferrer" aria-label={project.previewLabel + ': ' + project.title}><PreviewIcon size={18} aria-hidden="true" />{project.previewLabel}<ArrowUpRight size={18} aria-hidden="true" /></a>
                  <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={'View ' + project.title + ' on GitHub'}><SiGithub size={18} aria-hidden="true" />Source code<ArrowUpRight size={18} aria-hidden="true" /></a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
