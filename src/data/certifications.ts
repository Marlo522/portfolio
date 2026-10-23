import databasesPdf from '@/assets/certifications/Databases Certificate.pdf?url'
import pythonPdf from '@/assets/certifications/ITS_Python.pdf?url'
import ccnaIntroPdf from '@/assets/certifications/CCNA- Introduction to Networks Certificate.pdf?url'
import ccnaSwitchingPdf from '@/assets/certifications/CCNA Switching, Routing, and .pdf?url'
import ccnaEnterprisePdf from '@/assets/certifications/CCNA-_Enterprise_Networking-_Security-_and_Automation_certificate_veluzmarlo959-gmail-com_cd1be9ee-819f-4bdc-b71f-906159c1aab2.pdf?url'
import ccstPdf from '@/assets/certifications/Cisco Certified Support Technician Networking.pdf?url'
import devnetPdf from '@/assets/certifications/DevNet_Associate_certificate_veluzmarlo959-gmail-com_e1c248e6-91ba-4fb4-8c8c-591150cb5741.pdf?url'
import supportPdf from '@/assets/certifications/IT_Customer_Support_Basics_certificate_veluzmarlo959-gmail-com_54e338f4-de87-4f23-8963-1b89813f87e8.pdf?url'
import defensePdf from '@/assets/certifications/Network_Defense_certificate_veluzmarlo959-gmail-com_61d7d62e-660f-4096-bcca-24964945eeeb.pdf?url'
import threatsPdf from '@/assets/certifications/Cyber_Threat_Management_certificate_veluzmarlo959-gmail-com_0b2c1cfc-2472-408f-99f2-222772d04371.pdf?url'
import cybersecurityPdf from '@/assets/certifications/Introduction_to_Cybersecurity_certificate_veluzmarlo959-gmail-com_fbe7393c-7130-457a-ac9f-d11cf0333c2e.pdf?url'
import pmiPdf from '@/assets/certifications/PMI_Project_Management_Ready.pdf?url'
import azurePdf from '@/assets/certifications/TESDA_AI_Certificate.pdf?url'

export type Certification = {
  id: string
  name: string
  issuer: string
  date: string
  fileUrl: string
}

export const certifications: Certification[] = [
  {
    id: 'its-databases',
    name: 'ITS Databases',
    issuer: 'Certiport',
    date: '2024',
    fileUrl: databasesPdf,
  },
  {
    id: 'its-python',
    name: 'ITS Python',
    issuer: 'Certiport',
    date: '2025',
    fileUrl: pythonPdf,
  },
  {
    id: 'ccna-intro',
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    fileUrl: ccnaIntroPdf,
  },
  {
    id: 'ccna-switching',
    name: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    fileUrl: ccnaSwitchingPdf,
  },
  {
    id: 'ccna-enterprise',
    name: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco Networking Academy',
    // Completion date printed on the certificate: 12 Jan 2026.
    date: '2026',
    fileUrl: ccnaEnterprisePdf,
  },
  {
    id: 'ccst-networking',
    name: 'Cisco Certified Support Technician Networking',
    issuer: 'Cisco',
    date: '2025',
    fileUrl: ccstPdf,
  },
  {
    id: 'devnet-associate',
    name: 'DevNet Associate',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    fileUrl: devnetPdf,
  },
  {
    id: 'it-support',
    name: 'IT Customer Support Basics',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    fileUrl: supportPdf,
  },
  {
    id: 'network-defense',
    name: 'Network Defense',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    fileUrl: defensePdf,
  },
  {
    id: 'cyber-threats',
    name: 'Cyber Threat Management',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    fileUrl: threatsPdf,
  },
  {
    id: 'intro-cybersecurity',
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    fileUrl: cybersecurityPdf,
  },
  {
    id: 'pmi-ready',
    name: 'PMI Project Management Ready',
    issuer: 'Project Management Institute',
    date: '2026',
    fileUrl: pmiPdf,
  },
  {
    id: 'azure-ai',
    name: 'Microsoft Artificial Intelligence Course: Azure AI Fundamentals',
    issuer: 'TESDA Online Program',
    date: '2026',
    fileUrl: azurePdf,
  },
]
