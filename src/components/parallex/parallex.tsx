import "./parallex.css";
import logo from "./icons/Black-Dominated.png";
import Iconblue from "./icons/Vector_blue.png";
import Icongreen from "./icons/Vector_green.png";
import BannerMarquee from "./icons/Marquee.png";
import { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { MdArrowOutward } from "react-icons/md";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 1000 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div>
      <div className="parallax">
        <motion.div className=" mt-4 scroller" style={{ x }}>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
        </motion.div>
      </div>
    </div>
  );
}

export default function Parallexxx() {
  return (
    // <section>
    //   <ParallaxText baseVelocity={-2}>
    //     <img src={Iconblue} alt="Logo" className="icon h-5" /> Think{" "}
    //     <img src={Icongreen} alt="Logo" className="icon h-5" /> Build{" "}
    //     <img src={Iconblue} alt="Logo" className="icon h-5" /> Deliver
    //     &nbsp;&nbsp;
    //   </ParallaxText>

    //   <ParallaxText baseVelocity={2}>
    //     <img src={Iconblue} alt="Logo" className="icon h-5" /> Think{" "}
    //     <img src={Icongreen} alt="Logo" className="icon h-5" /> Build{" "}
    //     <img src={Iconblue} alt="Logo" className="icon h-5" /> Deliver
    //     &nbsp;&nbsp;
    //   </ParallaxText>
    //   <ParallaxText baseVelocity={-2}>
    //     <img src={Iconblue} alt="Logo" className="icon h-5" /> Think{" "}
    //     <img src={Icongreen} alt="Logo" className="icon h-5" /> Build{" "}
    //     <img src={Iconblue} alt="Logo" className="icon h-5" /> Deliver
    //     &nbsp;&nbsp;
    //   </ParallaxText>
    // </section>
    <section>
      <ParallaxText baseVelocity={-1.5}>
        <img
          src={BannerMarquee}
          className="h-auto max-w-7xl"
          alt="image description"
        />
      </ParallaxText>

      <ParallaxText baseVelocity={1.5}>
        <img
          src={BannerMarquee}
          className="h-auto max-w-7xl"
          alt="image description"
        />
      </ParallaxText>

      <ParallaxText baseVelocity={-1.5}>
        <img
          src={BannerMarquee}
          className="h-auto max-w-7xl"
          alt="image description"
        />
      </ParallaxText>

      {/* <ParallaxText baseVelocity={-2}>
        <img src={Iconblue} alt="Logo" className="icon h-5" /> Think{" "}
      </ParallaxText> */}
    </section>
  );
}
