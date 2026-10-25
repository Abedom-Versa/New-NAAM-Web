import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconCards } from "@/components/ui/blocks";
import { CTABand } from "@/components/ui/CTABand";
import { CountUp } from "@/components/ui/CountUp";
import { Timeline } from "@/components/ui/Timeline";
import { aboutContent } from "@/lib/content";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Since 1990, NAAM has welcomed refugees and immigrants to Massachusetts, promoting stability, building bridges, and honoring cultural identity.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="A welcome that lasts well beyond arrival"
        lead="The New American Association of Massachusetts has spent more than three decades helping newcomers build new lives, with dignity, opportunity, and community."
        crumbs={[{ label: "About" }]}
        image="/images/community.jpg"
      />

      {/* Mission */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <span className="eyebrow text-brand-600">Our mission</span>
          <p className="mt-5 font-display text-2xl leading-snug text-ink sm:text-3xl">
            “{aboutContent.mission}”
          </p>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-brand-900 py-14 text-white">
        <Container>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="text-center">
                <dt className="font-display text-4xl font-semibold text-gold-300 sm:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dt>
                <dd className="mx-auto mt-2 max-w-[12rem] text-sm text-white/75">
                  {stat.label}
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-cloud-warm py-16 sm:py-20">
        <Container>
          <SectionHeading
            align="center"
            className="mb-10"
            eyebrow="Our story"
            title="From a community association to a statewide welcome"
            description="Explore the pivotal moments that have shaped the New American Association of Massachusetts into the leading post-resettlement agency north of Boston."
          />
          <Reveal>
            <Timeline items={aboutContent.timeline} />
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <IconCards
        eyebrow="What we believe"
        title="The values behind our work"
        items={aboutContent.values}
        columns={4}
      />

      <CTABand
        title="Meet the people behind NAAM"
        text="Many of our team members are themselves immigrants and refugees who understand the journey firsthand."
        actions={[{ label: "Our team", href: "/about/team" }]}
      />
    </>
  );
}
