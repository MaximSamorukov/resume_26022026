import { memo, useMemo } from "react";
import s from "./style.module.scss";

type AccentBoxProps = {
  count: number;
  width: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate: number;
};
const DOT_DIA = 6;
const GAP = 8;
export const AccentBox = memo(
  ({ count, width, top, bottom, right, left, rotate }: AccentBoxProps) => {
    const arr = useMemo(
      () => Array.from({ length: count }, (_, i) => i),
      [count],
    );
    const boxWidth = width * DOT_DIA + (width - 1) * GAP;

    return (
      <div
        className={s.container}
        style={{
          width: boxWidth,
          top,
          left,
          right,
          bottom,
          ["--rotate" as string]: rotate ? `${rotate}deg` : undefined,
        }}
      >
        {arr.map((i) => (
          <div key={i} className={s.dot} />
        ))}
      </div>
    );
  },
);
