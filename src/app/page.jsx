import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Solution from "@/components/Solution";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
  return (
    <section className="px-24">
      <Navbar />
      <Hero />
      <Why />
      <Solution />
      <Project />
    </section>
  );
}
