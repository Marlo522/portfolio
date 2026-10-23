import { certifications } from './certifications'
import { projects } from './projects'

export const personal = {
  name: 'Marlo S. Veluz Jr.',
  initials: 'MV',
  roles: ['Aspiring Software Developer', 'Web & Mobile Developer', 'IT Student'],
  tagline: 'BS Information Technology student at FEU Institute of Technology, specializing in Web and Mobile Application. Currently learning React.js and Laravel.',
  bio: [
    'I am Marlo, an Information Technology student at FEU Institute of Technology. My specialization is Web and Mobile Application, and I expect to graduate in 2027.',
    'My project work focuses on backend development for ISKKOLAR, a scholarship management system with web and mobile applications. I am currently learning React.js and Laravel to build on that experience.',
  ].join('\n'),
  location: 'Navotas City, Philippines',
  phone: '+63 976 408 6512',
  phoneHref: 'tel:+639764086512',
  socials: {
    github: 'https://github.com/Marlo522',
    linkedin: 'https://www.linkedin.com/in/marlo-jr-veluz-383a80284',
    facebook: 'https://www.facebook.com/share/1D9RJPpsGR/',
    email: 'veluzmarlo959@gmail.com',
  },
  resume: '',
  stats: [
    { label: 'Web & mobile projects', value: String(projects.length).padStart(2, '0') },
    { label: 'Certificates', value: String(certifications.length).padStart(2, '0') },
    { label: 'Expected graduation', value: '2027' },
  ],
}
