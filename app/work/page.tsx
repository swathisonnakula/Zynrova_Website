"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const categories = ["All", "Web development", "Digital marketing", "Mobile apps", "Graphic design", "UI UX design"]

const projects = [
  {
    id: 1,
    title: "Saas Landing Page",
    category: "Web development",
    image: "/project-saas-landing.jpg",
    description: "Modern SaaS landing page with engaging animations",
  },
  {
    id: 2,
    title: "Aiorix - AI Automation",
    category: "Web development",
    image: "/project-ai-automation.jpg",
    description: "AI automation platform interface",
  },
  {
    id: 3,
    title: "Real Estate",
    category: "Web development",
    image: "/project-real-estate.jpg",
    description: "Real estate property listing platform",
  },
  {
    id: 4,
    title: "Smart Travel Planner App",
    category: "Mobile apps",
    image: "/project-travel-app.jpg",
    description: "Travel planning mobile application",
  },
  {
    id: 5,
    title: "Pet care",
    category: "Mobile apps",
    image: "/project-pet-care.jpg",
    description: "Pet care services mobile app",
  },
  {
    id: 6,
    title: "WonderScape",
    category: "Web development",
    image: "/project-wonderscape.jpg",
    description: "Interactive travel discovery platform",
  },
]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Our <span className="text-[#FF6B6B]">Work</span>
              </h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Real solutions. Real impact. Designed and built for growth.
              </p>
            </div>

            <div className="relative mx-auto">
              <Image
                src="/work.png"
                alt="Work Illustration"
                width={500}
                height={500}
                className=" h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white border-0 rounded-full"
                    : "bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative mx-auto">
              <Image
                src="/work-1.png"
                alt="Enterprise Platform"
                width={600}
                height={600}
                className=" h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise Management <span className="text-[#FF6B6B]">Platform</span>
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                A scalable enterprise solution designed to streamline operations across teams and systems. The platform
                helps businesses simplify complex workflows, improve team collaboration, data-driven decision-making,
                and long-term scalability.
              </p>
              <p className="text-white/70 mb-8 leading-relaxed">
                Built with performance and reliability in mind, the solution enhances productivity by enabling seamless
                collaboration, data-driven decision-making, and long-term scalability as business needs evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background/50 border-y border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Trusted By Startups, Growing <span className="text-[#FF6B6B]">Businesses,</span> And Enterprise Teams
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#FF6B6B] mb-2">50+</div>
              <p className="text-white/60">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#FF6B6B] mb-2">3+</div>
              <p className="text-white/60">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#FF6B6B] mb-2">100%</div>
              <p className="text-white/60">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

function ProjectCard({
  project,
}: { project: { title: string; category: string; image: string; description: string } }) {
  return (
    <Card className="bg-card/50 border-white/10 hover:border-white/20 transition-all group overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <p className="text-white/50 text-sm mb-2">{project.category}</p>
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <Link
          href="#"
          className="text-[#FF6B6B] flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
        >
          View Case Study <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Card>
  )
}
