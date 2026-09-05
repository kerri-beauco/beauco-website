import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/p01.png";
import Container from "@/components/Container";

export default function BloomFooter() {
  return (
    <footer className="bg-bloom-deep-navy py-14 pb-[34px] text-bloom-muted">
      <Container>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-8">
          <div>
            <Image
              src={logo}
              alt="Bloom Bus"
              className="h-10 w-auto brightness-0 invert opacity-95"
            />
          </div>
          <div>
            <h4 className="mb-3.5 font-jost text-[13px] font-semibold tracking-[0.05em] text-white uppercase">
              Explore
            </h4>
            <Link href="#ride" className="mb-2.5 block text-[14.5px]">
              The Ride
            </Link>
            <Link href="#book" className="mb-2.5 block text-[14.5px]">
              Book The Bus
            </Link>
            <Link href="#next" className="mb-2.5 block text-[14.5px]">
              Follow Along
            </Link>
            <Link href="#story" className="mb-2.5 block text-[14.5px]">
              Our Story
            </Link>
          </div>
          <div>
            <h4 className="mb-3.5 font-jost text-[13px] font-semibold tracking-[0.05em] text-white uppercase">
              Social
            </h4>
            <a
              href="https://www.instagram.com/kerri_beauco/"
              target="_blank"
              rel="noopener"
              className="mb-2.5 block text-[14.5px]"
            >
              Instagram
            </a>
            <a href="#" rel="noopener" className="mb-2.5 block text-[14.5px]">
              Facebook
            </a>
          </div>
          <div>
            <h4 className="mb-3.5 font-jost text-[13px] font-semibold tracking-[0.05em] text-white uppercase">
              Contact
            </h4>
            <a href="mailto:kerri@beauco.ca" className="mb-2.5 block text-[14.5px]">
              kerri@beauco.ca
            </a>
            <a href="tel:+14168340444" className="mb-2.5 block text-[14.5px]">
              416.834.0444
            </a>
            <span className="mb-2.5 block text-[14.5px]">Hamilton, ON</span>
          </div>
        </div>
        <div className="mt-11 flex flex-wrap justify-between gap-4 border-t border-[rgba(245,244,242,0.2)] pt-5 text-[12.5px]">
          <span>&copy; 2026 Bloom Bus &middot; a Beau &amp; Co. community initiative</span>
          <span>Site in progress &middot; page draft</span>
        </div>
      </Container>
    </footer>
  );
}
