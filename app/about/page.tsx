import type React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import {
  Code,
  Palette,
  Smartphone,
  TestTube,
  TrendingUp,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95">
        <div className="absolute inset-0 overflow-hidden ">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                About Zynrova{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E]">
                  Software Solutions
                </span>
              </h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                A technology-driven startup focused on building reliable,
                scalable, and user-friendly digital solutions.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white hover:opacity-90 rounded-full px-8 py-6 text-base h-auto">
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="relative mx-auto">
              <Image
                src="/about-1.png"
                alt="About Illustration"
                width={500}
                height={500}
                className=" h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-[#11141A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/about-2.png"
                alt="Team Collaboration"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Who We Are
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Zynrova Software Solutions is an IT services company delivering
                innovative digital products for startups, small & medium
                businesses, and enterprises.
              </p>
              <p className="text-white/70 mb-6 leading-relaxed">
                We focus on clarity, quality, and long-term partnerships—helping
                businesses leverage technology without complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-white/10 p-8 hover:border-white/20 transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] flex items-center justify-center mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/70 leading-relaxed">
                To deliver reliable digital solutions that help businesses grow
                and operate efficiently.
              </p>
            </Card>

            <Card className="bg-card/50 border-white/10 p-8 hover:border-white/20 transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7B2CBF] to-[#9D4EDD] flex items-center justify-center mb-6">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To become a trusted global technology partner known for quality,
                transparency, and innovation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#11141A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core <span className="text-[#FF6B6B]">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <ValueCard
              icon="/integrity.png"
              title="Integrity"
              description="Transparent communication and trusted delivery"
            />
            <ValueCard
              icon="/quality.png"
              title="Quality"
              description="High standards in design, development, and testing"
            />
            <ValueCard
              icon="/focus.png"
              title="Client Focus"
              description="Prioritizing our clients' and business needs"
            />
            <ValueCard
              icon="/reliability.png"
              title="Reliability"
              description="Dependable and long-term partnership"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Zynrova Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 lg:px-8 py-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-[#FF6B6B]">Zynrova?</span>
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Zynrova is a technology-driven software company committed to
                delivering scalable, secure, and high-quality digital products.
                We partner with startups, small and medium businesses, and
                enterprises to design and develop products that align with their
                vision and market needs.
              </p>
              <p className="text-white/70 mb-8 leading-relaxed">
                Our team follows a clear-cut and agile approach, combining
                modern technologies with user-centric design. With transparent
                communication, timely delivery, and long-term support, Zynrova
                focuses on building solutions that are future-ready and built to
                last.
              </p>
            </div>

            <div className="relative mx-auto">
              <Image
                src="/about-3.png"
                alt="Why Choose Us"
                width={500}
                height={500}
                className=" h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-[#11141A]">
        <div className="container mx-auto px-4 lg:px-8 py-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#FF6B6B]">Expertise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExpertiseCard
              icon={<Code className="w-8 h-8" />}
              title="Web Development"
            />
            <ExpertiseCard
              icon={<Palette className="w-8 h-8" />}
              title="UI/UX Design"
            />
            <ExpertiseCard
              icon={<Smartphone className="w-8 h-8" />}
              title="Mobile App Development"
            />
            <ExpertiseCard
              icon={<Monitor className="w-8 h-8" />}
              title="Graphic Design"
            />
            <ExpertiseCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Digital Marketing"
            />
            <ExpertiseCard
              icon={<TestTube className="w-8 h-8" />}
              title="Software Testing"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-card/50 border-white/10 p-6 hover:border-white/20 transition-all text-center">
      {/* <div className="bg-white/5 w-18 h-18 rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-white/10 transition-colors p-3"> */}
        <div className="text-4xl mx-auto">
          {" "}
          <Image
            src={icon}
            alt="Team Collaboration"
            width={100}
            height={100}
            className=" h-auto"
          />
        </div>
      {/* </div> */}
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}

function ExpertiseCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <Card className="bg-card/50 border-white/10 p-6 hover:border-white/20 transition-all">
      <div className="bg-white/5 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </Card>
  );
}
