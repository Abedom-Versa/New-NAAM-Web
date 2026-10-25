import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { news } from "@/lib/site";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) return {};
  return { title: item.title, description: item.excerpt };
}

export default async function NewsItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageHeader
        eyebrow={item.category}
        title={item.title}
        crumbs={[{ label: "News & Events", href: "/news" }, { label: item.title }]}
      />

      <article className="bg-white py-14 sm:py-16">
        <Container className="max-w-3xl">
          <p className="flex items-center gap-1.5 text-sm text-ink-soft">
            <Calendar className="h-4 w-4 text-brand-500" /> {item.date}
          </p>

          <div className="relative mt-6 aspect-[3/2] overflow-hidden rounded-3xl shadow-card">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="(max-width:768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <div className="mt-10 space-y-5">
            {item.body.map((para) => (
              <p key={para.slice(0, 40)} className="text-lg leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
          </div>

          {item.lists?.map((list) => (
            <div key={list.title} className="mt-8">
              <h2 className="text-xl text-ink">{list.title}</h2>
              <ul className="mt-3 grid gap-x-6 gap-y-1.5 text-ink-soft sm:grid-cols-2">
                {list.items.map((li) => (
                  <li key={li} className="flex items-start gap-2">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {item.link && (
            <div className="mt-10">
              <Button href={item.link.href} variant="primary" size="lg">
                {item.link.label}
                <ArrowUpRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </Container>
      </article>

      <CTABand
        tone="gold"
        title="Be part of the next story"
        text="Your support and time help write the next chapter for a new American family."
        actions={[{ label: "Get involved", href: "/get-involved", variant: "primary" }]}
      />
    </>
  );
}
