import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SplitFeature, IconCards } from "@/components/ui/blocks";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamGrid } from "@/components/ui/TeamGrid";
import { volunteers } from "@/lib/team";
import { volunteerRoles } from "@/lib/content";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "NAAM relies on dedicated volunteers who mentor, tutor ESOL, drive, or share a professional skill to help new Americans thrive.",
};

// The interest form linked from naamass.org's Volunteer page.
const volunteerForm = "https://forms.office.com/r/0BvmGVu8aF";

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Volunteer"
        title="Join us in making a difference"
        lead="NAAM relies on the support of dedicated volunteers to provide many of our services. Whatever your skills or schedule, there's a place for you here."
        crumbs={[{ label: "Get Involved", href: "/get-involved" }, { label: "Volunteer" }]}
        image="/images/community.jpg"
      />

      <SplitFeature
        eyebrow="The impact of volunteering"
        title="Your time changes lives"
        body={[
          "Volunteers power much of what we do, from the classroom to the food pantry to the job interview. We welcome applicants with interest or experience in any of our program areas, and we accept commitments of varying lengths.",
          "Whether you can give an hour a week or a few days a month, your presence helps a newcomer feel seen, supported, and at home.",
        ]}
        image="/images/english-class.jpg"
        imageSide="right"
      />

      <IconCards
        tone="cloud"
        eyebrow="Volunteer opportunities"
        title="Ways you can help"
        items={volunteerRoles}
        columns={3}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            className="mb-10"
            eyebrow="Meet our volunteers"
            title="The people who give their time"
            description="Our volunteers teach, tutor, and mentor alongside our staff. Select anyone to read their story."
          />
          <TeamGrid members={volunteers} />
        </Container>
      </section>

      <CTABand
        title="Ready to volunteer?"
        text="Fill out our volunteer interest form and our team will be in touch about current opportunities."
        actions={[
          { label: "Volunteer interest form", href: volunteerForm },
          { label: `Call ${org.phone}`, href: org.phoneHref, variant: "white" },
        ]}
      />
    </>
  );
}
