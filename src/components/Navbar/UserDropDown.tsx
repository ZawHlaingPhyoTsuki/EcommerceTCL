"use client";

import { LayoutDashboard, LogIn, LogOut, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AvatarSquare from "./AvatarSquare";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
// import { ModeToggle } from "./ModeToggle";
// import { ModeToggleDropdownItem } from "./ModeToggleDropdownItem";

export function UserDropDown() {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/home");
            router.refresh();
          },
        },
      });
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  if (isPending) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      {/* {!user && <ModeToggle />} */}

      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-lg select-none">
            <AvatarSquare
              src={user.image}
              alt={user.name}
              fallback={user.name[0].toUpperCase()}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-2" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/settings" className="flex items-center w-full">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard" className="flex items-center w-full">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </DropdownMenuItem>
            {/* <ModeToggleDropdownItem /> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <button
                onClick={handleSignOut}
                className="flex items-center w-full"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button asChild variant="default">
          <Link href="/sign-in" className="flex items-center gap-2">
            <LogIn className="h-4 w-4" />
            <span>Sign In</span>
          </Link>
        </Button>
      )}
    </div>
  );
}
