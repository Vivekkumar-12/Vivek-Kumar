import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

interface ContactSectionProps {
  personalInfo: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    location: string;
  };
}

export function ContactSection({ personalInfo }: ContactSectionProps) {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      testId: 'link-contact-email',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      testId: 'link-contact-phone',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedin,
      testId: 'link-contact-linkedin',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View GitHub Profile',
      href: personalInfo.github,
      testId: 'link-contact-github',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-contact">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span data-testid="text-location">{personalInfo.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
              data-testid={method.testId}
            >
              <Card className="hover-elevate transition-all duration-300 cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <method.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{method.label}</CardTitle>
                      <CardDescription className="text-sm break-all">
                        {method.value}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-border text-center">
          <p className="text-muted-foreground text-sm mb-3">
            © 2025 Vivek Kumar. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs text-muted-foreground">Built with</span>
            <div className="flex gap-1.5">
              {['MongoDB', 'Express', 'React', 'Node.js'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2 py-0.5 bg-muted rounded text-muted-foreground"
                  data-testid={`badge-footer-${tech.toLowerCase()}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
