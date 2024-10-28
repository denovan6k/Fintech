"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const menuItems = [
  { name: "Personal Loan", href: "/" },
  { name: "One Card", href: "/about" },
  { name: "Savings", href: "/savings" },
  { name: "Checking", href: "/Checking" },
  { name: "Help", href: "/help" },
]

export default function MenuBar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="">
      
         
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-primary-foreground md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-primary text-primary-foreground">
              <div className="flex flex-col items-center text-base gap-4">
                <Button
                  variant="ghost"
                  className="mb-4 px-0 text-primary-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="py-2 hover:text-secondary-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                 <Button className='text-white border-2 border-[#DCDCDC] hidden md:flex'>
            Sign up
        </Button>
              </div>
            </SheetContent>
          </Sheet>
      
    </nav>
  )
}