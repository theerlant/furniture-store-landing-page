import { RiMenu3Fill } from "@remixicon/react";
import useScroll from "../hooks/useScroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect } from "react";
import { useState } from "react";
import { RiCloseFill } from "@remixicon/react";

export default function Navbar() {
  const { scrollY } = useScroll();

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [menu, setMenu] = useState(false);

  return (
    <>
      <header
        className={`fixed z-10 top-0 left-0 right-0 m-6 md:mx-18 flex flex-col items-end text-white`}
      >
        <div
          className={`w-full flex items-center justify-between transition-all duration-200 border rounded-2xl ${scrollY > window.screen.height * 0.1 ? "p-4 px-6 bg-gray-600/50 border-gray-400/40 backdrop-blur-lg overflow-hidden" : "bg-transparent border-transparent"}`}
        >
          <h1 id="brand" className="flex-1 font-bold text-2xl">
            FurniShop
          </h1>
          {isDesktop ? (
            <nav className="flex gap-12 justify-end">
              <span className="font-semibold">Home</span>
              <span>About</span>
              <span>Features</span>
              <span>Contact</span>
            </nav>
          ) : (
            <>
              {menu ? (
                <RiCloseFill
                  className="place-self-end"
                  onClick={() => setMenu(false)}
                />
              ) : (
                <RiMenu3Fill
                  className="place-self-end"
                  onClick={() => setMenu(true)}
                />
              )}
            </>
          )}
        </div>
        {!isDesktop && menu ? (
          <nav className="w-fit flex flex-col items-center gap-4 m-4 mr-0 bg-gray-500/50 border border-gray-300/40 p-4 backdrop-blur-lg rounded-xl">
            <a href="/" className="font-semibold">
              Home
            </a>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>
          </nav>
        ) : null}
      </header>
    </>
  );
}
