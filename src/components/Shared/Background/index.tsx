import { useEffect, useRef } from "react";
import s from "./style.module.scss";
export const Background = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty("--mouse-x", `55%`);
      ref.current.style.setProperty("--mouse-y", `40%`);
    }
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const x = e.clientX;
        const y = e.clientY;
        ref.current.style.setProperty("--mouse-x", `${x}px`);
        ref.current.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return <div id="background" ref={ref} className={s.container} />;
};
