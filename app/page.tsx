import type React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Palette,
  Smartphone,
  TestTube,
  TrendingUp,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95"
        style={{ backgroundImage: "url('/home-2.png')", backgroundSize: "cover" }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                Building Reliable Digital Solutions For{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E]">
                  Modern Businesses
                </span>
              </h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                We help startups, small businesses, and enterprises design,
                develop, and scale digital products with agility and world-class
                performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white hover:opacity-90 rounded-full px-8 py-6 text-base h-auto">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base h-auto bg-transparent"
                  >
                    View Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/home-1.png"
                  alt="VR Character"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10  bg-[#11141A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance leading-normal">
              Trusted By Startups, Growing{" "}
              <span className="text-[#FF6B6B]">
                Businesses, And Enterprise Teams
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#FF6B6B] mb-2">
                50+
              </div>
              <p className="text-white/60">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#FF6B6B] mb-2">
                3+
              </div>
              <p className="text-white/60">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#FF6B6B] mb-2">
                100%
              </div>
              <p className="text-white/60">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              End-to-end software solutions tailored to your business needs.{" "}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={"/web-dev.png"}
              title="Web Development"
              description="Custom websites and web applications built with modern technologies for optimal performance."
              linkColor="text-[#4A90E2]"
            />
            <ServiceCard
              icon={"ui-ux.png"}
              title="UI/UX Design"
              description="Beautiful, intuitive interfaces that enhance user experience and drive engagement."
              linkColor="text-[#E91E63]"
            />
            <ServiceCard
              icon={"app-dev.png"}
              title="Mobile App Development"
              description="Native and cross-platform mobile apps that deliver seamless experiences."
              linkColor="text-[#FF6B6B]"
            />
            <ServiceCard
              icon={"graphic.png"}
              title="Graphic Design"
              description="Eye-catching visual designs that strengthen your brand identity and message."
              linkColor="text-[#FFA726]"
            />
            <ServiceCard
              icon={"digital-marketing.png"}
              title="Digital Marketing"
              description="Strategic marketing campaigns that grow your online presence and reach."
              linkColor="text-[#9C27B0]"
            />
            <ServiceCard
              icon={"testing.png"}
              title="Software Testing"
              description="Comprehensive testing to ensure quality, reliability, and security."
              linkColor="text-[#00BCD4]"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20  bg-[#11141A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Zynrova{" "}
                <span className="text-[#FF6B6B]">Software Solutions</span>
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Zynrova Software Solutions is a technology services company
                focused on building reliable, scalable, and user-friendly
                digital products.
              </p>
              <p className="text-white/70 mb-6 leading-relaxed">
                We partner with startups, growing businesses, and enterprises to
                transform ideas into well-designed, high-performance solutions.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C853] mt-1 shrink-0" />
                  <p className="text-white/80">Client-first approach</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C853] mt-1 shrink-0" />
                  <p className="text-white/80">Focus on clarity & quality</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C853] mt-1 shrink-0" />
                  <p className="text-white/80">Long-term technology partner</p>
                </div>
              </div>
            </div>
            <div className="relative mx-auto">
              <Image
                src="/about-4.png"
                alt="Team Working"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zynrova Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 ">
              Why Businesses Choose{" "}
            </h2>
            <h2 className="ext-4xl md:text-5xl font-bold text-[#FF6B6B] mb-4">
              Zynrova
            </h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            <FeatureCard
              icon="solutions-1.png"
              title="Business-focused decisions"
              description="We align our tech solutions with your business goals."
            />
            <FeatureCard
              icon="communication.png"
              title="Clear & simple communication"
              description="No jargon—just transparent updates and clear timelines."
            />
            <FeatureCard
              icon="dev-team.png"
              title="Experienced design & development team"
              description="Skilled professionals with proven track records."
            />
            <FeatureCard
              icon="support.png"
              title="Flexible support & maintenance"
              description="Ongoing support to keep your systems performing at their best."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20  bg-[#11141A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Simple &{" "}
              <span className="text-[#FF6B6B]">Proven Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Requirement & Planning"
              description="Understanding your needs and goals"
            />
            <ProcessStep
              number="02"
              title="Design & Development"
              description="Building your digital solution"
            />
            <ProcessStep
              number="03"
              title="Testing & Launch"
              description="Ensuring quality before going live"
            />
            <ProcessStep
              number="04"
              title="Support & Scale"
              description="Continuous improvements and support"
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Solutions For{" "}
              <span className="text-[#FF6B6B]">Every Industry</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndustryCard
              icon="startup.png"
              title="Startups"
              description="AI that improves with every workflow."
            />
            <IndustryCard
              icon="e-commerce.png"
              title="E-Commerce"
              description="Online stores and marketplaces."
            />
            <IndustryCard
              icon="healthcare.png"
              title="Healthcare"
              description="Patient portals and health management systems."
            />
            <IndustryCard
              icon="education.png"
              title="Education"
              description="E-learning platforms and LMS solutions"
            />
            <IndustryCard
              icon="finance.png"
              title="Finance"
              description="Fintech applications and payment systems"
            />
            <IndustryCard
              icon="solutions.png"
              title="Custom Solutions"
              description="Tailored software for unique business needs"
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20  bg-[#11141A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technologies <span className="text-[#FF6B6B]">We Work With</span>
            </h2>
            <p className="text-white/60">
              Modern tech stack to build cutting-edge products
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <TechCard name="React.js" icon="react.png" />
            <TechCard name="Node.js" icon="node.png" />
            <TechCard name="Flutter" icon="flutter.png" />
            <TechCard name="WordPress" icon="wordpress.png" />
            <TechCard name="AWS" icon="aws.png" />
            <TechCard name="Figma" icon="figma.png" />
            <TechCard name="Google Analytics" icon="analytics.png" />
            <TechCard name="MongoDB" icon="mongoDb.png" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  linkColor,
}: {
  icon:  string;
  title: string;
  description: string;
  linkColor: string;
}) {
  return (
    <Card className="bg-card/50 border-white/10 p-6 hover:border-white/20 transition-all group">
      <div className="bg-white/5 w-20 h-20 rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-white/10 transition-colors p-3">
        {/* {icon} */}
         <Image
                  // src="/web-dev.png"
                  src={icon}
                  alt="VR Character"
                  width={600}
                  height={600}
                  className=" h-auto"
                />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/60 mb-4 leading-relaxed text-sm">
        {description}
      </p>
      <Link
        href="/services"
        className={`${linkColor} flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all`}
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </Card>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-card/50 border-white/10 p-6 hover:border-white/20 transition-all text-center flex-row items-center">
      <div className="bg-white/5 w-16 h-16 rounded-lg flex items-center justify-center text-white group-hover:bg-white/10 transition-colors p-3">
      <div className="text-4xl"><Image
                  src={icon}
                  alt="VR Character"
                  width={60}
                  height={60}
                  className=" h-auto"
                /></div></div>
      <div className="text-left">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] flex items-center justify-center mx-auto">
          <span className="text-white font-bold text-2xl">{number}</span>
        </div>
        {number !== "04" && (
          <div className="hidden lg:block absolute top-1/2 left-[60%] w-full h-0.5 border-t-2 border-dashed border-white/20" />
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/60 text-sm">{description}</p>
    </div>
  );
}

function IndustryCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-card/50 border-white/10 p-6 hover:border-white/20 transition-all">
      <div className="text-4xl mb-4"> <Image
                  src={icon}
                  alt="VR Character"
                  width={60}
                  height={60}
                  className=" h-auto"
                /></div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}

function TechCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-card/30 border border-white/10 rounded-lg hover:border-white/20 transition-all">
      <div className="text-4xl mb-3">
        <Image
                  src={icon}
                  alt="VR Character"
                  width={60}
                  height={60}
                  className=" h-auto"
                />
      </div>
      <p className="text-white text-sm font-medium text-center">{name}</p>
    </div>
  );
}
