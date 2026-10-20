'use client';

import { ArrowRight, Mail, MessageSquareText } from 'lucide-react';

import { AnimatedSection } from '@/components/animated-section';
import { useLanguage } from '@/components/language-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

export function ContactSection() {
  const { t } = useLanguage();
  const { contact } = t;

  return (
    <AnimatedSection id="contato" className="mx-auto w-full max-w-6xl px-6 py-16 pb-24">
      <Card className="overflow-hidden border-slate-200 bg-slate-950 text-white shadow-soft">
        <CardHeader className="space-y-5 p-8 lg:p-10">
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
            className="max-w-3xl text-white"
          >
            <div className="flex flex-wrap gap-3 pt-2">
              <Button>
                <Mail className="h-4 w-4" />
                {contact.emailCta}
              </Button>
              <Button variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                {contact.linkedinCta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </SectionHeading>
          <CardDescription className="max-w-3xl text-slate-300">{contact.availability}</CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4 p-8 pt-0 sm:grid-cols-2 lg:grid-cols-3 lg:p-10 lg:pt-0">
          {t.home.contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
            >
              <span className="inline-flex items-center gap-2 font-medium">
                <MessageSquareText className="h-4 w-4 text-sky-300" />
                {link.label}
              </span>
              <Badge className="border-white/10 bg-white/10 text-white">{contact.openLabel}</Badge>
            </a>
          ))}
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
