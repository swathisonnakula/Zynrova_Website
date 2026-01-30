import type React from "react"
import { Card } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"
import { ArrowRight, Code, Palette, Smartphone, TestTube, TrendingUp, Monitor } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Our <span className="text-[#FF6B6B]">Services</span>
              </h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                We deliver end-to-end software and digital solutions designed to help businesses scale and succeed.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/services.png"
                alt="Services Illustration"
                width={500}
                height={500}
                className=" h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Code className="w-8 h-8" />}
              title="Web Development"
              description="Responsive and web applications built with modern technologies and optimal performance."
              linkColor="text-[#4A90E2]"
              bgColor="bg-[#1E3A5F]"
            />
            <ServiceCard
              icon={<Palette className="w-8 h-8" />}
              title="UI/UX Design"
              description="Engaging, intuitive, and platform user experiences built with strong engagement."
              linkColor="text-[#E91E63]"
              bgColor="bg-[#4A1942]"
            />
            <ServiceCard
              icon={<Smartphone className="w-8 h-8" />}
              title="Mobile App Development"
              description="Native iOS and cross-platform apps that deliver exceptional user experiences at all scales."
              linkColor="text-[#FF6B6B]"
              bgColor="bg-[#3D1F1F]"
            />
            <ServiceCard
              icon={<Monitor className="w-8 h-8" />}
              title="Graphic Design"
              description="Creative visual designs that strengthen your brand identity and message."
              linkColor="text-[#FFA726]"
              bgColor="bg-[#3D2A1F]"
            />
            <ServiceCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Digital Marketing"
              description="Data-driven marketing strategies that grow your online presence and reach."
              linkColor="text-[#9C27B0]"
              bgColor="bg-[#2D1B3D]"
            />
            <ServiceCard
              icon={<TestTube className="w-8 h-8" />}
              title="Software Testing"
              description="Comprehensive testing to ensure quality, reliability, and security."
              linkColor="text-[#00BCD4]"
              bgColor="bg-[#1F2F3D]"
            />
          </div>
        </div>
      </section>

      {/* Built For Performance Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built For Performance,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FFA726]">
                Scalability & Growth
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <FeatureCard
              icon="⚡"
              title="Modern Tech Stack"
              description="Latest tools and frameworks for optimal performance"
            />
            <FeatureCard
              icon="👨‍💼"
              title="Dedicated Project Management"
              description="Your team of professionals for your project"
            />
            <FeatureCard icon="🚀" title="Post-Launch Support" description="Ongoing maintenance and optimization" />
            <FeatureCard
              icon="🎯"
              title="Agile Development Process"
              description="Flexible and iterative approach to delivery"
            />
            <FeatureCard
              icon="💬"
              title="Transparent Communication"
              description="Regular updates and clear timelines"
            />
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Work <span className="text-[#FF6B6B]">Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Requirement Analysis"
              description="Understanding your needs and objectives"
            />
            <ProcessStep
              number="02"
              title="Design & Development"
              description="Building your solution with best practices"
            />
            <ProcessStep number="03" title="Testing & Deployment" description="Ensuring quality and smooth launch" />
            <ProcessStep
              number="04"
              title="Support & Optimization"
              description="Continuous improvement and maintenance"
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Solutions For <span className="text-[#FF6B6B]">Every Industry</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndustryCard icon="🚀" title="Startups" description="All-in-one platforms for early workflows" />
            <IndustryCard icon="🛒" title="E-Commerce" description="Online stores and marketplaces" />
            <IndustryCard icon="🏥" title="Healthcare" description="Digital portals and health management systems" />
            <IndustryCard icon="🎓" title="Education" description="E-learning platforms and LMS solutions" />
            <IndustryCard icon="💰" title="Finance" description="Fintech applications and payment systems" />
            <IndustryCard icon="⚙️" title="Custom Solutions" description="Tailored software for unique business needs" />
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
  bgColor,
}: {
  icon: React.ReactNode
  title: string
  description: string
  linkColor: string
  bgColor: string
}) {
  return (
    <Card className={`${bgColor} border-white/10 p-6 hover:border-white/20 transition-all group`}>
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

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <Card className="bg-card/50 border-white/10 p-6 hover:border-white/20 transition-all text-center">
      <div className="flex gap-6"> <div className="text-4xl mb-4">{icon}</div>
     <div className="text-left">
      <h3 className="text-base font-bold text-white mb-2">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p></div></div>
    </Card>
  )
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
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
  )
}

function IndustryCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <Card className="bg-card/50 border-white/10 p-6 hover:border-white/20 transition-all">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </Card>
  )
}
