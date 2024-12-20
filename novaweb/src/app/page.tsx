import { HeroSection } from '@/components/HeroSection'
import { PhilosophySection } from '@/components/PhilosophySection'
import { ProcessSection } from '@/components/ProcessSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { ReviewsSection } from '@/components/ReviewsSection'
import { ServicesSection } from '@/components/ServicesSection'

export default function Page() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <ReviewsSection />
    </>
  )
}
