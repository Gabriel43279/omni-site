import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { SectionStub } from "@/components/ui/SectionStub";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <SectionStub n={3} name="The problem" mode="dark" />
        <SectionStub n={4} name="What happens instead" mode="light" />
        <SectionStub id="services" n={5} name="The 7 services" mode="lavender" />
        <SectionStub id="how-it-works" n={6} name="How it connects" mode="dark" />
        <SectionStub n={7} name="Websites we build" mode="dark" />
        <SectionStub id="results" n={8} name="Results" mode="light" />
        <SectionStub n={9} name="ROI calculator" mode="light" />
        <SectionStub n={10} name="Who it's for" mode="light" />
        <SectionStub id="pricing" n={11} name="Pricing + FAQ" mode="light" />
        <SectionStub n={12} name="Final CTA" mode="dark" />
      </main>
    </>
  );
}
