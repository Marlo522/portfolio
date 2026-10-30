import { motion } from 'framer-motion'
import { Calendar, ExternalLink } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { FadeIn } from '@/components/FadeIn'
import { CertificateIssuer } from '@/components/CertificateIssuer'
import { certifications } from '@/data/certifications'

export function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" label="Certifications">
      <SectionHeading
        eyebrow="05 / CONTINUED LEARNING"
        title="What I have studied."
        subtitle="Certificates in programming, databases, networking, cybersecurity, project management, and AI."
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
                <span className="text-xs text-muted border border-border rounded-full px-3 py-1">Certificate</span>
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-foreground leading-snug">{certificate.name}</h3>
                <p className="text-sm text-muted">{certificate.issuer}</p>
                <p className="flex items-center gap-1.5 text-xs text-muted"><Calendar size={12} />{certificate.date}</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                {certificate.availableUponRequest ? (
                  <span className="text-sm text-muted">Certificate available upon request</span>
                ) : certificate.credentialUrl.trim() ? (
                  <a
                    href={certificate.credentialUrl.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${certificate.name} credential (opens in a new tab)`}
                    className="certificate-link flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    <ExternalLink size={16} aria-hidden="true" />View credential
                  </a>
                ) : (
                  <span className="text-sm text-muted">Credential link coming soon</span>
                )}
              </div>
            </motion.article>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
