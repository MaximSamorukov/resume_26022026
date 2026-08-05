import { memo } from "react";
import PlayIcon from "@/assets/play.svg?react";
import StopIcon from "@/assets/stop.svg?react";
import s from "./style.module.scss";

type PlayBtnProps = {
  onClick: () => void;
  isPlaying?: boolean;
};
export const PlayBtn: React.FC<PlayBtnProps> = memo(
  ({ onClick, isPlaying = false }) => {
    return (
      <button onClick={onClick} className={s.container}>
        {!isPlaying ? <PlayIcon /> : <StopIcon />}
      </button>
    );
  },
);
