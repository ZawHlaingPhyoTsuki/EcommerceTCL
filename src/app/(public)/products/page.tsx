import ProductGridItems from "@/components/Products/ProductGridItems";
import React from "react";

export default function Products() {
  const products = [
    {
      title: "Shirt",
      src: "/t-shirt-1.avif",
      slug: "shirt",
    },
    {
      title: "Shirt1",
      src: "/t-shirt-1.avif",
      slug: "shirt1",
    },
    {
      title: "Shirt2",
      src: "/t-shirt-1.avif",
      slug: "shirt2",
    },
    {
      title: "Shirt3",
      src: "/t-shirt-1.avif",
      slug: "shirt3",
    },
  ];

  return (
    <div className="mx-auto">
      {/* {products.length > 0 ? (
        <ul className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </ul>
      ) : null} */}
      <ul className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <ProductGridItems products={products} />
      </ul>
    </div>
  );
}
