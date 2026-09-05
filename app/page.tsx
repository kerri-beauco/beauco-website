import Image from "next/image";
import Link from "next/link";
import BeaucoHeader from "@/components/beauco/Header";
import BeaucoFooter from "@/components/beauco/Footer";
import ArrowIcon from "@/components/ArrowIcon";
import Container from "@/components/Container";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import kerriHero from "@/assets/images/kerri-hero.png";
import bcWorking from "@/assets/images/bc-working.png";
import busSide from "@/assets/images/bus-side.png";
import wClimatecare from "@/assets/images/w-climatecare2.png";
import wMoen from "@/assets/images/w-moen.png";
import wWoodGundy from "@/assets/images/w-wg3.png";
import wIpc from "@/assets/images/w-ipc3.png";
import wCounsel from "@/assets/images/w-counsel2.png";

const services = [
  "Marketing Operations & Enablement",
  "Brand Strategy & Rebrands",
  "Campaign & Product Launches",
  "Client Experience Design",
  "Employee Engagement",
  "Event Planning",
];

const serviceDetails = [
  {
    title: "Marketing Operations & Enablement",
    body: "The systems, process, and tools underneath everything else. We audit what you have, fix the workflows, and get teams using what you already pay for.",
  },
  {
    title: "Brand Strategy & Rebrands",
    body: "Senior strategy, full execution, and the adoption that makes it stick. Repositioning and identity work for established brands, built for adoption.",
  },
  {
    title: "Campaign & Product Launches",
    body: "Strategy through delivery, fully owned, start to finish. We build the plan, rally the teams, and drive every moving piece to launch day, so nothing slips and execution is flawless.",
  },
  {
    title: "Client Experience Design",
    body: "From first impression to last, we walk the whole path your customer walks, spotting every gap between teams, until it all feels like one brand.",
  },
  {
    title: "Employee Engagement",
    body: "Embedded facilitation that gets teams pulling in the same direction, and the follow-through that keeps them there long after the session ends.",
  },
  {
    title: "Event Planning",
    body: "White-glove, thoughtful, creative events people actually remember. We handle every detail so you can be fully present for the ones that matter.",
  },
];

const brandLogos = [
  { src: wClimatecare, alt: "ClimateCare", height: 34 },
  { src: wMoen, alt: "Moen", height: 32 },
  { src: wWoodGundy, alt: "CIBC Wood Gundy", height: 50 },
  { src: wIpc, alt: "Investment Planning Counsel", height: 48 },
  { src: wCounsel, alt: "Counsel Portfolio Services", height: 38 },
];

const stats = [
  {
    figure: "$500M",
    body: "Gross sales added in twelve months by refining product positioning and messaging with cross-functional teams.",
  },
  {
    figure: "$1B–$4B",
    body: "Assets under management grown over five years through product roadmap, brand management and sales support.",
  },
  {
    figure: "5.7x",
    body: "Campaign ROI on an employee incentive program that added $26K in monthly recurring revenue.",
  },
  {
    figure: "35",
    body: "Independent companies carried through a full brand refresh, delivered with no extra budget.",
  },
];

const strengths = [
  {
    title: "Relationship Building",
    body: "Making people feel part of the process, which is what gets stronger buy-in.",
  },
  {
    title: "Project Management",
    body: "Organized, systemized, and stopping at nothing until every objective is met.",
  },
  {
    title: "Strategic Planning",
    body: "Multichannel programs built to reach the right people and hold their attention.",
  },
];

