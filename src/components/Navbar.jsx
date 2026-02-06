import { RiMenu3Fill } from "@remixicon/react";
import useScroll from "../hooks/useScroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect } from "react";
import { useState } from "react";
import { RiCloseFill } from "@remixicon/react";
import { AnimatePresence, easeInOut, motion } from "motion/react";

export default function Navbar() {
  const { scrollY } = useScroll();

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [menu, setMenu] = useState(false);

  const isScrolled = scrollY > window.screen.height * 0.1;

  return (
    <>
      <header
        className={`fixed z-10 top-0 left-0 right-0 m-6 lg:m-8 md:mx-18 lg:mx-32 flex flex-col items-end text-white`}
      >
        <motion.div
          animate={{
            padding: isScrolled ? "16px 24px" : "0px 0px",
            backgroundColor: isScrolled
              ? "rgba(75, 85, 99, 0.5)"
              : "rgba(0, 0, 0, 0)",
            borderColor: isScrolled
              ? "rgba(156, 163, 175, 0.4)"
              : "rgba(0, 0, 0, 0)",
            backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            mass: 1,
          }}
          className="w-full flex items-center justify-between border rounded-2xl overflow-hidden"
        >
          <h1 id="brand" className="flex-1 font-bold text-2xl lg:text-4xl">
            FurniShop
          </h1>
          {isDesktop ? (
            <nav id="desktop-nav" className="flex gap-12 justify-end">
              <a href="/" className="font-semibold">
                Home
              </a>
              <a href="#" className="hover:underline">
                About
              </a>
              <a href="#" className="hover:underline">
                Features
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </nav>
          ) : (
            <AnimatePresence mode="popLayout" initial={false}>
              {menu ? (
                <motion.button
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.1 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.1 }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                  aria-label="Open navigation menu"
                  aria-expanded={menu}
                  aria-controls="mobile-menu"
                  className="cursor-pointer"
                  onClick={() => setMenu(false)}
                >
                  <RiCloseFill />
                </motion.button>
              ) : (
                <motion.button
                  key="menu"
                  initial={{ opacity: 0, rotate: -90, scale: 0.1 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.1 }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                  aria-label="Open navigation menu"
                  aria-expanded={menu}
                  aria-controls="mobile-menu"
                  className="cursor-pointer"
                  onClick={() => setMenu(true)}
                >
                  <RiMenu3Fill />
                </motion.button>
              )}
            </AnimatePresence>
          )}
        </motion.div>
        {!isDesktop && menu ? (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-fit flex flex-col items-center gap-4 m-4 mr-0 bg-gray-500/50 border border-gray-300/40 p-4 backdrop-blur-lg rounded-xl"
          >
            <a href="/" className="font-semibold">
              Home
            </a>
            <a
              href="#track-record"
              className="hover:scale-105 active:font-semibold"
            >
              About
            </a>
            <a
              href="#capabilities"
              className="hover:scale-105 active:font-semibold"
            >
              Features
            </a>
            <a
              href="#contacts"
              className="hover:scale-105 active:font-semibold"
            >
              Contact
            </a>
          </motion.nav>
        ) : null}
      </header>
    </>
  );
}
