import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Quote } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { stories } from "@/lib/site";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) return {};
  return { title: `Meet ${story.name}`, description: story.quote };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) notFound();

  const others = stories.filter((s) => s.slug !== story.slug);

  return (
    <>
      <PageHeader
        eyebrow="Client story"
        title={`Meet ${story.name}`}
        lead={story.quote}
        crumbs={[{ label: "Who We Serve", href: "/about/who-we-serve" }, { label: story.name }]}
      />

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card lg:sticky lg:top-28">
                <Image
                  src={story.image}
                  alt={story.fullName}
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                  <MapPin className="h-3 w-3" /> {story.origin}
                </span>
              </div>
            </Reveal>

            <div>
              <h2 className="text-2xl text-ink sm:text-3xl">{story.fullName}</h2>
              <div className="mt-6 space-y-5">
                {story.story.map((para) => (
                  <p key={para.slice(0, 40)} className="text-lg leading-relaxed text-ink-soft">
                    {para}
                  </p>
                ))}
              </div>

              {story.pullQuote && (
                <figure className="mt-10 rounded-3xl border-l-4 border-gold-300 bg-cloud-warm p-8">
                  <Quote className="h-7 w-7 text-gold-400" />
                  <blockquote className="mt-3 font-display text-xl leading-snug text-ink">
                    &ldquo;{story.pullQuote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-ink-soft">
                    {story.fullName}
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cloud py-14 sm:py-16">
        <Container>
          <h2 className="text-2xl text-ink sm:text-3xl">More stories</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/stories/${s.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-brand-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                  <Image src={s.image} alt="" fill sizes="64px" className="object-cover object-top" />
                </span>
                <span>
                  <span className="block font-display text-lg font-semibold text-ink">
                    Meet {s.name}
                  </span>
                  <span className="text-sm text-ink-soft">{s.origin}</span>
                </span>
                <ArrowRight className="ml-auto h-4 w-4 text-brand-400 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        tone="gold"
        title="Help write the next story"
        text="Volunteers, partners, and donors make every one of these journeys possible."
        actions={[{ label: "Get involved", href: "/get-involved", variant: "primary" }]}
      />
    </>
  );
}
