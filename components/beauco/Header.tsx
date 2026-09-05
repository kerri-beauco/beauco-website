import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/p18.png";
import Container from "@/components/Container";

export default function BeaucoHeader() {
  return (
    <header className="relative z-30 bg-bc-canvas">
      <Container className="flex flex-wrap items-center justify-between gap-6 py-[22px]">
        <Link href="#top">
          <Image src={logo} alt="Beau & Co. Marketing" className="h-[84px] w-auto" priority />
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 font-jost text-sm font-medium tracking-[0.04em] text-bc-ink uppercase sm:gap-x-6 lg:gap-x-8">
          <Link href="#work">About Us</Link>
          <Link href="/bloom">Bloom</Link>
          <Link href="#talk">Contact</Link>
          <Link
            href="#talk"
            className="inline-flex items-center gap-2 rounded-[2px] bg-bc-accent px-5 py-3 font-semibold tracking-[0.05em] text-white transition-colors duration-[180ms] hover:bg-bc-accent-hover hover:text-white"
          >
            Let&rsquo;s Talk
          </Link>
        </nav>
      </Container>
    </header>
  );
}
