import { memo, useCallback, useEffect, useMemo, useState } from "react";
import s from "./style.module.scss";
import PlayIcon from "@/assets/play.svg?react";

import { useTranslation } from "@/providers/translations";
import { isLocalhost } from "@/utils/checkLocalhost";
import { hasWelcomeVideoInUrl } from "@/utils/withWelcomeVideo";
import { Modal } from "@/components/Shared/Modal";

export const WelcomeVideoBtn = memo(() => {
  const c = useTranslation();
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const islocalhost = useMemo(() => isLocalhost(), [window.location]);
  const withWelcomeVideo = useMemo(
    () => hasWelcomeVideoInUrl(),
    [window.location],
  );

  const onClick = () => {
    setShowVideo(true);
  };
  const onCloseModal = useCallback(() => {
    setShowVideo(false);
  }, []);
  useEffect(() => {
    if (islocalhost && withWelcomeVideo) {
      setShowVideo(true);
    }
  }, [islocalhost, withWelcomeVideo]);

  if (!islocalhost) {
    return <></>;
  }
  return (
    <div onClick={onClick} className={s.container}>
      <PlayIcon />
      <Modal
        id="welcome_video"
        isOpened={showVideo}
        onCloseModal={onCloseModal}
      >
        <div>modal</div>
      </Modal>
    </div>
  );
});
