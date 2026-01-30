"use client";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CTASection } from "@/components/cta-section";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

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
                Contact <span className="text-[#FF6B6B]">Us</span>
              </h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Let's talk about your idea, project, or partnership.
              </p>
            </div>

            <div className="relative mx-auto">
              <Image
                src="/contact.png"
                alt="Contact Illustration"
                width={400}
                height={400}
                className=" h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className=" bg-[#11141A] p-10 rounded-xl">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Get In Touch
              </h2>
              <form onSubmit={handleSubmit} className="mb-8">
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <Label htmlFor="fullName" className="text-white mb-2 block">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="bg-secondary border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-secondary border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="companyName"
                      className="text-white mb-2 block"
                    >
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      placeholder="Enter company name"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                      className="bg-secondary border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-white mb-2 block">
                      Service Interested In
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger className="bg-secondary border-white/10 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="mobile-development">
                          Mobile App Development
                        </SelectItem>
                        <SelectItem value="ui-ux-design">
                          UI/UX Design
                        </SelectItem>
                        <SelectItem value="digital-marketing">
                          Digital Marketing
                        </SelectItem>
                        <SelectItem value="graphic-design">
                          Graphic Design
                        </SelectItem>
                        <SelectItem value="software-testing">
                          Software Testing
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mb-8">
                  <Label htmlFor="message" className="text-white mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-secondary border-white/10 text-white placeholder:text-white/40 min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className=" bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white hover:opacity-90 rounded-full py-6 text-base h-auto px-6"
                >
                  Submit
                </Button>
              </form>
              {/* Why Choose Zynrova */}
              <div className="mt-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Why Choose <span className="text-[#FF6B6B]">Zynrova?</span>
                </h2>
                <div className="space-y-4 grid lg:grid-cols-2 gap-4 mb-8">
                  <BenefitItem text="Quick response time within 24 hours" />
                  <BenefitItem text="Free initial consultation and project estimate" />
                  <BenefitItem text="Experienced team of developers and designers" />
                  <BenefitItem text="Transparent communication throughout the project" />
                  <BenefitItem text="Long-term support and maintenance" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <ContactCard
              icon={<Mail className="w-8 h-8" />}
              title="Email"
              info="Sureshpadimi221@gmail.com"
            />
            <ContactCard
              icon={<Phone className="w-8 h-8" />}
              title="Phone"
              info="+91 9618344086"
            />
            <ContactCard
              icon={<MapPin className="w-8 h-8" />}
              title="Location"
              info="Hyderabad"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="w-6 h-6 text-[#00C853] mt-1 shrink-0" />
      <p className="text-white/80 text-lg">{text}</p>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  info,
}: {
  icon: React.ReactNode;
  title: string;
  info: string;
}) {
  return (
    <Card className="bg-card/50 border-white/10 p-8 hover:border-white/20 transition-all text-center">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] flex items-center justify-center mx-auto mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/60">{info}</p>
    </Card>
  );
}
