'use client';

import { AnimatedSection } from '@/components/animated-section';
import { useLanguage } from '@/components/language-provider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio';

export function CareerTimelineSection() {
  const { t } = useLanguage();
  const { careerTimeline } = t;

  return (
    <AnimatedSection className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{careerTimeline.storyTitle}</CardTitle>
            <CardDescription>{careerTimeline.storyDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-7 text-muted-foreground">{careerTimeline.storyBody}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{careerTimeline.dataTitle}</CardTitle>
            <CardDescription>{careerTimeline.dataDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-7 text-muted-foreground">
              {careerTimeline.currentName}: {portfolioData.name}
            </p>
            <p className="text-sm leading-7 text-muted-foreground">
              {careerTimeline.currentRole}: {t.site.title}
            </p>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}
