import { Hero } from "@/components/Hero";
import { Snapshot } from "@/components/Snapshot";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { Philosophy } from "@/components/Philosophy";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Snapshot />
      <Work />
      <Experience />
      <Stack />
      <Philosophy />
      <About />
      <Contact />
    </>
  );
}
