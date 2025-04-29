import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link href="/sign-up" className={buttonVariants({ variant: "default" })}>
        Get Started
      </Link>

      <div className="flex gap-3">
        <Link href="/home">Home</Link>
        <Link href="/sign-in">Sign-in</Link>
        <Link href="/sign-up">Sign-up</Link>
      </div>
    </div>
  );
}
