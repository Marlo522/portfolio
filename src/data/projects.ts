import webImage from '@/assets/Interface/Iskkolar-Web.png'
import mobileImage from '@/assets/Interface/Iskkolar-Mobile.png'

export type Project = {
  id: string
  title: string
  description: string
  role: string
  tech: string[]
  category: 'web' | 'mobile'
  image: string
  imageAlt: string
  github: string
  preview: string
  previewLabel: string
}

export const projects: Project[] = [
  {
    id: 'iskkolar-web',
    title: 'ISKKOLAR Web Application',
    description: 'The scholarship management web application for Kapatiran-Kaunlaran Foundation, Inc. (KKFI), supporting scholarship applications and academic compliance monitoring.',
    role: 'Backend Developer',
    tech: ['Scholarship management', 'Web application'],
    category: 'web',
    image: webImage,
    imageAlt: 'ISKKOLAR website homepage introducing its scholarship management platform',
    github: 'https://github.com/iskkolarkkfi/ISKKOLAR',
    preview: 'https://www.kkfi-iskkolar.org',
    previewLabel: 'Visit website',
  },
  {
    id: 'iskkolar-mobile',
    title: 'ISKKOLAR Mobile App',
    description: 'The mobile application for the ISKKOLAR scholarship management system, extending the project to mobile devices.',
    role: 'Backend Developer',
    tech: ['Scholarship management', 'Mobile application'],
    category: 'mobile',
    image: mobileImage,
    imageAlt: 'ISKKOLAR mobile application launch screen with the ISKKOLAR logo',
    github: 'https://github.com/Marlo522/ISKKOLAR-Mobile',
    preview: 'https://drive.google.com/file/d/1f6LKSBNGPmuSGTxah60-Ef5TPbP50t2H/view?usp=sharing',
    previewLabel: 'Watch demo',
  },
]

export const projectCategories = [
  { value: 'all', label: 'All work' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
]
