import { Card, CardContent } from '@/components/ui/card';
import { Code, GraduationCap, MapPin, Briefcase } from 'lucide-react';

interface AboutSectionProps {
  personalInfo: {
    name: string;
    location: string;
    cgpa: string;
  };
}

export function AboutSection({ personalInfo }: AboutSectionProps) {
  const highlights = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'BTech in Computer Science',
      detail: `CGPA: ${personalInfo.cgpa}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      detail: 'Available for opportunities',
    },
    {
      icon: Code,
      label: 'Specialization',
      value: 'MERN Stack Development',
      detail: 'Full-Stack Web Applications',
    },
    {
      icon: Briefcase,
      label: 'Experience',
      value: '5+ Projects',
      detail: '7+ Certifications',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-about">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated developer with a passion for creating impactful web solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Professional Summary */}
          <Card className="md:col-span-2 p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate Full-Stack Developer currently pursuing my Bachelor of Technology in Computer Science and Engineering at Lovely Professional University. With a strong foundation in the MERN stack and experience across multiple programming languages, I specialize in building scalable and user-friendly web applications.
                </p>
                <p>
                  My journey in software development has been marked by hands-on projects ranging from e-commerce platforms to hospital management systems. I'm particularly interested in creating solutions that solve real-world problems and enhance user experiences.
                </p>
                <p>
                  Beyond technical skills, I bring strong leadership abilities, effective communication, and a team-oriented mindset to every project. I'm always eager to learn new technologies and stay updated with industry trends.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Highlights */}
          {highlights.map((highlight) => (
            <Card key={highlight.label} className="hover-elevate transition-all duration-300" data-testid={`card-highlight-${highlight.label.toLowerCase()}`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{highlight.label}</p>
                    <h4 className="text-lg font-semibold text-foreground mb-1" data-testid={`text-highlight-value-${highlight.label.toLowerCase()}`}>
                      {highlight.value}
                    </h4>
                    <p className="text-sm text-muted-foreground">{highlight.detail}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
