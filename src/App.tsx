import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/sections/HeroSection'
import { AboutSection } from '@/sections/AboutSection'
import { SkillsSection } from '@/sections/SkillsSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { CertificationsSection } from '@/sections/CertificationsSection'
import { ExperienceSection } from '@/sections/ExperienceSection'
import { ContactSection } from '@/sections/ContactSection'

export default function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <div className="page-content">
        <main id="main-content">
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
          <SkillsSection />
          <CertificationsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
