import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Book from "@/components/Book";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LivePreview from "@/components/LivePreview";
import { getContent } from "@/lib/content";

// Content comes from the CMS, so always render fresh.
export const dynamic = "force-dynamic";

export default async function Home() {
  const { site, projects, services, skillGroups, faqs } = await getContent();

  return (
    <div className="pg">
      <Effects />
      <LivePreview />
      <Header name={site.brandName} photoUrl={site.photoUrl} cta={site.primaryCta} />
      <main>
        <div className="wrap">
          <Hero site={site} />
        </div>
        <Trust items={site.trust} />
        <Marquee items={site.marquee} />
        <div className="wrap">
          <Services services={services} />
          <Work projects={projects} />
          <Process heading={site.processHeading} steps={site.processSteps} note={site.processNote} />
          <Skills groups={skillGroups} />
          <About site={site} />
          <Faq faqs={faqs} />
          <CtaBand heading={site.ctaHeading} phone={site.phone} message={site.ctaMessage} primary={site.primaryCta} />
          <Book site={site} />
        </div>
      </main>
      <div className="wrap">
        <Footer site={site} />
      </div>
      <WhatsAppFloat phone={site.phone} message={site.floatMessage} />
    </div>
  );
}
