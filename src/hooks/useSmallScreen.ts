import { useEffect, useState } from "react";

export function useSmallScreen(smallLessThan: number) {
  const [isSmallScreen, setSmallScreen] = useState(
    window.innerWidth <= smallLessThan
  );
  useEffect(() => {
    const onWindowResize = () => {
      const isSmall = window.innerWidth <= smallLessThan;
      if (isSmallScreen !== isSmall) {
        setSmallScreen(isSmall);
      }
    };

    window.addEventListener("resize", onWindowResize);

    return () => window.removeEventListener("resize", onWindowResize);
  }, [isSmallScreen, smallLessThan]);

  return isSmallScreen;
}
