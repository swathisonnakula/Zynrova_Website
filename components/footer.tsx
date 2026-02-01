import Link from "next/link"
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div> */}
              <div className="flex flex-col">
                 <Image
                                  src="/logo-1.png"
                                  alt="VR Character"
                                  width={200}
                                  height={200}
                                  className=" h-auto"
                                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Building reliable digital solutions for modern businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-white/60 hover:text-[#FF6B6B] text-sm transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-[#FF6B6B] text-sm transition-colors">
                  Web development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-[#FF6B6B] text-sm transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-[#FF6B6B] text-sm transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/60 hover:text-[#FF6B6B] text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-[#FF6B6B] text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-[#FF6B6B] text-sm transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-[#FF6B6B] text-sm transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">QUICK CONTACT</h3>
            <div className="flex gap-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF6B6B] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF6B6B] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF6B6B] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF6B6B] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm text-center">© 2026 Zynrova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
