import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import type { Education } from '@shared/schema';

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="py-24 px-6 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-education">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={edu.id} className="relative" data-testid={`card-education-${edu.id}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block" />

                <Card className="md:ml-20 hover-elevate transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-6 flex-wrap">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="p-2 bg-primary/10 rounded-md flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1" data-testid={`text-institution-${edu.id}`}>
                            {edu.institution}
                          </CardTitle>
                          <CardDescription className="text-base font-medium text-foreground" data-testid={`text-degree-${edu.id}`}>
                            {edu.degree}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                          <span data-testid={`text-score-${edu.id}`}>{edu.score}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span data-testid={`text-location-${edu.id}`}>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span data-testid={`text-period-${edu.id}`}>{edu.period}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
