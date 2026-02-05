import { useEffect } from "react";
import { useState } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const posX = window.pageXOffset;
      const posY = window.pageYOffset;

      setScrollX(posX);
      setScrollY(posY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollX, scrollY };
};

export default useScroll;
