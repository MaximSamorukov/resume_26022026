import { memo } from "react";
import PlayIcon from "@/assets/play.svg?react";
import s from "./style.module.scss";

type PlayBtnProps = {
  onClick: () => void;
};
export const PlayBtn: React.FC<PlayBtnProps> = memo(({ onClick }) => {
  return (
    <button onClick={onClick} className={s.container}>
      <PlayIcon />
    </button>
  );
});
