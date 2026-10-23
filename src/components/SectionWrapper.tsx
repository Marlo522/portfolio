import type { ReactNode } from 'react'

export function SectionWrapper({ id, children, className = '', label }: {
  id: string; children: ReactNode; className?: string; label?: string
}) {
  return <section id={id} aria-label={label ?? id} className={'content-section ' + className}>{children}</section>
}

export function SectionHeading({ eyebrow, title, subtitle }: {
  eyebrow?: string; title: string; subtitle?: string; align?: 'left' | 'center'
}) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {subtitle && <p className="section-intro">{subtitle}</p>}
    </div>
  )
}
