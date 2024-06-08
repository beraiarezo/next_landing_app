import { useState, useEffect } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
};

export default useScroll;
