import { useEffect, useRef, useState } from "react";
import cm from "classnames";
import "./ButtonScrollUp.scss";

export default function ButtonScrollUp() {
  const iRef = useRef<HTMLDivElement>(null);
  const [isBtnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    const funcOnClick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
    iRef.current?.addEventListener("click", funcOnClick);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      iRef.current?.removeEventListener("click", funcOnClick);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 0 && !isBtnVisible) {
        setBtnVisible(true);
      } else if (window.scrollY === 0 && isBtnVisible) {
        setBtnVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isBtnVisible]);

  return (
    <div ref={iRef} className="btn-scroll-up">
      <i className={cm("arrow up", isBtnVisible ? "visible" : "")}></i>
    </div>
  );
}
