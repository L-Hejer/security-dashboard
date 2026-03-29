import { useState, useEffect } from "react";

/**
 * useIsMobile - Returns true when the viewport width is below the given
 * breakpoint, and updates reactively on window resize.
 *
 * @param {number} [breakpoint=640] - Width threshold in pixels (matches Tailwind's `sm`).
 * @returns {boolean}
 */
const useIsMobile = (breakpoint = 640) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
