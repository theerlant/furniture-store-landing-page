import { useState, useEffect } from "react";
import axios from "axios";

export default function HeaderSection() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://lumoshive-api-furniture.vercel.app/api/header")
      .then((response) => setData(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section
        id="header"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${data?.banner ? "transparent" : "black"} 90%, white ), url(${data?.banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
        className="text-white text-center px-12 md:px-25 lg:px-72 h-[110vh] "
      >
        <div className="h-screen w-full flex flex-col justify-center items-center gap-12">
          <h1 className="font-semibold text-2xl lg:text-5xl xl:text-[64px] leading-[1.2] text-center">
            {data?.title}
          </h1>
          <p className="px-0 xl:px-12 text-balance">{data?.description}</p>
          <button className="bg-white/30 border border-t-white/50 border-l-white/80 border-white/50 rounded-lg backdrop-blur-lg py-3 px-9 md:px-16 font-semibold text-sm lg:text-[20px]">
            Shop Now
          </button>
        </div>
      </section>
    </>
  );
}
