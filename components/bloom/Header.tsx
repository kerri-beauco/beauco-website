import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/p01.png";
import Container from "@/components/Container";

export default function BloomHeader() {
  return (
    <header className="relative z-30 border-b border-[rgba(24,34,51,0.13)] bg-white">
      <Container className="flex flex-wrap items-center justify-between gap-5 py-[18px]">
        <div className="flex items-center gap-[18px]">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[13px] font-semibold text-bloom-body hover:text-bloom-accent"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Beau &amp; Co.
          </Link>
          <Link href="#top">
            <Image src={logo} alt="Bloom Bus" className="h-[34px] w-auto" priority />
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 font-jost text-[13.5px] font-medium tracking-[0.02em] text-bloom-ink uppercase sm:gap-x-5 lg:gap-x-6">
          <Link href="#ride">The Ride</Link>
          <Link href="#book">Book The Bus</Link>
          <Link href="#next">Follow Along</Link>
          <Link href="#story">Our Story</Link>
        </nav>
        <div className="flex items-center gap-3.5 whitespace-nowrap">
          <Link
            href="#book"
            className="inline-flex items-center gap-2.5 rounded-[3px] border-2 border-bloom-navy bg-bloom-navy px-[18px] py-[11px] font-jost text-[13px] font-semibold tracking-[0.03em] text-white uppercase transition-colors duration-[180ms] hover:border-bloom-deep-navy hover:bg-bloom-deep-navy"
          >
            Book The Bus
          </Link>
        </div>
      </Container>
    </header>
  );
}
