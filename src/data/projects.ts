export type Project = {
  id: string
  title: string
  description: string
  role: string
  tech: string[]
  category: 'web' | 'mobile'
  featured?: boolean
  github?: string
}

export const projects: Project[] = [
  {
    id: 'iskkolar-web',
    title: 'ISKKOLAR Web Application',
    description: 'The web application for the ISKKOLAR scholarship management system, built for Kapatiran-Kaunlaran Foundation, Inc. (KKFI).',
    role: 'Backend Developer',
    tech: ['Scholarship management', 'Web application'],
    category: 'web',
    featured: true,
    github: 'https://github.com/iskkolarkkfi/ISKKOLAR',
  },
  {
    id: 'iskkolar-mobile',
    title: 'ISKKOLAR Mobile App',
    description: 'The mobile application for the ISKKOLAR scholarship management system, extending the project to mobile devices.',
    role: 'Backend Developer',
    tech: ['Scholarship management', 'Mobile application'],
    category: 'mobile',
    featured: true,
    github: 'https://github.com/Marlo522/ISKKOLAR-Mobile',
  },
  {
    id: 'itso',
    title: 'ITSO',
    description: 'An inventory management system for FEU ITSO developed using the CodeIgniter framework.',
    role: 'Backend Developer',
    tech: ['CodeIgniter', 'PHP'],
    category: 'web',
  },
  {
    id: 'solar-soil',
    title: 'Solar Soil',
    description: 'An e-commerce website developed using vanilla PHP and MongoDB.',
    role: 'Backend Developer',
    tech: ['PHP', 'MongoDB'],
    category: 'web',
  },
  {
    id: 'technovators-diary',
    title: 'Technovators Diary',
    description: 'An Android diary application developed using Kotlin and Android Studio with Firebase.',
    role: 'Backend Developer',
    tech: ['Kotlin', 'Android Studio', 'Firebase'],
    category: 'mobile',
  },
]

export const projectCategories = [
  { value: 'all', label: 'All work' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
]
