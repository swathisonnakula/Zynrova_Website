import type React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"
import { ArrowRight, Code, Palette, Smartphone, TestTube, TrendingUp, Monitor } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8">
          <div className="grid lg:grid-cols-2 gap-1 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Industries <span className="text-[#FF6B6B]">We Serve</span>
              </h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Delivering innovative digital solutions across diverse industries and business types.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white hover:opacity-90 rounded-full px-8 py-6 text-base h-auto">
                  Discuss Your Project
                </Button>
              </Link>
            </div>

            <div className="relative mx-auto">
              <Image
                src="/industries.png"
                alt="Industries Illustration"
                width={500}
                height={500}
                className=" h-auto"
              />
            </div>
          </div>
        </div>
      </section>

       <section className="py-20 bg-[#11141A]">
        <div className="container mx-auto px-4 lg:px-8"> <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative mx-auto">
              <Image
                src="/industries-1.png"
                alt="Industry Solutions"
                width={500}
                height={500}
                className=" h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Solutions Built For Your Industry</h2>
              <p className="text-white/70 leading-relaxed">
                Every industry has unique challenges and goals. We design and develop digital solutions tailored to your
                specific needs, scalability, and business impact.
              </p>
            </div>
          </div></div>
      </section>

      {/* Solutions Built For Your Industry Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
         

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Code className="w-8 h-8" />}
              title="Web Development"
              description="Responsive and web applications built with modern technologies and optimal performance."
              linkColor="text-[#4A90E2]"
            />
            <ServiceCard
              icon={<Palette className="w-8 h-8" />}
              title="UI/UX Design"
              description="Engaging, intuitive, and platform user experiences built with strong engagement."
              linkColor="text-[#E91E63]"
            />
            <ServiceCard
              icon={<Smartphone className="w-8 h-8" />}
              title="Mobile App Development"
              description="Native iOS and cross-platform apps that deliver exceptional user experiences."
              linkColor="text-[#FF6B6B]"
            />
            <ServiceCard
              icon={<Monitor className="w-8 h-8" />}
              title="Graphic Design"
              description="Creative visual designs that strengthen your brand identity and message."
              linkColor="text-[#FFA726]"
            />
            <ServiceCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Digital Marketing"
              description="Data-driven marketing strategies that grow your online presence."
              linkColor="text-[#9C27B0]"
            />
            <ServiceCard
              icon={<TestTube className="w-8 h-8" />}
              title="Software Testing"
              description="Comprehensive testing to ensure quality, reliability, and security."
              linkColor="text-[#00BCD4]"
            />
          </div>
        </div>
      </section>

      {/* Industry-Focused Approach Section */}
      <section className="py-20  bg-[#11141A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Industry-<span className="text-[#FF6B6B]">Focused Approach</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <ApproachItem
                icon="🎯"
                title="Understanding industry workflows"
                description="We study your industry's unique operational flow to deliver tailored solutions."
              />
              <ApproachItem
                icon="🎨"
                title="Designing user-friendly experiences"
                description="Solutions designed with your end users in mind for maximum adoption."
              />
              <ApproachItem
                icon="🔧"
                title="Building scalable & secure systems"
                description="Future-proof architectures that grow with your business needs."
              />
              <ApproachItem
                icon="🤝"
                title="Continuous support & optimization"
                description="Ongoing maintenance to keep your systems performing at their best."
              />
            </div>

            <div className="relative mx-auto">
              <Image
                src="/industries-2.png"
                alt="Industry Approach"
                width={500}
                height={500}
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services We Deliver Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Services We Deliver <span className="text-[#FF6B6B]">Across Industries</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceIconCard icon={<Code className="w-10 h-10" />} title="Web Development" />
            <ServiceIconCard icon={<Palette className="w-10 h-10" />} title="UI/UX Design" />
            <ServiceIconCard icon={<Smartphone className="w-10 h-10" />} title="Mobile App Development" />
            <ServiceIconCard icon={<Monitor className="w-10 h-10" />} title="Graphic Design" />
            <ServiceIconCard icon={<TrendingUp className="w-10 h-10" />} title="Digital Marketing" />
            <ServiceIconCard icon={<TestTube className="w-10 h-10" />} title="Software Testing" />
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Clients Trust Us <span className="text-[#FF6B6B]">Across Industries</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <TrustCard
              icon="🌍"
              title="Experience across multiple domains"
              description="We've worked with diverse industries and understand various business models."
            />
            <TrustCard
              icon="💼"
              title="Business-first mindset"
              description="We balance technical excellence with real-world business goals and ROI."
            />
            <TrustCard
              icon="💬"
              title="Clear communication"
              description="Regular updates, transparent timelines, and no technical jargon."
            />
            <TrustCard
              icon="🤝"
              title="Long-term technology partner"
              description="We're not just developers—we're strategic partners invested in your success."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
  linkColor,
}: {
  icon: React.ReactNode
  title: string
  description: string
  linkColor: string
}) {
  return (
    <Card className="bg-card/50 border-white/10 p-6 hover:border-white/20 transition-all group">
      <div className="bg-white/5 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/60 mb-4 leading-relaxed text-sm">{description}</p>
      <Link href="#" className={`${linkColor} flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all`}>
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </Card>
  )
}

function ApproachItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function ServiceIconCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <Card className="bg-card/50 border-white/10 p-8 hover:border-white/20 transition-all text-center">
      <div className="flex justify-center mb-4 text-white">{icon}</div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </Card>
  )
}

function TrustCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <Card className="bg-card/50 border-white/10 p-6 hover:border-white/20 transition-all">
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-white/60 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  )
}
