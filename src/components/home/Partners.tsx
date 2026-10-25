import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { partners } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Partners() {
  const row = [...partners, ...partners];
  return (
    <section className="border-y border-brand-100 bg-white py-10">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">
          Proudly supported by our partners &amp; sponsors
        </p>
      </Container>
      {/* Hovering or focusing a link pauses the marquee so it can be clicked. */}
      <div className="marquee-mask mt-8 overflow-hidden">
        <ul className="animate-marquee flex w-max items-center gap-4 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {row.map((p, i) => {
            // The second copy exists only to make the loop seamless; keep it out of
            // the tab order and away from screen readers.
            const duplicate = i >= partners.length;
            return (
              <li key={`${p.name}-${i}`} aria-hidden={duplicate || undefined}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={duplicate ? -1 : undefined}
                  className="flex h-16 shrink-0 items-center gap-3 rounded-2xl border border-brand-100 bg-white pl-3 pr-6 font-display text-base font-medium text-brand-800/80 transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  <span
                    className={cn(
                      "flex h-11 shrink-0 items-center",
                      p.logo.onDark && "rounded-xl bg-brand-800 p-1.5"
                    )}
                  >
                    <Image
                      src={p.logo.src}
                      alt=""
                      width={p.logo.width}
                      height={p.logo.height}
                      className="h-full w-auto max-w-32 object-contain"
                    />
                  </span>
                  {p.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
