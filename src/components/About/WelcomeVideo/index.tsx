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
import Loader from "@/assets/loader.svg?react";
// @ts-ignore
import welcomeVideo from "@/assets/welcome_video/welcome_video.mkv";
import { isLocalhost } from "@/utils/checkLocalhost";
import { hasWelcomeVideoInUrl } from "@/utils/withWelcomeVideo";
import { Modal } from "@/components/Shared/Modal";
import { PlayBtn } from "../PlayBtn";
import { checkClientData } from "@/utils/checkIp";
import { useVideo } from "./utils/useVideo";

type WelcomeVideoBtnProps = {
  isFirstRender: boolean;
};
export const WelcomeVideoBtn: React.FC<WelcomeVideoBtnProps> = memo(
  ({ isFirstRender }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const videoState = useVideo(videoRef);
    const isPlaying = useMemo(() => videoState.isPlaying, [videoState]);
    const canPlay = useMemo(() => videoState.canPlay, [videoState]);
    const [videoTagWidthValue, setVideoTagWidthValue] = useState(0);
    const [showVideo, setShowVideo] = useState<boolean>(false);
    const islocalhost = useMemo(() => isLocalhost(), [window.location]);
    console.log(islocalhost);
    const withWelcomeVideo = useMemo(
      () => hasWelcomeVideoInUrl(),
      [window.location],
    );
    const handlePlay = useCallback(() => {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
          checkClientData(true);
        } else {
          videoRef.current.pause();
        }
      }
    }, []);
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
        checkClientData(true);
        setShowVideo(true);
      }
    }, []);
    const handleVideoSurfaceClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        const tag = (e.target as HTMLElement).tagName;
        if (tag === "VIDEO" || !!(e.target as HTMLElement).closest("video")) {
          e.stopPropagation();
          return;
        }
      },
      [],
    );
    return (
      <div onClick={onClick} className={s.container}>
        <PlayIcon />
        <Modal
          id="welcome_video"
          isOpened={showVideo}
          onCloseModal={onCloseModal}
        >
          <div className={s.videoContainer} onClick={handleVideoSurfaceClick}>
            <div className={s.videoContainer_wrapper}>
              {!canPlay && (
                <div className={s.loader}>
                  <Loader />
                </div>
              )}
              <video
                ref={videoRef}
                preload="auto"
                src={welcomeVideo}
                width={videoTagWidthValue}
              />
            </div>
            <div className={s.videoContainer_constrols}>
              <PlayBtn
                onClick={handlePlay}
                isPlaying={isPlaying}
                disabled={!canPlay}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  },
);
