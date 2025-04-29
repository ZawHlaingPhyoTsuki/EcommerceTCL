"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, Search } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", href: "/products" },
    { name: "Electronics", href: "/products/electronics" },
    { name: "Clothing", href: "/products/clothing" },
    { name: "Home", href: "/products/home" },
  ];

  return (
    <header className="w-full backdrop-blur bg-neutral-50 text-black dark:bg-neutral-900 dark:text-white">
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
            <Avatar className="rounded-xl h-[35px] w-[35px]">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>ZH</AvatarFallback>
            </Avatar>
            <span className="text-primary text-sm">SHOP NAME</span>
          </Link>

          {/* Cart button */}
          <div className="flex items-center gap-2">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[100%]">
                <DrawerHeader>
                  <DrawerTitle className="">My Cart</DrawerTitle>
                  <DrawerDescription>Checkout your cart</DrawerDescription>
                </DrawerHeader>
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <ShoppingCart className="h-12 w-12 mb-4" />
                  <p>Your cart is empty</p>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        {/* Logo and categories (visible on small screens and up) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Avatar className="rounded-xl h-[35px] w-[35px]">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>ZH</AvatarFallback>
            </Avatar>
            <span className="hidden lg:block text-primary text-sm">
              SHOP NAME
            </span>
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
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-[100%]">
              <DrawerHeader>
                <DrawerTitle className="">My Cart</DrawerTitle>
                <DrawerDescription>Checkout your cart</DrawerDescription>
              </DrawerHeader>
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <ShoppingCart className="h-12 w-12 mb-4" />
                <p>Your cart is empty</p>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
