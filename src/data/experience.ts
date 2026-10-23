export type TimelineItem = {
  id: string
  type: 'education' | 'organization'
  title: string
  organisation: string
  location?: string
  period: string
  description: string
  skills?: string[]
}

export const timeline: TimelineItem[] = [
  {
    id: 'feu-education',
    type: 'education',
    title: 'Bachelor of Science in Information Technology',
    organisation: 'FEU Institute of Technology',
    location: 'P. Paredes St., Sampaloc, Manila',
    period: 'Expected Graduation - 2027',
    description: 'Specialization in Web and Mobile Application (WMA).',
  },
  {
    id: 'aits-membership',
    type: 'organization',
    title: 'Member',
    organisation: 'Alliance of Information Technology Students',
    period: '2025 - Present',
    description: 'Member of the Alliance of Information Technology Students.',
  },
]
