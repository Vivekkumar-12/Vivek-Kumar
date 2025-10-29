import { useQuery } from '@tanstack/react-query';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationSection } from '@/components/EducationSection';
import { TrainingCertificatesSection } from '@/components/TrainingCertificatesSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { ContactSection } from '@/components/ContactSection';
import type { PortfolioData } from '@shared/schema';

export default function Home() {
  const { data: portfolioData, isLoading } = useQuery<PortfolioData>({
    queryKey: ['/api/portfolio'],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Unable to load portfolio data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection personalInfo={portfolioData.personalInfo} />
        <AboutSection personalInfo={portfolioData.personalInfo} />
        <SkillsSection skills={portfolioData.skills} />
        <ProjectsSection projects={portfolioData.projects} />
        <EducationSection education={portfolioData.education} />
        <TrainingCertificatesSection
          training={portfolioData.training}
          certificates={portfolioData.certificates}
        />
        <AchievementsSection achievements={portfolioData.achievements} />
        <ContactSection personalInfo={portfolioData.personalInfo} />
      </main>
    </div>
  );
}
