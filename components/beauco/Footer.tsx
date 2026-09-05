import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/p18.png";
import Container from "@/components/Container";

export default function BeaucoFooter() {
  return (
    <footer className="bg-bc-black py-14 text-bc-muted pb-[34px]">
      <Container>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-8">
          <div>
            <Image
              src={logo}
              alt="Beau & Co. Marketing"
              className="h-[74px] w-auto brightness-0 invert opacity-95"
            />
          </div>
          <div>
            <h4 className="mb-3.5 font-jost text-[13px] font-semibold tracking-[0.06em] text-white uppercase">
              Navigation
            </h4>
            <Link href="#top" className="mb-2.5 block text-[14.5px]">
              Home
            </Link>
            <Link href="#work" className="mb-2.5 block text-[14.5px]">
              Marketing
            </Link>
            <Link href="/bloom" className="mb-2.5 block text-[14.5px]">
              Bloom
            </Link>
            <Link href="#talk" className="mb-2.5 block text-[14.5px]">
              Contact
            </Link>
          </div>
          <div>
            <h4 className="mb-3.5 font-jost text-[13px] font-semibold tracking-[0.06em] text-white uppercase">
              Social
            </h4>
            <a href="#" rel="noopener" className="mb-2.5 block text-[14.5px]">
              Facebook
            </a>
            <a
              href="https://www.instagram.com/kerri_beauco/"
              target="_blank"
              rel="noopener"
              className="mb-2.5 block text-[14.5px]"
            >
              Instagram
            </a>
            <a href="#" rel="noopener" className="mb-2.5 block text-[14.5px]">
              LinkedIn
            </a>
          </div>
          <div>
            <h4 className="mb-3.5 font-jost text-[13px] font-semibold tracking-[0.06em] text-white uppercase">
              Contact
            </h4>
            <a href="mailto:kerri@beauco.ca" className="mb-2.5 block text-[14.5px]">
              kerri@beauco.ca
            </a>
            <a href="tel:+14168340444" className="mb-2.5 block text-[14.5px]">
              Tel. 416.834.0444
            </a>
            <span className="mb-2.5 block text-[14.5px]">Hamilton, ON</span>
          </div>
        </div>
        <div className="mt-11 flex flex-wrap justify-between gap-4 border-t border-[rgba(232,228,226,0.16)] pt-5 text-[12.5px]">
          <span>&copy; 2026 Beau &amp; Co. Marketing</span>
          <span>Site in progress &middot; homepage draft</span>
        </div>
      </Container>
    </footer>
  );
}
