import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationSection } from '@/components/EducationSection';
import { TrainingCertificatesSection } from '@/components/TrainingCertificatesSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { ContactSection } from '@/components/ContactSection';
import { portfolioData } from '@shared/portfolioData';

export default function Home() {
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
