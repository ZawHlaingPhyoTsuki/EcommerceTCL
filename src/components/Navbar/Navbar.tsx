"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import CartBtn from "./CartBtn";
import AvatarSquare from "./AvatarSquare";
import { authClient } from "@/lib/auth-client";
import { UserDropDown } from "./UserDropDown";

export function Navbar() {
  const { data: session } = authClient.useSession();
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", href: "/products" },
    { name: "Electronics", href: "/products/electronics" },
    { name: "Clothing", href: "/products/clothing" },
    { name: "Home", href: "/products/home" },
  ];

  return (
    <header className="w-full backdrop-blur bg-neutral-50 text-black dark:bg-neutral-900 dark:text-white mb-2">
      <div className="w-full flex h-16 items-center justify-between mx-auto px-4">
        {/* Mobile menu button and logo (visible on xl screens) */}
        <div className="w-full flex justify-between items-center md:hidden">
          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] flex flex-col gap-6 pt-6 px-4"
            >
              <DialogTitle>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <span className="text-primary text-sm">SHOP NAME</span>
                </Link>
              </DialogTitle>
              <DialogDescription className="relative">
                <Input
                  placeholder="Search for products ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </DialogDescription>
              <nav className="grid gap-1">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                      className: "justify-start font-semibold tracking-wider",
                    })}
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:hidden"
          >
            <AvatarSquare
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              fallback="ZH"
              title="SHOP NAME"
            />
          </Link>

          {/* Cart button */}
          <CartBtn />
        </div>

        {/* Logo and categories (visible on small screens and up) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <AvatarSquare
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              fallback="ZH"
              title="SHOP NAME"
            />
          </Link>

          {/* Categories */}
          <nav className="hidden md:flex items-center gap-4 pr-4 dark:text-neutral-300/80">
            {categories.slice(0, 3).map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm transition-colors duration-200 hover:text-neutral-500 dark:hover:text-primary"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Search bar (visible on medium screens and up) */}
        <div className="w-1/3 hidden md:flex flex-1 items-center justify-end">
          <div className="relative w-full max-w-[320px]">
            <Input
              placeholder="Search for products..."
              className="pr-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Cart button */}
        <div className="w-1/3 hidden md:flex items-center gap-2 justify-end">
          <CartBtn />
          {session ? <UserDropDown user={session.user} /> : null}
        </div>
      </div>
    </header>
  );
}
