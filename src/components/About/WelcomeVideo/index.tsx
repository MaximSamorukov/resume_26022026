import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import s from "./style.module.scss";
import PlayIcon from "@/assets/play.svg?react";
// @ts-ignore
import welcomeVideo from "@/assets/welcome_video/2026-08-05_14-28-40.mkv";
import { isLocalhost } from "@/utils/checkLocalhost";
import { hasWelcomeVideoInUrl } from "@/utils/withWelcomeVideo";
import { Modal } from "@/components/Shared/Modal";
import { PlayBtn } from "../PlayBtn";

type WelcomeVideoBtnProps = {
  isFirstRender: boolean;
};
export const WelcomeVideoBtn: React.FC<WelcomeVideoBtnProps> = memo(
  ({ isFirstRender }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoTagWidthValue, setVideoTagWidthValue] = useState(0);
    const [showVideo, setShowVideo] = useState<boolean>(false);
    const islocalhost = useMemo(() => isLocalhost(), [window.location]);
    console.log(islocalhost);
    const withWelcomeVideo = useMemo(
      () => hasWelcomeVideoInUrl(),
      [window.location],
    );

    const updateWidth = useCallback(() => {
      const div = document.querySelector("#welcome_video");
      if (div && showVideo) {
        const width = div.getBoundingClientRect().width;
        const normWidth = width > 600 ? 600 : width - 60;
        setVideoTagWidthValue(normWidth);
      }
    }, [showVideo]);

    useLayoutEffect(() => {
      updateWidth();
      window.addEventListener("resize", updateWidth);

      return () => window.removeEventListener("resize", updateWidth);
    }, [updateWidth]);

    const onClick = useCallback(() => {
      updateWidth();
      setShowVideo(true);
    }, [updateWidth]);
    const onCloseModal = useCallback(() => {
      setShowVideo(false);
    }, []);
    useEffect(() => {
      if (withWelcomeVideo && isFirstRender) {
        setShowVideo(true);
      }
    }, []);

    const handlePlay = useCallback(() => {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }, []);

    return (
      <div onClick={onClick} className={s.container}>
        <PlayIcon />
        <Modal
          id="welcome_video"
          isOpened={showVideo}
          onCloseModal={onCloseModal}
        >
          <div className={s.videoContainer}>
            <video
              ref={videoRef}
              preload="auto"
              src={welcomeVideo}
              width={videoTagWidthValue}
            />
            <div className={s.videoContainer_constrols}>
              <PlayBtn onClick={handlePlay} />
            </div>
          </div>
        </Modal>
      </div>
    );
  },
);
