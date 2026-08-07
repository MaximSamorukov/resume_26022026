import {
  useState,
  useEffect,
  useCallback,
  type RefObject,
  useMemo,
} from "react";

export type VideoStateType = {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  playbackRate: number;
  buffered: number;
  isSeeking: boolean;
  isWaiting: boolean;
  isEnded: boolean;
  canPlay: boolean;
  error: null | string;
};
const initState = {
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 1,
  isMuted: false,
  playbackRate: 1,
  buffered: 0,
  isSeeking: false,
  isWaiting: false,
  isEnded: false,
  canPlay: false,
  error: null,
};
export function useVideo(videoRef: RefObject<HTMLVideoElement | null>) {
  const [state, setState] = useState<VideoStateType>(initState);

  const updateState = useCallback((updates: Partial<VideoStateType>) => {
    setState((prev) => ({ ...prev, ...updates }));
  }, []);

  const handlers = useMemo(
    () => ({
      play: () => updateState({ isPlaying: true, isEnded: false }),
      playing: () => updateState({ isPlaying: true }),
      pause: () => updateState({ isPlaying: false }),
      ended: () => updateState({ isPlaying: false, isEnded: true }),
      //timeupdate: () => updateState({ currentTime: video.currentTime }),
      //loadedmetadata: () => updateState({ duration: video.duration }),
      //loadeddata: () =>
      //  updateState({
      //    duration: video.duration,
      //    canPlay: true,
      //    isWaiting: false,
      //  }),
      //volumechange: () =>
      //  updateState({
      //    volume: video.volume,
      //    isMuted: video.muted,
      //  }),
      //ratechange: () => updateState({ playbackRate: video.playbackRate }),
      //progress: () => {
      //  if (video.buffered.length > 0) {
      //    const bufferedEnd = video.buffered.end(video.buffered.length - 1);
      //    const percent = (bufferedEnd / video.duration) * 100;
      //    updateState({ buffered: percent });
      //  }
      //},
      //seeking: () => updateState({ isSeeking: true }),
      //seeked: () => updateState({ isSeeking: false }),
      waiting: () => updateState({ isWaiting: true }),
      canplay: () => updateState({ isWaiting: false, canPlay: true }),
      //error: (e: unknown) =>
      //  updateState({ error: (e as { message: string })?.message }),
      //abort: () => updateState({ error: "Загрузка прервана" }),
    }),
    [updateState],
  );
  useEffect(() => {
    const video = videoRef?.current;

    if (!video) return;

    Object.entries(handlers).forEach(([event, handler]) => {
      videoRef?.current?.addEventListener(event, handler);
    });

    // Проверка начального состояния
    //updateState({
    //  isPlaying: !video.paused,
    //  currentTime: video.currentTime || 0,
    //  volume: video.volume,
    //  isMuted: video.muted,
    //  playbackRate: video.playbackRate,
    //});

    return () => {
      Object.entries(handlers).forEach(([event, handler]) => {
        videoRef?.current?.removeEventListener(event, handler);
      });
    };
  }, [videoRef.current, handlers]);

  return state;
}
