import { Suspense } from "react";
import FilterItemDropdown from "./dropdown";
import { sorting } from "@/lib/constants";
import Link from "next/link";

function FilterItem({ item }: { item: any }) {
  return (
    <li className="mt-2 flex text-xs lg:text-sm text-black dark:text-white">
      <Link
        className="w-full hover:underline hover:underline-offset-4"
        href={`/products/${item.slug}`}
      >
        {item.title}
      </Link>
    </li>
  );
}

function FilterItemList({ list }: { list: typeof sorting }) {
  return (
    <>
      {list.map((item, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export default function FilterList({
  list,
  title,
}: {
  list: any;
  title: string;
}) {
  return (
    <>
      <nav>
        {title ? (
          <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">
            {title}
          </h3>
        ) : null}
        <ul className="hidden md:block">
          <Suspense fallback={null}>
            <FilterItemList list={list} />
          </Suspense>
        </ul>
        <ul className="md:hidden">
          <Suspense fallback={null}>
            <FilterItemDropdown list={list} title={title}/>
          </Suspense>
        </ul>
      </nav>
    </>
  );
}
