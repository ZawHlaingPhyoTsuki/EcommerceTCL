"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function FilterItemDropdown({
  list,
  title,
}: {
  list: any;
  title: string;
}) {
  return (
    <div className="relative max-w-[700px]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center justify-between gap-2 rounded-sm font-light text-sm w-full"
          >
            {title}
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        {/* here */}

        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
          {list.map((item: any) => (
            <DropdownMenuItem key={item}>{item.title}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
