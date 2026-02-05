import { useEffect } from "react";
import { useState } from "react";

const useMediaQuery = (mediaQuery) => {
  const mediaQueryList = window.matchMedia(mediaQuery);
  const [match, setMatch] = useState(false);

  function mediaTest(query) {
    setMatch(query.matches);
  }

  useEffect(() => {
    mediaTest(mediaQueryList);

    mediaQueryList.addEventListener("change", mediaTest);

    return () => mediaQueryList.removeEventListener("change", mediaTest);
  }, []);

  return match;
};

export default useMediaQuery;
