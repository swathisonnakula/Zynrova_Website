import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#7B2CBF] via-[#9D4EDD] to-[#C77DFF]">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl" />
      <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-purple-400/20 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Ready To Build Your Next Digital Product?
          </h2>
          <p className="text-white/90 text-lg mb-8">Let's discuss your ideas and turn them into reality.</p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white hover:opacity-90 rounded-full px-8 py-6 text-base h-auto">
              Let's Talk
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
