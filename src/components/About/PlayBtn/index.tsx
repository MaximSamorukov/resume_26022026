import { memo } from "react";
import PlayIcon from "@/assets/play.svg?react";
import StopIcon from "@/assets/stop.svg?react";
import s from "./style.module.scss";
import cn from "classnames";

type PlayBtnProps = {
  onClick: () => void;
  isPlaying?: boolean;
  disabled?: boolean;
};
export const PlayBtn: React.FC<PlayBtnProps> = memo(
  ({ onClick, isPlaying = false, disabled }) => {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={cn(s.container, { [s.container_disabled]: disabled })}
      >
        {!isPlaying ? <PlayIcon /> : <StopIcon />}
      </button>
    );
  },
);
