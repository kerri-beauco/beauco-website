import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import BloomHeader from "@/components/bloom/Header";
import BloomFooter from "@/components/bloom/Footer";
import ArrowIcon from "@/components/ArrowIcon";
import InstagramIcon from "@/components/InstagramIcon";
import Container from "@/components/Container";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import heroImg from "@/assets/images/hero.jpg";
import p03 from "@/assets/images/p03.jpg";
import p04 from "@/assets/images/p04.jpg";
import p05 from "@/assets/images/p05.jpg";
import p06 from "@/assets/images/p06.jpg";
import p07 from "@/assets/images/p07.jpg";
import p08 from "@/assets/images/p08.jpg";
import p10 from "@/assets/images/p10.jpg";
import p11 from "@/assets/images/p11.jpg";
import p12 from "@/assets/images/p12.jpg";
import p13 from "@/assets/images/p13.jpg";
import p16 from "@/assets/images/p16.jpg";
import corporate from "@/assets/images/corporate.jpg";
import kerriBus from "@/assets/images/kerri-bus.jpg";
import busSide from "@/assets/images/bus-side.png";
import bcLogo from "@/assets/images/p18.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloom Bus",
  description:
    "Bloom is Beau & Co.'s community initiative. Join a Bloom adventure, or book the 12-seat Bloom Bus for one of your own.",
};

