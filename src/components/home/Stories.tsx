import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { stories } from "@/lib/site";

export function Stories() {
  return (
    <section className="bg-brand-900 py-14 sm:py-16">
      <Container>
        <SectionHeading
          align="center"
          light
          eyebrow="Real impact"
          title="Making a Difference, One Story at a Time"
          description="Behind every statistic is a person rebuilding a life. Here are a few of the neighbors we're proud to know."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stories.map((story, i) => (
            <Reveal key={story.slug} delay={i * 0.1}>
              <Link
                href={`/stories/${story.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                    <MapPin className="h-3 w-3" /> {story.origin}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-[15px] leading-relaxed text-ink-soft">
                    {story.quote}
                  </p>
                  <p className="mt-5 flex items-center justify-between font-display text-lg font-semibold text-ink">
                    {story.name}
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                      Read {story.name}&apos;s story
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* "Hear more stories" pointed at the same three stories on Who We Serve.
            The client asked for a label that matches where it actually goes. */}
        <div className="mt-10 text-center">
          <Button href="/about/who-we-serve" variant="white" size="lg">
            Learn who we serve
          </Button>
        </div>
      </Container>
    </section>
  );
}
