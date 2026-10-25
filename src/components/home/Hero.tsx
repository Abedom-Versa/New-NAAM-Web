import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { org, heroV2 } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      {/* Text sits directly on the photo, behind the same left-to-right wash as the
          inner-page headers (client feedback, Oct 2026). The wash fades out toward
          the right so the group in the photo stays visible. */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="NAAM staff and community members gathered on the grand staircase at the Massachusetts State House"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/70 to-brand-900/20" />
      </div>

      <Container className="relative py-14 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl font-bold leading-[1.14] text-white sm:text-4xl lg:text-[2.6rem]">
            {heroV2.headline}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {heroV2.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/programs" variant="primary" size="lg">
              Explore our programs
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href={org.donateUrl} variant="gold" size="lg">
              Donate
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
