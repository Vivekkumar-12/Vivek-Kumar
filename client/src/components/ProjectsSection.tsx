import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Star } from 'lucide-react';
import type { Project } from '@shared/schema';
import { Eye, Download } from 'lucide-react';


interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-projects">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing hands-on experience with modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`flex flex-col hover-elevate transition-all duration-300 ${
                project.featured ? 'border-primary/50 shadow-lg' : ''
              }`}
              data-testid={`card-project-${project.id}`}
            >
              <CardHeader>
               <div className="flex items-start justify-between gap-4 mb-2">
                <CardTitle className="text-xl flex-1" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </CardTitle>

                {/* Top-right icons for certificate */}
                <div className="flex items-center gap-2">
                  {project.certificate && (
                    <>
                      <a
                        href={project.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-full hover:bg-muted transition-colors"
                        title="View Certificate"
                      >
                        <Eye className="w-5 h-5 text-primary" />
                      </a>
                      <a
                        href={project.certificate}
                        download
                        className="p-1 rounded-full hover:bg-muted transition-colors"
                        title="Download Certificate"
                      >
                        <Download className="w-5 h-5 text-primary" />
                      </a>
                    </>
                  )}
                  {project.featured && (
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 flex-shrink-0" data-testid={`icon-featured-${project.id}`} />
                  )}
                </div>
              </div>

                <CardDescription className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span data-testid={`text-project-period-${project.id}`}>{project.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {project.description.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex gap-2" data-testid={`text-project-desc-${project.id}-${index}`}>
                      <span className="text-primary mt-1">•</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2 w-full">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs font-mono"
                      data-testid={`badge-tech-${project.id}-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