function FilledButton({
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
      className={`inline-flex items-center gap-2.5 rounded-[3px] border-2 border-bloom-accent bg-bloom-accent px-[26px] py-4 font-jost text-[15px] font-semibold tracking-[0.03em] text-white uppercase transition-[background-color,border-color,transform] duration-[180ms] ease-out hover:-translate-y-0.5 hover:border-bloom-accent-hover hover:bg-bloom-accent-hover ${className}`}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

function OutlineWhiteButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2.5 rounded-[3px] border-2 border-white/70 bg-transparent px-[26px] py-4 font-jost text-[15px] font-semibold tracking-[0.03em] text-white uppercase transition-[background-color,color,border-color,transform] duration-[180ms] ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-bloom-navy"
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

function OutlineNavyButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2.5 rounded-[3px] border-2 border-bloom-navy bg-transparent px-[26px] py-4 font-jost text-[15px] font-semibold tracking-[0.03em] text-bloom-navy uppercase transition-[background-color,color,transform] duration-[180ms] ease-out hover:-translate-y-0.5 hover:bg-bloom-navy hover:text-white"
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

function OnLightButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2.5 rounded-[3px] border-2 border-white bg-white px-[26px] py-4 font-jost text-[15px] font-semibold tracking-[0.03em] text-bloom-navy uppercase transition-[background-color,color,border-color,transform] duration-[180ms] ease-out hover:-translate-y-0.5 hover:border-bloom-deep-navy hover:bg-bloom-deep-navy hover:text-white"
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

const polaroids = [
  { src: p03, alt: "Boarding the bus", rotate: "-rotate-[7deg]", z: "z-[1]", size: "clamp(132px,14vw,208px)" },
  { src: p04, alt: "On board, pink light", rotate: "rotate-[4deg]", z: "z-[2]", size: "clamp(132px,14vw,208px)" },
  { src: p05, alt: "In front of the bus", rotate: "-rotate-[2deg]", z: "z-[3]", size: "clamp(146px,15.5vw,230px)", big: true },
  { src: null, alt: "Add a photo — snacks, music, the aisle", rotate: "rotate-[5deg]", z: "z-[2]", size: "clamp(132px,14vw,208px)" },
  { src: null, alt: "Add a photo — arriving somewhere good", rotate: "-rotate-[6deg]", z: "z-[1]", size: "clamp(132px,14vw,208px)" },
];

const onBoardTiles = [
  { src: p11, alt: "Good music", caption: "Good music." },
  { src: p12, alt: "Good snacks", caption: "Good snacks." },
  { src: p13, alt: "New people, old friends", caption: <>New people.<br />Old friends.</> },
  { src: p07, alt: "No parking, no designated driver", caption: <>No parking.<br />No designated driver.</> },
];

const originCards = [
  { src: p16, alt: "Movement", label: "Movement" },
  { src: p07, alt: "Road trips", label: "Road trips" },
];

export default function BloomPage() {
  return (
    <>
      <BloomHeader />
      <main id="top" className="bg-white text-bloom-ink">
        {/* Hero */}
        <section className="relative overflow-hidden bg-bloom-deep-navy">
          <div className="relative h-[min(86vh,760px)] min-h-[560px] w-full">
            <Image
              src={heroImg}
              alt="The Bloom Bus"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,18,32,0.10) 0%, rgba(10,18,32,0.13) 45%, rgba(10,18,32,0.20) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[58%]"
            style={{
              background:
                "linear-gradient(to top, rgba(8,14,26,0.92) 0%, rgba(8,14,26,0.80) 40%, rgba(8,14,26,0.42) 72%, rgba(8,14,26,0) 100%)",
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] pb-11">
            <Container className="max-w-[900px]">
              <span className="mb-5 inline-block rounded-[20px] bg-bloom-deep-navy px-4 py-[9px] font-inter text-[13.5px] font-semibold tracking-[0.11em] whitespace-nowrap text-bloom-accent uppercase">
                A Beau &amp; Co. community initiative
              </span>
              <h1
                className="font-jost text-[clamp(38px,6.4vw,88px)] leading-[0.96] font-bold tracking-[0.01em] text-white uppercase"
                style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55)", textWrap: "balance" }}
              >
                Get on the bus.
                <br />
                Go somewhere good.
              </h1>
              <p className="mt-5 mb-7 max-w-[480px] text-[17px] text-bloom-muted">
                Join a Bloom adventure, or book the bus for one of your own.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <span className="pointer-events-auto">
                  <FilledButton href="#book">Ride With Us</FilledButton>
                </span>
                <span className="pointer-events-auto">
                  <OutlineWhiteButton href="#book">Book The Bus</OutlineWhiteButton>
                </span>
              </div>
            </Container>
          </div>
        </section>

        {/* The Ride */}
        <section id="ride" className="bg-white pt-24 pb-16">
          <Container>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-[clamp(28px,4vw,56px)]">
              <h2
                className="font-jost text-[clamp(32px,4.2vw,56px)] tracking-[0.01em] text-bloom-navy uppercase leading-[1.04]"
                style={{ textWrap: "balance" }}
              >
                The ride is part
                <br />
                of the experience.
              </h2>
              <div className="pt-2.5">
                <p className="mb-4 max-w-[440px] text-[17px] text-bloom-body">
                  Music on. Snacks packed. Good people beside you.
                </p>
                <p className="max-w-[440px] text-[17px] text-bloom-body">
                  The Bloom Bus turns getting there into part of the story. We
                  use it for our own adventures, and you can book it for
                  yours.
                </p>
              </div>
            </div>
            <div className="mt-[72px] flex flex-wrap items-center justify-center">
              {polaroids.map((p, i) => (
                <div
                  key={i}
                  className={`aspect-[3/4] border-8 border-white bg-bloom-tint ${p.rotate} ${p.z} ${
                    i < polaroids.length - 1 ? "-mr-4" : ""
                  }`}
                  style={{
                    width: p.size,
                    boxShadow: p.big
                      ? "0 22px 46px rgba(24,34,51,0.26)"
                      : "0 18px 40px rgba(24,34,51,0.22)",
                    borderRadius: "2px",
                  }}
                >
                  {p.src ? (
                    <Image
                      src={p.src}
                      alt={p.alt}
                      className="h-full w-full object-cover"
                      style={{ borderRadius: "1px" }}
                    />
                  ) : (
                    <ImagePlaceholder label={p.alt} />
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Two paths */}
        <section className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))]">
          <div className="flex flex-col items-center justify-center bg-bloom-tint px-6 py-[clamp(36px,3.4vw,52px)] text-center sm:px-12">
            <div
              className="relative mx-auto mb-6 aspect-[4/5] w-[44%] min-w-[160px] overflow-hidden rounded-[3px] bg-bloom-tint-2"
              style={{ boxShadow: "0 20px 50px rgba(24,34,51,0.18)" }}
            >
              <Image src={p06} alt="Guests on a Bloom adventure" fill sizes="300px" className="object-cover" />
            </div>
            <h3 className="mb-4 font-jost text-[clamp(28px,3.4vw,42px)] tracking-[0.01em] text-bloom-navy uppercase leading-[1.04]">
              Come with us.
            </h3>
            <p className="mx-auto mb-[22px] max-w-[380px] text-base text-bloom-body">
              We find the good stuff. You get on the bus. Dance parties,
              retreats, concerts, wellness experiences, day trips and
              whatever else catches our attention.
            </p>
            <OutlineNavyButton href="#next">See Bloom Adventures</OutlineNavyButton>
          </div>
          <div className="flex flex-col items-center justify-center bg-bloom-accent px-6 py-[clamp(36px,3.4vw,52px)] text-center sm:px-12">
            <div
              className="relative mx-auto mb-6 aspect-[4/5] w-[44%] min-w-[160px] overflow-hidden rounded-[3px] bg-bloom-accent-hover"
              style={{ boxShadow: "0 20px 50px rgba(24,34,51,0.24)" }}
            >
              <Image src={p07} alt="The bus in the city at dusk" fill sizes="300px" className="object-cover" />
            </div>
            <h3 className="mb-4 font-jost text-[clamp(28px,3.4vw,42px)] tracking-[0.01em] text-white uppercase leading-[1.04]">
              Make it yours.
            </h3>
            <p className="mx-auto mb-[22px] max-w-[380px] text-base text-bloom-light">
              Got somewhere to go? Book the Bloom Bus for weddings, wine
              tours, parties, family adventures, concerts, retreats,
              corporate outings and private events.
            </p>
            <OnLightButton href="#book">Book The Bus</OnLightButton>
          </div>
        </section>

        {/* Come alone */}
        <section className="bg-bloom-navy text-[#f5f4f2]">
          <Container className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[clamp(28px,4vw,56px)]">
            <div className="py-8">
              <h2
                className="font-jost text-[clamp(28px,3.4vw,42px)] tracking-[0.01em] text-white uppercase leading-[1.02]"
                style={{ textWrap: "balance" }}
              >
                Come alone.
                <br />
                <span className="text-bloom-accent">Don&rsquo;t arrive alone.</span>
              </h2>
              <p className="mt-[18px] max-w-[390px] text-[16.5px] text-bloom-muted">
                <strong className="font-semibold text-white">
                  Bloom is about getting people together.
                </strong>{" "}
                That&rsquo;s it.
              </p>
            </div>
            <div
              className="relative h-[clamp(220px,26vw,300px)] w-full max-w-[440px] justify-self-end overflow-hidden rounded-[3px] bg-bloom-deep-navy"
              style={{ boxShadow: "0 20px 50px rgba(8,14,26,0.4)" }}
            >
              <Image src={p08} alt="Drop &ldquo;dont arrive alone&rdquo; from Drive" fill sizes="440px" className="object-cover" />
            </div>
          </Container>
        </section>

        {/* Book the bus */}
        <section id="book" className="bg-white pt-[100px] pb-[90px]">
          <Container>
            <div className="mb-[52px] max-w-[640px]">
              <span className="mb-2.5 block font-inter text-[12.5px] font-semibold tracking-[0.14em] text-bloom-accent uppercase">
                Book the bus
              </span>
              <h2 className="font-jost text-[clamp(32px,4.2vw,54px)] tracking-[0.01em] text-bloom-navy uppercase leading-[1.04]">
                Where are we going?
              </h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-[22px]">
              <div className="relative flex aspect-[3/4] items-end overflow-hidden rounded-[3px] bg-bloom-tint">
                <Image src={p10} alt="Private adventures" fill sizes="360px" className="object-cover" />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15,27,48,0) 12%, rgba(15,27,48,0.42) 48%, rgba(15,27,48,0.88) 100%)",
                  }}
                />
                <div className="relative z-[2] p-[26px_22px] pointer-events-none">
                  <span className="mb-2 block font-inter text-[12.5px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                    01
                  </span>
                  <h4 className="mb-2 font-jost text-[19px] tracking-[0.01em] text-white uppercase">
                    Private Adventures
                  </h4>
                  <p className="text-[13.5px] leading-[1.45] text-white/82">
                    Weddings, birthdays, concerts, girls&rsquo; trips, family
                    days and celebrations.
                  </p>
                </div>
              </div>
              <div className="relative flex aspect-[3/4] items-end overflow-hidden rounded-[3px] bg-bloom-navy">
                <div className="absolute inset-0">
                  <ImagePlaceholder label="inside the bus" tone="dark" />
                </div>
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15,27,48,0) 12%, rgba(15,27,48,0.42) 48%, rgba(15,27,48,0.88) 100%)",
                  }}
                />
                <div className="relative z-[2] p-[26px_22px] pointer-events-none">
                  <span className="mb-2 block font-inter text-[12.5px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                    02
                  </span>
                  <h4 className="mb-2 font-jost text-[19px] tracking-[0.01em] text-white uppercase">
                    Events + Venues
                  </h4>
                  <p className="text-[13.5px] leading-[1.45] text-white/82">
                    Make transportation part of your guest experience.
                  </p>
                </div>
              </div>
              <div className="relative flex aspect-[3/4] items-end overflow-hidden rounded-[3px] bg-bloom-accent">
                <Image src={corporate} alt="Corporate and community" fill sizes="360px" className="object-cover" />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15,27,48,0) 12%, rgba(15,27,48,0.42) 48%, rgba(15,27,48,0.88) 100%)",
                  }}
                />
                <div className="relative z-[2] p-[26px_22px] pointer-events-none">
                  <span className="mb-2 block font-inter text-[12.5px] font-semibold tracking-[0.14em] text-bloom-light uppercase">
                    03
                  </span>
                  <h4 className="mb-2 font-jost text-[19px] tracking-[0.01em] text-white uppercase">
                    Corporate + Community
                  </h4>
                  <p className="text-[13.5px] leading-[1.45] text-white/82">
                    Team outings, retreats, conferences and something
                    different from another dinner.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-14 text-center">
              <span className="mb-1.5 block font-inter text-[12.5px] font-semibold tracking-[0.14em] text-bloom-body uppercase">
                Something else in mind?
              </span>
              <h3 className="mb-[22px] font-jost text-[clamp(22px,2.6vw,30px)] tracking-[0.01em] text-bloom-navy uppercase">
                Good. We like unusual ideas.
              </h3>
              <FilledButton href="mailto:kerri@beauco.ca">
                Tell Us Where You Want To Go
              </FilledButton>
            </div>
          </Container>
        </section>

        {/* On board */}
        <section className="bg-bloom-tint py-[88px]">
          <Container>
            <div className="mb-10">
              <span className="mb-2.5 block font-inter text-[12.5px] font-semibold tracking-[0.14em] text-bloom-accent uppercase">
                On board
              </span>
              <h2 className="max-w-[640px] font-jost text-[clamp(28px,3.6vw,44px)] tracking-[0.01em] text-bloom-navy uppercase leading-[1.04]">
                What the Bloom Bus feels like.
              </h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,155px),1fr))] gap-[18px]">
              {onBoardTiles.map((tile, i) => (
                <div
                  key={i}
                  className="relative aspect-[3/4] overflow-hidden rounded-[3px] bg-bloom-tint-2"
                >
                  <Image src={tile.src} alt={tile.alt} fill sizes="240px" className="object-cover" />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(15,27,48,0) 55%, rgba(15,27,48,0.78) 100%)",
                    }}
                  />
                  <span className="pointer-events-none absolute inset-x-4 bottom-4 z-[2] font-jost text-[17px] leading-[1.2] font-semibold text-white uppercase">
                    {tile.caption}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-11 text-center">
              <div className="font-jost text-[15px] tracking-[0.04em] text-bloom-body uppercase">
                You just get on.
              </div>
              <div className="mt-1 font-jost text-[22px] font-semibold text-bloom-navy uppercase">
                We take it from there.
              </div>
            </div>
          </Container>
        </section>

        {/* Follow along */}
        <section id="next" className="bg-white py-24">
          <Container>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
              <div>
                <span className="mb-2.5 block font-inter text-[12.5px] font-semibold tracking-[0.14em] text-bloom-accent uppercase">
                  Follow along
                </span>
                <h2 className="font-jost text-[clamp(26px,3.2vw,38px)] tracking-[0.01em] text-bloom-navy uppercase leading-[1.04]">
                  Adventures get posted here first.
                </h2>
              </div>
              <a
                href="https://www.instagram.com/kerri_beauco/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2.5 font-jost text-sm font-semibold tracking-[0.03em] text-bloom-navy uppercase hover:text-bloom-accent"
              >
                <InstagramIcon />
                @kerri_beauco
              </a>
            </div>
            <behold-widget feed-id="gWGcfVYWdDdkl80JKfxG" style={{ display: "block" }} />
          </Container>
        </section>

        {/* Our story */}
        <section id="story" className="bg-bloom-tint py-24">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="font-jost text-[clamp(30px,4.2vw,52px)] tracking-[0.01em] text-bloom-navy uppercase leading-[1.04]">
                How we got here
              </h2>
            </div>
            <div className="mb-14 flex flex-wrap items-center justify-center gap-[18px]">
              {originCards.map((card) => (
                <Fragment key={card.label}>
                  <div
                    className="min-w-0 flex-1 basis-[240px] overflow-hidden rounded-[3px] bg-white"
                    style={{ boxShadow: "0 10px 30px rgba(24,34,51,0.08)" }}
                  >
                    <div className="relative aspect-[4/3] w-full bg-bloom-tint">
                      <Image src={card.src} alt={card.alt} fill sizes="300px" className="object-cover" />
                    </div>
                    <div className="p-[16px_18px] font-jost text-sm font-semibold tracking-[0.03em] text-bloom-navy uppercase">
                      {card.label}
                    </div>
                  </div>
                  <div className="flex-none text-[26px] leading-none text-bloom-accent">
                    &rarr;
                  </div>
                </Fragment>
              ))}
              <div
                className="min-w-0 flex-1 basis-[240px] overflow-hidden rounded-[3px] bg-white"
                style={{ boxShadow: "0 10px 30px rgba(24,34,51,0.08)" }}
              >
                <Image
                  src={kerriBus}
                  alt="The Bloom Bus"
                  className="aspect-[4/3] w-full object-cover"
                  style={{ backgroundColor: "#eef1f5" }}
                />
                <div className="p-[16px_18px] font-jost text-sm font-semibold tracking-[0.03em] text-bloom-navy uppercase">
                  The bus
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-[660px] text-center">
              <p className="text-[16.5px] text-bloom-body">
                Bloom started with movement &mdash; small gatherings, music,
                dancing, women getting out of their heads and back into
                themselves. Then came the road trips. Then we realized
                something: half the magic was happening on the way there. So
                we bought a bus.
              </p>
            </div>
          </Container>
        </section>

        {/* Why a bus */}
        <section className="bg-white pt-[100px] pb-20 text-center">
          <Container>
            <h2
              className="mx-auto max-w-[820px] font-jost text-[clamp(30px,4.6vw,58px)] tracking-[0.01em] text-bloom-navy uppercase leading-[1.04]"
              style={{ textWrap: "balance" }}
            >
              Why does a marketing
              <br />
              company own a bus?
            </h2>
            <p className="mx-auto mt-6 max-w-[560px] text-[17px] text-bloom-body">
              Because people do their best work when they have lives that
              make them feel alive.
            </p>
            <p className="mx-auto mt-3.5 max-w-[560px] text-[17px] text-bloom-body">
              Move. Connect. Play. Explore. Meet people. Try things. And
              apparently, we needed a bus.
            </p>
            <div className="mx-auto mt-10 max-w-[860px]">
              <Image src={busSide} alt="The Bloom Bus" className="h-auto w-full" />
            </div>
            <div className="mt-10 flex flex-col items-center gap-3">
              <span className="text-sm text-bloom-body">A community initiative by</span>
              <Image src={bcLogo} alt="Beau & Co. Marketing" className="h-[54px] w-auto" />
            </div>
          </Container>
        </section>

        {/* End CTA */}
        <section className="bg-bloom-accent py-[110px] pb-[100px] text-center text-bloom-light">
          <Container>
            <h2 className="font-jost text-[clamp(36px,6vw,72px)] tracking-[0.01em] text-white uppercase leading-[0.98]">
              So, where are
              <br />
              we going?
            </h2>
            <div className="mt-[38px] flex flex-wrap justify-center gap-3.5">
              <OnLightButton href="#book">Join An Adventure</OnLightButton>
              <OutlineWhiteButton href="mailto:kerri@beauco.ca">
                Book The Bloom Bus
              </OutlineWhiteButton>
            </div>
            <div className="mt-11 text-[14.5px] text-bloom-light">
              Hosting an event or venue?{" "}
              <a
                href="mailto:kerri@beauco.ca"
                className="font-semibold text-white underline underline-offset-[3px]"
              >
                Partner with Bloom &rarr;
              </a>
            </div>
          </Container>
        </section>
      </main>
      <BloomFooter />
      <Script src="https://w.behold.so/widget.js" type="module" strategy="afterInteractive" />
    </>
  );
}
