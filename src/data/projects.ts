import webImage from '@/assets/Interface/Iskkolar-Web.png'
import mobileImage from '@/assets/Interface/Iskkolar-Mobile.png'
import legendaryImage from '@/assets/Interface/Legendary-Lifestyle-Web.png'

export type Project = {
  id: string
  title: string
  description: string
  kind: 'Capstone project' | 'Personal project'
  role: string
  tech: string[]
  category: 'web' | 'mobile'
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  github?: string
  preview: string
  previewLabel: string
}

export const projects: Project[] = [
  {
    id: 'iskkolar-web',
    title: 'ISKKOLAR Web Application',
    description: 'The web application for our capstone project, ISKKOLAR, a scholarship management system for Kapatiran-Kaunlaran Foundation, Inc. (KKFI). It supports scholarship applications and academic compliance monitoring alongside its companion mobile app.',
    kind: 'Capstone project',
    role: 'Backend Developer',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Supabase', 'Google Vertex AI', 'Google OCR', 'Cloudinary'],
    category: 'web',
    image: webImage,
    imageAlt: 'ISKKOLAR website homepage introducing its scholarship management platform',
    imageWidth: 1710,
    imageHeight: 993,
    github: 'https://github.com/iskkolarkkfi/ISKKOLAR',
    preview: 'https://www.kkfi-iskkolar.org',
    previewLabel: 'Visit website',
  },
  {
    id: 'iskkolar-mobile',
    title: 'ISKKOLAR Mobile App',
    description: 'The companion mobile application for our ISKKOLAR capstone project, bringing the same scholarship management system to mobile devices.',
    kind: 'Capstone project',
    role: 'Backend Developer',
    tech: ['React Native', 'Express.js'],
    category: 'mobile',
    image: mobileImage,
    imageAlt: 'ISKKOLAR mobile application launch screen with the ISKKOLAR logo',
    imageWidth: 178,
    imageHeight: 397,
    github: 'https://github.com/Marlo522/ISKKOLAR-Mobile',
    preview: 'https://drive.google.com/file/d/1f6LKSBNGPmuSGTxah60-Ef5TPbP50t2H/view?usp=sharing',
    previewLabel: 'Watch demo',
  },
  {
    id: 'legendary-lifestyle',
    title: 'Legendary Lifestyle',
    description: 'My personal full-stack project: an e-commerce website for Legendary Lifestyle, featuring clothing and everyday essentials.',
    kind: 'Personal project',
    role: 'Full-Stack Developer',
    tech: ['React.js', 'Laravel', 'Tailwind CSS', 'Docker', 'Supabase', 'Cloudinary', 'Redis'],
    category: 'web',
    image: legendaryImage,
    imageAlt: 'Legendary Lifestyle storefront homepage featuring its Wear Your Legend clothing collection',
    imageWidth: 1855,
    imageHeight: 918,
    preview: 'https://legendary-ecommerce.vercel.app',
    previewLabel: 'Visit website',
  },
]

export const projectCategories = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
] as const
