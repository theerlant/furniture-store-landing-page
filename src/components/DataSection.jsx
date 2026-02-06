import { useState, useEffect } from "react";
import axios from "axios";

export default function DataSection() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://lumoshive-api-furniture.vercel.app/api/data")
      .then((response) => setData(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      id="track-record"
      className="mx-6 lg:m-8 md:mx-18 lg:mx-32 -translate-y-18 grid grid-cols-2 md:grid-cols-4 gap-y-12 px-6 py-12 rounded-[20px] bg-primary text-white"
    >
      {data ? (
        <>
          <DataItem heading={data.experience} subtitle={"Year\nExperience"} />
          <DataItem heading={data.country} subtitle={"Opened in the country"} />
          <DataItem heading={data.sold} subtitle={"Furniture sold"} />
          <DataItem heading={data.variant} subtitle={"Variant Furniture"} />
        </>
      ) : null}
    </section>
  );
}

function DataItem({ heading, subtitle }) {
  return (
    <div
      className="whitespace-pre-line pr-5 nth-[2n]:pr-0 nth-[2n]:pl-5 md:nth-[2n]:px-5 flex flex-col justify-between items-center gap-1.5 relative text-center
    after:absolute after:top-0 after:right-0 after:h-full after:w-0.5
    // after:bg-gray-300
    nth-[2n]:after:hidden
    md:nth-[2n]:after:block
    md:nth-[4n]:after:hidden"
    >
      <h1 className="font-semibold text-[24px] lg:text-[40px] leading-[1.1]">
        {heading}
      </h1>
      <h2 className="font-normal text-[14px] lg:text-[20px] leading-[1.3] tracking-wide">
        {subtitle}
      </h2>
    </div>
  );
}
