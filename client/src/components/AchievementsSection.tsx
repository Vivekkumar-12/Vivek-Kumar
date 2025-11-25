import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, Users, Eye, Download } from 'lucide-react';
import type { Achievement } from '@shared/schema';

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section id="achievements" className="py-24 px-6 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-achievements">
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notable accomplishments and competitive programming
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="hover-elevate transition-all duration-300 border-primary/30"
              data-testid={`card-achievement-${achievement.id}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Trophy className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2" data-testid={`text-achievement-title-${achievement.id}`}>
                        {achievement.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span data-testid={`text-achievement-date-${achievement.id}`}>{achievement.date}</span>
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievement.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`text-achievement-desc-${achievement.id}-${index}`}>
                      <Badge variant="secondary" className="mt-0.5 flex-shrink-0">
                        <Users className="w-3 h-3" />
                      </Badge>
                      <span className="text-muted-foreground flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              {/* Add top-right icons if achievement has certificate */}
              {achievement.certificate && (
                <div className="absolute right-6 top-6 flex items-center gap-2">
                  <a
                    href={achievement.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-full hover:bg-muted transition-colors"
                    title="View Certificate"
                  >
                    <Eye className="w-4 h-4 text-primary" />
                  </a>
                  <a
                    href={achievement.certificate}
                    download
                    className="p-1 rounded-full hover:bg-muted transition-colors"
                    title="Download Certificate"
                  >
                    <Download className="w-4 h-4 text-primary" />
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
