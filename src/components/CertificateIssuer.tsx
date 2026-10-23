import { BrainCircuit, Database, Workflow } from 'lucide-react'
import { SiCisco, SiPython } from 'react-icons/si'
import type { Certification } from '@/data/certifications'

export function CertificateIssuer({ certificate }: { certificate: Certification }) {
  const cisco = certificate.issuer.startsWith('Cisco')
  const certiport = certificate.issuer === 'Certiport'
  const pmi = certificate.issuer === 'Project Management Institute'
  const Icon = cisco ? SiCisco : certiport ? (certificate.id === 'its-python' ? SiPython : Database) : pmi ? Workflow : BrainCircuit
  const label = cisco ? 'Cisco' : certiport ? 'Certiport' : pmi ? 'PMI' : 'TESDA'
  return <div className={'certificate-issuer' + (cisco ? ' issuer-cisco' : '')}><span className="issuer-logo"><Icon size={32} aria-hidden="true" /></span><span>{label}</span></div>
}
