import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function CartBtn() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <ShoppingCart className="!w-[15px] !h-[15px]" />
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
  );
}
