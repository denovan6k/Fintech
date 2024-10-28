"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import img1 from "@/public/assets/upgrade-inc-logo-vector-removebg-preview 1.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const menuItems = [
  { name: "Personal Loan", href: "/personal-loan" },
  { name: "One Card", href: "/one-card" },
  { name: "Savings", href: "/savings" },
  { name: "Checking", href: "/checking" },
  { name: "Help", href: "/help" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 text-[#DCDCDC] lg:px-[150px] lg:pt-[30px]">
      <div>
        <Image
          src={img1}
          alt="Company logo"
          width={100}
          height={100}
          priority
        />
      </div>

      <ul className="hidden gap-4 md:flex">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="hover:text-white transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <Button
        variant="outline"
        className="hidden border-2 border-[#DCDCDC] text-white md:flex"
      >
        Sign up
      </Button>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="px-0 text-white md:hidden">
            <Menu className="h-[32px] w-[32px]" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[240px] bg-primary text-primary-foreground">
          {/* SheetTitle or VisuallyHidden for accessibility */}
          <SheetTitle>
            <VisuallyHidden.Root>Menu</VisuallyHidden.Root>
          </SheetTitle>
          
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-secondary-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="outline"
              className="border-2 border-[#DCDCDC] text-white"
            >
              Sign up
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
