import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, BookOpen, Calendar, Eye, Download } from 'lucide-react';
import type { Training, Certificate } from '@shared/schema';

interface TrainingCertificatesSectionProps {
  training: Training[];
  certificates: Certificate[];
}

export function TrainingCertificatesSection({ training, certificates }: TrainingCertificatesSectionProps) {
  return (
    <section id="training-certificates" className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-training-certificates">
            Training & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Training Section */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Professional Training
            </h3>
            <div className="space-y-4">
              {training.map((item) => (
                <Card key={item.id} className="hover-elevate transition-all duration-300" data-testid={`card-training-${item.id}`}>
                  <CardHeader>
                    <CardTitle className="text-lg" data-testid={`text-training-title-${item.id}`}>
                      {item.title}
                    </CardTitle>
                    <CardDescription className="flex items-center justify-between gap-4">
                      <span data-testid={`text-training-institution-${item.id}`}>{item.institution}</span>
                      <Badge variant="secondary" className="text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span data-testid={`text-training-period-${item.id}`}>{item.period}</span>
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5">
                      {item.description.map((desc, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex gap-2" data-testid={`text-training-desc-${item.id}-${index}`}>
                          <span className="text-primary mt-0.5">•</span>
                          <span className="flex-1">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certificates Section */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {certificates.map((cert) => (
                <Card key={cert.id} className="hover-elevate transition-all duration-300" data-testid={`card-certificate-${cert.id}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-base flex-1" data-testid={`text-cert-title-${cert.id}`}>
                        {cert.title}
                      </CardTitle>
                      {/* Top-right icons for certificate download/view */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {cert.certificate && (
                          <>
                            <a
                              href={cert.certificate}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 rounded-full hover:bg-muted transition-colors"
                              title="View Certificate"
                            >
                              <Eye className="w-4 h-4 text-primary" />
                            </a>
                            <a
                              href={cert.certificate}
                              download
                              className="p-1 rounded-full hover:bg-muted transition-colors"
                              title="Download Certificate"
                            >
                              <Download className="w-4 h-4 text-primary" />
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                    <CardDescription className="flex items-center justify-between gap-4">
                      <span className="flex-1" data-testid={`text-cert-institution-${cert.id}`}>{cert.institution}</span>
                      <Badge variant="outline" className="text-xs flex-shrink-0">
                        <span data-testid={`text-cert-date-${cert.id}`}>{cert.date}</span>
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
