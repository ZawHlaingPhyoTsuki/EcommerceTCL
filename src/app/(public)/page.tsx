// app/page.tsx

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12">
      {/* Hero Section */}
      <section className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Sell Your Products Locally, Reach Farther
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Empowering sellers from Tachileik & Shan State to reach customers
          across Myanmar.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/sign-up" className={buttonVariants({ size: "lg" })}>
            Get Started
          </Link>
          <Link
            href="/home"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-16 px-4">
        <div className="border rounded-lg p-6 shadow-sm text-center">
          <h3 className="font-semibold text-lg mb-2">Easy Registration</h3>
          <p className="text-sm text-muted-foreground">
            Sign up in minutes and start listing your products today.
          </p>
        </div>
        <div className="border rounded-lg p-6 shadow-sm text-center">
          <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
          <p className="text-sm text-muted-foreground">
            Safe and reliable payment options trusted by buyers and sellers.
          </p>
        </div>
        <div className="border rounded-lg p-6 shadow-sm text-center">
          <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
          <p className="text-sm text-muted-foreground">
            Efficient logistics network designed for local businesses.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center max-w-xl mx-auto mb-12">
        <h3 className="text-2xl font-bold mb-4">Ready to Start Selling?</h3>
        <p className="mb-6 text-muted-foreground">
          Join hundreds of local sellers who are already growing their business
          with us.
        </p>
        <Link
          href="/sign-up"
          className={buttonVariants({
            size: "lg",
            className: "w-full md:w-auto",
          })}
        >
          Become a Seller Today
        </Link>
      </section>

    </main>
  );
}
