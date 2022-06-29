import { Swiper, SwiperSlide } from "swiper/react";

import "./Lswipper.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

interface ILSwipperProps {
  elements: React.ReactNode[];
  className?: string;
}

export default function Lswipper(props: ILSwipperProps) {
  const isSmallView = useSmallScreen(768);

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={props.className}
      slidesPerView={isSmallView ? 1 : 3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
    >
      {props.elements &&
        props.elements.length &&
        props.elements.map((m, i) => <SwiperSlide key={i}>{m}</SwiperSlide>)}
    </Swiper>
  );
}
