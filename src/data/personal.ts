import { certifications } from './certifications'
import { projects } from './projects'

export const personal = {
  name: 'Marlo S. Veluz Jr.',
  initials: 'MV',
  roles: ['Aspiring Software Developer', 'Web & Mobile Developer', 'IT Student'],
  tagline: 'BS Information Technology student at FEU Institute of Technology, specializing in Web and Mobile Application. Currently learning React.js and Laravel.',
  bio: 'I am a 4th-year Bachelor of Science in Information Technology student specializing in Web and Mobile Application Development. I am passionate about technology and seeking opportunities for career growth and professional development in software engineering and networking. I am eager to enhance my technical skills, gain hands-on experience, and contribute to innovative projects.',
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
