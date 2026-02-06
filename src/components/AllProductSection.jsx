import { RiArrowLeftLine } from "@remixicon/react";
import { RiArrowRightLine } from "@remixicon/react";
import { RiAddLine } from "@remixicon/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function AllProductSection() {
  return (
    <section id="products" className="my-18 lg:my-32 mx-6 md:mx-18 lg:mx-32">
      <h1 className="text-2xl lg:text-[40px] font-semibold text-center">
        All Product
      </h1>
      <p className="text-center text-sm lg:text-base my-8">
        The products we provide only for you as our service are selected from
        the best products with number 1 quality in the world
      </p>
      <ProductList />
    </section>
  );
}

function ProductList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://lumoshive-api-furniture.vercel.app/api/products?page=${page}&limit=4`,
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
    <div>
      {error && (
        <div aria-live="assertive" role="alert" className="bg-red-500/50 border border-red-400 p-3 rounded-lg mb-4">
          Failed to load products. Please try again.
        </div>
      )}
      {loading && !data ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 w-full aspect-square rounded-2xl mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-3/4 mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : data ? (
        <>
          <div aria-live="polite" aria-label="Products list" role="region">
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 overflow-visible">
              <AnimatePresence key={page} initial={false} mode="wait">
                {data?.products.map((v) => (
                  <ProductEntry key={v.id} {...v} />
                ))}
              </AnimatePresence>
            </ul>
          </div>

          <div aria-live="polite" className="mt-12">
            <span className="hidden">
              Page {page} of {data.totalPages}
            </span>
            <Pagination
              page={page}
              totalPages={data.totalPages}
              decrementPage={decrementPage}
              incrementPage={incrementPage}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

function ProductEntry({ id, title, image, price, price_after_discount }) {
  const actualPrice = price_after_discount ?? price;
  return (
    <motion.li
      className="will-change-transform flex flex-col gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <div className="border border-black/20 w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center p-4 relative">
        <img
          src={image}
          className="max-w-full max-h-full object-contain"
          alt={`Image of ${title}`}
        ></img>
        <button className="absolute bottom-2 right-2 p-0.5 bg-black/10 text-black/70 rounded-full">
          <RiAddLine size={18} />
        </button>
      </div>
      <h2 className="text-base lg:text-2xl font-semibold line-clamp-1">
        {title}
      </h2>
      <div className="flex gap-2 items-end">
        <span
          aria-label={`Price ${actualPrice}`}
          className="text-xs lg:text-base"
        >
          ${Number(actualPrice).toFixed(2)}
        </span>
        {price_after_discount ? (
          <span
            aria-label={`Price before discount ${price}`}
            className="text-[10px] lg:text-sm line-through opacity-50"
          >
            ${Number(price).toFixed(2)}
          </span>
        ) : null}
      </div>
    </motion.li>
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
    <div className="flex gap-4 justify-center items-center">
      <button
        className={`p-3 mr-2 bg-white ${!isFirstPage ? " hover:bg-primary hover:text-white active:bg-primary active:text-white active:scale-95" : ""} rounded-full drop-shadow-lg drop-shadow-black/5 ${isFirstPage ? "opacity-20" : ""}`}
        disabled={isFirstPage}
        onClick={() => decrementPage()}
        aria-label="Previous page of products"
      >
        <RiArrowLeftLine />
      </button>
      {Array(totalPages)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`h-1.5 lg:h-2.5 aspect-square outline-2 rounded-full ${page === i + 1 ? "bg-black" : "bg-transparent"}`}
          />
        ))}
      <button
        className={`p-3 mr-2 bg-white ${!isLastPage ? "hover:bg-primary hover:text-white active:bg-primary active:text-white active:scale-95" : ""} rounded-full drop-shadow-lg drop-shadow-black/5 ${isLastPage ? "opacity-20" : ""}`}
        disabled={isLastPage}
        onClick={() => incrementPage()}
        aria-label="Next page of products"
      >
        <RiArrowRightLine />
      </button>
    </div>
  );
}
