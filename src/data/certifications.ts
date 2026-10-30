// Add each certificate's public credential URL to its credentialUrl field below.
// Leave it empty until you have a link; no clickable link is shown for empty values.

export type Certification = {
  id: string
  name: string
  issuer: string
  date: string
  credentialUrl: string
  availableUponRequest?: boolean
}

export const certifications: Certification[] = [
  {
    id: 'its-databases',
    name: 'ITS Databases',
    issuer: 'Certiport',
    date: '2024',
    credentialUrl: 'https://www.credly.com/badges/43ce0230-8ac4-448f-8d2e-c5c669484ba2/public_url', // Paste this certificate's credential link here.
  },
  {
    id: 'its-python',
    name: 'ITS Python',
    issuer: 'Certiport',
    date: '2025',
    credentialUrl: 'https://www.credly.com/badges/eb49d3e2-c3fa-47d1-a434-3be300695ee3/public_url', // Paste this certificate's credential link here.
  },
  {
    id: 'ccna-intro',
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    credentialUrl: 'https://www.credly.com/badges/785f4a99-bc0d-4b49-b2d7-da015b85da4c/public_url', // Paste this certificate's credential link here.
  },
  {
    id: 'ccna-switching',
    name: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    credentialUrl: 'https://www.credly.com/badges/d464c54b-4782-446e-bcf5-b6111b0afa4e/public_url', // Paste this certificate's credential link here.
  },
  {
    id: 'ccna-enterprise',
    name: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco Networking Academy',
    // Completion date printed on the certificate: 12 Jan 2026.
    date: '2026',
    credentialUrl: 'https://www.credly.com/badges/305435b9-1edb-41b2-b8f2-5dd208f1cfdc/public_url', // Paste this certificate's credential link here.
  },
  {
    id: 'ccst-networking',
    name: 'Cisco Certified Support Technician Networking',
    issuer: 'Cisco',
    date: '2025',
    credentialUrl: 'https://www.credly.com/badges/d5b6fe5b-3ab5-4af9-be3f-e3ce2e2ab549/public_url', // Paste this certificate's credential link here.
  },
  {
    id: 'devnet-associate',
    name: 'DevNet Associate',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    credentialUrl: 'https://www.credly.com/badges/908dd0a1-2334-418d-af30-81162d8fc518/public_url', // Paste this certificate's credential link here.
  },
  {
    id: 'it-support',
    name: 'IT Customer Support Basics',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    credentialUrl: 'https://www.credly.com/badges/56140706-5f99-498a-922a-c2db85f06328/public_url', // Paste this certificate's credential link here.
  },
  {
    id: 'network-defense',
    name: 'Network Defense',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    credentialUrl: '', // Paste this certificate's credential link here.
  },
  {
    id: 'cyber-threats',
    name: 'Cyber Threat Management',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    credentialUrl: 'https://www.credly.com/badges/edd11815-2436-4d13-bd8f-9c0a734eb83d/public_url', // Paste this certificate's credential link here.
  },
  {
    id: 'intro-cybersecurity',
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    credentialUrl: 'https://www.credly.com/badges/cc6dd6bb-ba31-4850-8bea-6ff36296a220/public_url', // Paste this certificate's credential link here.
  },
  {
    id: 'pmi-ready',
    name: 'PMI Project Management Ready',
    issuer: 'Project Management Institute',
    date: '2026',
    credentialUrl: 'https://www.credly.com/badges/3d481ef4-f433-4a44-99ee-ece4a4b4594f/public_url', // Paste this certificate's credential link here.
  },
  {
    id: 'azure-ai',
    name: 'Microsoft Artificial Intelligence Course: Azure AI Fundamentals',
    issuer: 'TESDA Online Program',
    date: '2026',
    credentialUrl: '',
    availableUponRequest: true,
  },
]
