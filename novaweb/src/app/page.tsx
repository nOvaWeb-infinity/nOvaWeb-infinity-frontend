import { HeroSection } from '@/components/HeroSection'
import { PhilosophySection } from '@/components/PhilosophySection'
import { projects, ProjectsSection } from '@/components/ProjectsSection'
import { ServicesSection } from '@/components/ServicesSection'

export default function Page() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <ProjectsSection projects={projects} />
    </>
  )
}
