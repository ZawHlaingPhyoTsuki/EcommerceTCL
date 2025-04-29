import Link from "next/link";
import GridTileImage from "../Grid/tile";

export default function ProductGridItems({
  products,
}: {
  products: Array<{
    src: string;
    slug: string;
    title: string;
  }>;
}) {
  return (
    <>
      {products.map((product) => (
        <li
          className="aspect-square transition-opacity list-none animate-fadeIn"
          key={product.slug}
          style={{ animationDelay: "0.2s" }}
        >
          <Link
            className="relative inline-block h-full w-full"
            href={`/product/${product.slug}`}
            prefetch={true}
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: "200",
                currencyCode: "฿",
              }}
              src={product.src}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </li>
      ))}
    </>
  );
}
