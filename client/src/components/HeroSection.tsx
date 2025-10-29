import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import profilePhoto from '@assets/profile photo_1761752240811.jpeg';

interface HeroSectionProps {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    cgpa: string;
  };
}

export function HeroSection({ personalInfo }: HeroSectionProps) {
  const stats = [
    { label: 'CGPA', value: personalInfo.cgpa },
    { label: 'Projects', value: '5+' },
    { label: 'Certifications', value: '7+' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', testId: 'link-linkedin' },
    { icon: Github, href: personalInfo.github, label: 'GitHub', testId: 'link-github' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', testId: 'link-email' },
    { icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone', testId: 'link-phone' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-8 pt-16">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 animate-fade-in">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Vivek Kumar"
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg">
                <span className="font-semibold text-sm">Available</span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4" data-testid="text-name">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4" data-testid="text-title">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl" data-testid="text-tagline">
              {personalInfo.tagline}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              {stats.map((stat) => (
                <Badge key={stat.label} variant="secondary" className="text-sm" data-testid={`badge-stat-${stat.label.toLowerCase()}`}>
                  <span className="font-bold text-foreground">{stat.value}</span>
                  <span className="ml-2 text-muted-foreground">{stat.label}</span>
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('/api/resume', '_blank')}
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(link.href, '_blank')}
                  data-testid={link.testId}
                  title={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
