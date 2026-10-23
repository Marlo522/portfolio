import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { Calendar, Download, ExternalLink, Eye, X } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { FadeIn } from '@/components/FadeIn'
import { CertificateIssuer } from '@/components/CertificateIssuer'
import { certifications, type Certification } from '@/data/certifications'

function CertificatePreview({ certificate, onClose }: { certificate: Certification; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    if (!dialog.open) dialog.showModal()
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby="certificate-preview-title"
      aria-describedby="certificate-preview-help"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close()
      }}
      className="certificate-dialog fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-5xl max-h-[90dvh] rounded-2xl border border-primary/30 bg-background text-foreground p-0 shadow-2xl"
      data-lenis-prevent
    >
      <div className="flex flex-col h-[85dvh] max-h-[900px]">
        <div className="flex items-start justify-between gap-4 p-4 sm:p-6 border-b border-border">
          <div className="min-w-0">
            <h3 id="certificate-preview-title" className="font-semibold text-base sm:text-lg leading-snug">{certificate.name}</h3>
            <p className="text-sm text-muted mt-1">{certificate.issuer} · {certificate.date}</p>
          </div>
          <button type="button" onClick={() => dialogRef.current?.close()} autoFocus aria-label="Close certificate preview" className="shrink-0 p-2 rounded-lg hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary">
            <X size={22} />
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-4 px-4 sm:px-6 py-3 border-b border-border">
          <a href={certificate.fileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline">
            <ExternalLink size={15} />Open PDF
          </a>
          <a href={certificate.fileUrl} download={`${certificate.id}.pdf`} className="flex items-center gap-2 text-sm text-primary hover:underline">
            <Download size={15} />Download PDF
          </a>
        </div>
        <iframe
          src={`${certificate.fileUrl}#view=FitH`}
          title={`${certificate.name} certificate PDF preview`}
          className="w-full flex-1 min-h-0 border-0 bg-white"
        />
        <p id="certificate-preview-help" className="text-xs text-muted px-4 sm:px-6 py-3">
          If your browser cannot display the preview, use Open PDF or Download PDF above.
        </p>
      </div>
    </dialog>,
    document.body
  )
}

export function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null)

  return (
    <SectionWrapper id="certifications" label="Certifications">
      <SectionHeading
        eyebrow="05 / CONTINUED LEARNING"
        title="What I have studied."
        subtitle="Certificates in programming, databases, networking, cybersecurity, project management, and AI. Select a certificate to preview the original PDF."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((certificate, i) => (
          <FadeIn key={certificate.id} delay={Math.min(i * 0.05, 0.25)}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors h-full"
            >
              <div className="flex items-center justify-between gap-3">
                <CertificateIssuer certificate={certificate} />
                <span className="text-xs text-muted border border-border rounded-full px-3 py-1">PDF certificate</span>
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-foreground leading-snug">{certificate.name}</h3>
                <p className="text-sm text-muted">{certificate.issuer}</p>
                <p className="flex items-center gap-1.5 text-xs text-muted"><Calendar size={12} />{certificate.date}</p>
              </div>
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  aria-label={`Preview ${certificate.name} certificate`}
                  aria-haspopup="dialog"
                  onClick={() => setSelectedCertificate(certificate)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <Eye size={16} />Preview
                </button>
                <a href={certificate.fileUrl} download={`${certificate.id}.pdf`} aria-label={`Download ${certificate.name} certificate`} className="p-2 text-muted hover:text-primary rounded-lg focus-visible:outline-2 focus-visible:outline-primary">
                  <Download size={18} />
                </a>
              </div>
            </motion.article>
          </FadeIn>
        ))}
      </div>
      {selectedCertificate && <CertificatePreview certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />}
    </SectionWrapper>
  )
}
