import { RiArrowRightLongLine } from "@remixicon/react";
import { RiArrowRightLine } from "@remixicon/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function CategorySection() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://lumoshive-api-furniture.vercel.app/api/category")
      .then((response) => setData(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      id="category"
      className="relative py-12 lg:p-8 md:px-18 lg:px-32 block lg:flex *:shrink-0 overflow-x-hidden lg:overflow-x-auto"
    >
      <div className="p-6 pb-2 lg:p-0 lg:pr-8 grid grid-cols-[auto_1fr] lg:grid-cols-1 gap-6 w-full lg:w-72 items-center">
        <h1 className="font-semibold text-2xl lg:text-[40px]">
          New In
          <br />
          Store Now
        </h1>
        <p className="text-balance text-sm lg:text-base">
          Get the latest items immediately with promo prices
        </p>
        <a
          href="#category"
          className="hidden lg:flex flex-row gap-2 font-medium text-base tracking-wide"
        >
          <span className="underline">Check All</span>
          <RiArrowRightLongLine />
        </a>
      </div>
      <div className="flex gap-6 p-6 lg:p-0 *:shrink-0 min-w-screen lg:min-w-0 overflow-x-auto lg:overflow-x-visible text-white">
        {data?.category?.map((v, i) => (
          <CategoryItem title={v.title} imageSrc={v.image} />
        ))}
      </div>
    </section>
  );
}

function CategoryItem({ title, imageSrc }) {
  return (
    <div className="relative aspect-1.4 w-50 lg:w-60 xl:w-70 rounded-lg overflow-hidden hover:scale-102 transition-transform">
      <img src={imageSrc} className="h-full object-cover" />
      <span className="absolute left-0 right-0 bottom-6 text-center text-lg font-semibold">
        {title}
      </span>
    </div>
  );
}
