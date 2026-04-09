// app/loading.js
export default function Loading() {
  return (
    <div className="">
      <main className="">

        {/* Hero skeleton */}
        <div className="w-full h-[500px] bg-gray-200 animate-pulse" />

        {/* Category Section Skeleton */}
<div className="pt-10 bg-[#F5F5F5] lg:py-16">
  <main>
    <div className="flex flex-col lg:mx-page-x mx-page-x-mobile">
      
      {/* Title + arrows */}
      <div className="flex items-center justify-between">
        <div className="bg-gray-200 animate-pulse h-7 w-52 rounded" />
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 animate-pulse h-8 w-8 rounded-full" />
          <div className="bg-gray-200 animate-pulse h-8 w-8 rounded-full" />
        </div>
      </div>

      {/* Category cards — matches your grid-cols-2 / lg:flex layout */}
      <div className="grid grid-cols-2 lg:flex lg:justify-center gap-3 lg:gap-4 mt-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg h-34 flex-1 lg:flex lg:w-36 flex items-center justify-center bg-[#EDEDED] animate-pulse"
          >
            <div className="flex flex-col items-center justify-center gap-5">
              {/* Icon placeholder */}
              <div className="bg-gray-300 h-10 w-10 rounded-md" />
              {/* Label placeholder */}
              <div className="bg-gray-300 h-3 w-20 rounded" />
            </div>
          </div>
        ))}
      </div>

    </div>
  </main>
</div>

        {/* Product list skeleton */}
        <div className="px-6 my-8">
          {/* Tabs: New Arrival | Bestseller | Featured */}
          <div className="flex gap-6 mb-6">
            <div className="bg-gray-200 animate-pulse h-4 w-24 rounded" />
            <div className="bg-gray-200 animate-pulse h-4 w-20 rounded" />
            <div className="bg-gray-200 animate-pulse h-4 w-28 rounded" />
          </div>
          {/* Product cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl p-4 flex flex-col gap-3">
                {/* Heart icon */}
                <div className="self-end bg-gray-200 animate-pulse h-6 w-6 rounded-full" />
                {/* Product image */}
                <div className="bg-gray-200 animate-pulse h-44 w-full rounded-xl" />
                {/* Title */}
                <div className="bg-gray-200 animate-pulse h-3 w-4/5 rounded" />
                <div className="bg-gray-200 animate-pulse h-3 w-3/5 rounded" />
                {/* Price */}
                <div className="bg-gray-200 animate-pulse h-5 w-16 rounded mx-auto" />
                {/* Add to cart button */}
                <div className="bg-gray-200 animate-pulse h-11 w-full rounded-lg mt-1" />
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}