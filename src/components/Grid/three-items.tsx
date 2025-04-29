import Link from "next/link";
import GridTileImage from "./tile";

interface Item {
  src: string;
  slug: string;
  title: string;
}

interface ThreeItemsGridComponent {
  item: Item;
  size: "full" | "half";
  priority?: boolean;
}

function ThreeItemsGridComponent({
  item,
  size,
  priority,
}: ThreeItemsGridComponent) {
  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.slug}`}
      >
        <GridTileImage
          src={item.src}
          fill
          sizes={
            size === "full"
              ? "(min-width: 768px) 66vw, 100vw"
              : "(min-width: 768px) 33vw, 100vw"
          }
          alt={item.title}
          priority={priority}
          label={{
            title: item.title as string,
            amount: "200",
            currencyCode: "฿",
          }}
        />
      </Link>
    </div>
  );
}

export default function ThreeItemsGrid() {
  const item = {
    title: "Shirt",
    src: "/t-shirt-1.avif",
    slug: "shirt",
  };

  return (
    <section className="mx-auto grid max-w-(--breakpoint-2xl) gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      <ThreeItemsGridComponent size="full" item={item} priority={true} />
      <ThreeItemsGridComponent size="half" item={item} priority={true} />
      <ThreeItemsGridComponent size="half" item={item} />
    </section>
  );
}
