import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import { TeamGrid } from "@/components/ui/TeamGrid";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind NAAM, many of whom are immigrants and refugees themselves, bringing lived experience and deep cultural competence.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="The people who make the welcome real"
        lead="With deep cultural competence and a shared commitment to economic stability, education, and community integration, many of our staff have walked this journey themselves."
        crumbs={[{ label: "About", href: "/about" }, { label: "Our Team" }]}
      />

      {/* Jump links: the roster is grouped by program */}
      <nav aria-label="Teams" className="border-b border-brand-100 bg-white">
        <Container className="flex flex-wrap gap-2 py-5">
          {team.map((group) => (
            <a
              key={group.department}
              href={`#${anchor(group.department)}`}
              className="rounded-full border border-brand-100 bg-cloud px-4 py-1.5 text-sm font-medium text-brand-800 transition-colors hover:border-brand-300 hover:bg-white"
            >
              {group.department}
            </a>
          ))}
        </Container>
      </nav>

      {team.map((group, gi) => (
        <section
          key={group.department}
          id={anchor(group.department)}
          className={
            "scroll-mt-24 py-12 sm:py-14 " + (gi % 2 === 0 ? "bg-white" : "bg-cloud")
          }
        >
          <Container>
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-2xl text-ink sm:text-3xl">{group.department}</h2>
              {group.href && <ProgramLink href={group.href} />}
            </div>
            <TeamGrid members={group.members} />

            {group.subgroup && (
              <>
                <h3 className="mb-6 mt-10 text-xl text-ink">{group.subgroup.title}</h3>
                <TeamGrid members={group.subgroup.members} />
              </>
            )}
          </Container>
        </section>
      ))}

      <CTABand
        tone="gold"
        title="Want to join our mission?"
        text="We're always looking for people who share our commitment to welcoming new Americans."
        actions={[{ label: "View careers", href: "/get-involved/careers", variant: "primary" }]}
      />
    </>
  );
}

function anchor(department: string) {
  return department.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function ProgramLink({ href }: { href: string }) {
  const className =
    "inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700";
  const label = (
    <>
      About the program <ArrowUpRight className="h-4 w-4" />
    </>
  );
  return href.startsWith("http") ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  ) : (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
