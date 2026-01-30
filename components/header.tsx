"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Work", href: "/work" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <Image
                src="/logo-1.png"
                alt="VR Character"
                width={90}
                height={90}
                className=""
              />
            </div>
            <div className="flex flex-col"></div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-[#FF6B6B]",
                  pathname === item.href
                    ? "text-[#FF6B6B] font-medium"
                    : "text-white/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white hover:opacity-90 rounded-full px-6">
            Get A Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
