import { RiArrowRightLine } from "@remixicon/react";
import { RiArrowLeftLine } from "@remixicon/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import bg from "../assets/testimony-static-image.jpg";

export default function TestimonySection() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://lumoshive-api-furniture.vercel.app/api/testimonials?page=${page}&limit=1`,
      )
      .then((response) => setData(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page]);

  const decrementPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const incrementPage = () => {
    if (page < data.totalPages) setPage(page + 1);
  };

  return (
    <section
      id="testimony"
      className="my-18 lg:my-32 mx-6 md:mx-18 lg:mx-32 block lg:grid grid-cols-2 gap-8 items-stretch"
    >
      <h1 className="text-2xl lg:text-[40px] font-semibold">
        What peoples are saying about us
      </h1>
      {data ? (
        <div className="lg:col-start-1">
          <TestimonyEntry {...data.testimonials[0]} />
        </div>
      ) : null}
      <img
        src={bg}
        className="rounded-lg my-8 h-auto object-cover lg:col-start-2 lg:row-start-1 lg:row-end-4"
      />
      {data ? (
        <Pagination
          page={page}
          totalPages={data.totalPages}
          decrementPage={decrementPage}
          incrementPage={incrementPage}
        />
      ) : null}
    </section>
  );
}

function TestimonyEntry({ name, message, title, image }) {
  return (
    <div className="pt-8 flex flex-col gap-8">
      <div className="flex gap-4 items-center">
        <img src={image} className="w-10 lg:w-20 aspect-auto rounded-full" />
        <div>
          <h2 className="text-sm lg:text-xl font-semibold">{name}</h2>
          <span className="text-[10px] lg:text-sm opacity-50">{title}</span>
        </div>
      </div>
      <p>"{message}"</p>
    </div>
  );
}

function Pagination({
  page,
  totalPages,
  decrementPage = () => {},
  incrementPage = () => {},
}) {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <div className="flex gap-4 items-center">
      <button
        className={`p-3 mr-2 bg-white hover:opacity-80 active:scale-95 rounded-full drop-shadow-lg drop-shadow-black/5 ${isFirstPage ? "opacity-50" : "bg-primary! text-white"}`}
        disabled={isFirstPage}
        onClick={() => decrementPage()}
      >
        <RiArrowLeftLine />
      </button>
      <button
        className={`p-3 mr-2 bg-white hover:opacity-80 active:scale-95 rounded-full drop-shadow-lg drop-shadow-black/5 ${isLastPage ? "opacity-50" : "bg-primary! text-white"}`}
        disabled={isLastPage}
        onClick={() => incrementPage()}
      >
        <RiArrowRightLine />
      </button>
    </div>
  );
}