function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 rounded-[2px] bg-bc-accent px-7 py-4 font-jost text-[15px] font-semibold tracking-[0.05em] text-white uppercase transition-[background-color,transform] duration-[180ms] ease-out hover:-translate-y-0.5 hover:bg-bc-accent-hover ${className}`}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <BeaucoHeader />
      <main id="top" className="bg-bc-canvas">
        {/* Hero */}
        <section className="bg-bc-canvas pt-[clamp(40px,5vw,72px)] pb-[clamp(56px,6vw,88px)]">
          <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-[clamp(32px,5vw,64px)]">
            <div>
              <span className="mb-[22px] block max-w-[380px] font-inter text-[12.5px] font-semibold tracking-[0.14em] text-bc-accent uppercase leading-[1.7]">
                Senior marketing leadership that embeds alongside your team
              </span>
              <h1 className="font-jost text-[clamp(44px,6.4vw,86px)] font-bold tracking-[0.005em] text-bc-ink uppercase leading-[0.94]">
                We make
                <br />
                work move.
              </h1>
              <p className="mt-7 max-w-[520px] text-[17px] text-bc-body">
                Our passion is breathing life back into any project. It&rsquo;s
                that second set of eyes when you&rsquo;ve lived and breathed it
                for too long. It&rsquo;s that massive, high-impact project no
                one wants to tackle. It&rsquo;s that sales team rebuilding the
                same deck every week, when the tools are already built and
                sitting there.
              </p>
              <p className="mt-4 max-w-[520px] text-[17px] text-bc-body">
                Let us tackle what&rsquo;s been holding your team back.
                We&rsquo;ll bring structure, clarity, and immediate momentum
                &mdash; bringing your team along for the ride.
              </p>
              <div className="mt-8">
                <PrimaryButton href="#talk">Let&rsquo;s Talk</PrimaryButton>
              </div>
            </div>
            <div className="flex w-full items-end justify-center">
              <Image
                src={kerriHero}
                alt="Kerri Beaulieu"
                className="h-auto w-full max-w-[520px]"
                priority
              />
            </div>
          </Container>
        </section>

        {/* Services marquee */}
        <section className="overflow-hidden bg-bc-black py-[22px]">
          <div className="animate-marquee flex w-max font-jost text-[21px] font-semibold tracking-[0.06em] text-white uppercase">
            {[...services, ...services].map((name, i) => (
              <span key={i} className="px-[22px] whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="work" className="bg-bc-surface py-[clamp(64px,7vw,100px)]">
          <Container>
            <div className="mb-[clamp(48px,5vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-center gap-[clamp(32px,5vw,64px)]">
              <h2 className="font-jost text-[clamp(34px,4.6vw,60px)] font-bold tracking-[0.005em] text-bc-ink uppercase leading-[0.98]">
                Give us
                <br />
                your mess.
                <br />
                We&rsquo;ll make a
                <br />
                plan. <span className="text-bc-accent">Fast.</span>
              </h2>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2px] bg-bc-placeholder">
                <Image
                  src={bcWorking}
                  alt="Working through a plan together"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(28px,3.5vw,48px)]">
              {serviceDetails.map((s) => (
                <div key={s.title}>
                  <h3 className="mb-3 font-jost text-[17px] font-semibold tracking-[0.04em] text-bc-ink uppercase">
                    {s.title}
                  </h3>
                  <p className="text-[15.5px] text-bc-body">{s.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Brands */}
        <section className="bg-bc-black py-[clamp(48px,5vw,72px)]">
          <Container>
            <div className="mb-12 text-center font-jost text-[clamp(17px,2vw,24px)] font-semibold tracking-[0.09em] text-white uppercase">
              The brands I&rsquo;ve had the pleasure to work with
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-[clamp(32px,5vw,64px)] gap-y-10">
              {brandLogos.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  style={{ height: logo.height }}
                  className="w-auto"
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Results */}
        <section className="bg-bc-canvas py-[clamp(64px,7vw,100px)]">
          <Container>
            <div className="mb-[clamp(40px,4vw,56px)] max-w-[620px]">
              <span className="mb-3.5 block font-inter text-[12.5px] font-semibold tracking-[0.14em] text-bc-accent uppercase">
                Twenty-five years of receipts
              </span>
              <h2 className="font-jost text-[clamp(30px,4vw,50px)] font-bold tracking-[0.005em] text-bc-ink uppercase leading-[1.0]">
                Execution is the superpower.
              </h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-0.5 border-t-2 border-bc-rule bg-bc-canvas">
              {stats.map((stat) => (
                <div
                  key={stat.figure}
                  className="border-b-2 border-bc-rule bg-bc-canvas px-7 pt-8 pb-[34px]"
                >
                  <div className="font-jost text-[clamp(38px,4.4vw,54px)] leading-none font-bold text-bc-accent">
                    {stat.figure}
                  </div>
                  <p className="mt-3.5 text-[15px] text-bc-body">{stat.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Meet Kerri */}
        <section className="bg-bc-surface py-[clamp(64px,7vw,100px)]">
          <Container>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-[clamp(32px,5vw,64px)]">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-bc-placeholder">
                <ImagePlaceholder label="Kerri Beaulieu portrait" />
              </div>
              <div>
                <span className="mb-3.5 block font-inter text-[12.5px] font-semibold tracking-[0.14em] text-bc-accent uppercase">
                  Who you&rsquo;re working with
                </span>
                <h2 className="mb-1.5 font-jost text-[clamp(30px,4vw,48px)] font-bold tracking-[0.005em] text-bc-ink uppercase leading-[1.0]">
                  Kerri Beaulieu
                </h2>
                <div className="mb-6 text-base text-bc-body">
                  Senior Marketing &amp; Communications Leader
                </div>
                <p className="mb-4 text-[16.5px] text-bc-body">
                  Twenty-five years building integrated marketing across B2B,
                  consumer services and regulated industries. Brands built
                  from the ground up, teams led through complex rollouts, and
                  growth driven by a balance of strategic planning and
                  hands-on execution.
                </p>
                <p className="mb-8 text-[16.5px] text-bc-body">
                  The work runs cross-functionally with sales, operations and
                  executive teams. The approach is collaborative,
                  down-to-earth, and genuinely fun to work with.
                </p>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-[26px]">
                  {strengths.map((s) => (
                    <div key={s.title}>
                      <h3 className="mb-2.5 font-jost text-[15px] font-semibold tracking-[0.04em] text-bc-ink uppercase">
                        {s.title}
                      </h3>
                      <p className="text-[15px] text-bc-body">{s.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Bloom band */}
        <section id="bloom" className="bg-bc-black text-[#e8e4e2]">
          <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-[clamp(28px,4vw,56px)]">
            <div className="py-11">
              <span className="mb-3.5 block font-inter text-[12.5px] font-semibold tracking-[0.14em] text-bc-accent uppercase">
                Our community initiative
              </span>
              <h2 className="mb-[18px] font-jost text-[clamp(28px,3.4vw,42px)] font-bold tracking-[0.005em] text-white uppercase leading-[1.0]">
                We move ourselves so we can make your work move.
              </h2>
              <p className="mb-[26px] max-w-[440px] text-base text-bc-muted-2">
                Great work starts with people who feel energized, connected
                and alive. That spirit fuels Bloom, our community initiative
                bringing people together through movement, music and
                nourishment. And yes, we have a bus.
              </p>
              <PrimaryButton href="/bloom" className="px-[26px] py-[15px]">
                Meet Bloom
              </PrimaryButton>
            </div>
            <div className="w-full max-w-[680px] justify-self-end py-11">
              <Image src={busSide} alt="Kerri driving the Bloom Bus" className="h-auto w-full" />
            </div>
          </Container>
        </section>

        {/* Let's talk */}
        <section id="talk" className="bg-bc-canvas py-[clamp(64px,7vw,100px)]">
          <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-[clamp(32px,5vw,64px)]">
            <div>
              <h2 className="mb-7 font-jost text-[clamp(32px,4.4vw,56px)] font-bold tracking-[0.005em] text-bc-ink uppercase leading-[0.98]">
                Let&rsquo;s figure out
                <br />
                what&rsquo;s in the way.
              </h2>
              <PrimaryButton href="mailto:kerri@beauco.ca">Let&rsquo;s Talk</PrimaryButton>
            </div>
            <div className="pt-2">
              <p className="mb-4 text-[17px] text-bc-body">
                We love a good work conversation, and we&rsquo;ll probably ask
                about your life outside it too. What&rsquo;s the hurdle? What
                do you actually want for your team? Book 15 minutes and feel a
                little lighter afterwards.
              </p>
              <p className="text-[17px] font-semibold text-bc-ink">
                If you&rsquo;ve read this far, just book the call. No
                conversation is too big or too small.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <BeaucoFooter />
    </>
  );
}
