import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);
  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) px-4">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
        <div className="h-full w-full basis-full lg:basis-4/6">
          <Suspense
            fallback={
              <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
            }
          >
            {/* <Gallery
              images={product.images.slice(0, 5).map((image: Image) => ({
                src: image.url,
                altText: image.altText,
              }))}
            /> */}
            <div className="bg-neutral-500 w-full min-h-screen"></div>
          </Suspense>
        </div>

        <div className="basis-full lg:basis-2/6">
          <Suspense fallback={null}>
            {/* <ProductDescription product={product} /> */}
            <div className="bg-neutral-600 w-full min-h-screen">
                <h1>{slug}</h1>
            </div>
          </Suspense>
        </div>
      </div>
      {/* <RelatedProducts id={product.id} /> */}
    </div>
  );
}
