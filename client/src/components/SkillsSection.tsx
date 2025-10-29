import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Wrench, Database, Users, Layers } from 'lucide-react';
import type { SkillCategory } from '@shared/schema';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const categoryIcons: Record<string, any> = {
  'Languages': Code,
  'Frameworks': Layers,
  'Tools/Platforms': Wrench,
  'Database Management': Database,
  'Soft Skills': Users,
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-24 px-6 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-skills">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory) => {
            const Icon = categoryIcons[skillCategory.category] || Code;
            return (
              <Card key={skillCategory.category} className="hover-elevate transition-all duration-300" data-testid={`card-skill-${skillCategory.category.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{skillCategory.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="font-mono text-xs"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
