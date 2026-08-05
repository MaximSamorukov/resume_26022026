import { createPortal } from "react-dom";
import cn from "classnames";
import s from "./style.module.scss";
import { useCallback, type MouseEvent } from "react";

type ModalPropsType = {
  children: React.ReactNode;
  isOpened: boolean;
  onCloseModal: () => void;
  id: string;
};
export const Modal: React.FC<ModalPropsType> = ({
  children,
  isOpened,
  onCloseModal,
  id,
}) => {
  const onClose = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if ((e.target as HTMLDivElement).id === id) {
        onCloseModal();
      }
    },
    [onCloseModal, id],
  );
  const cl = cn(s.container, {
    [s.container__opened]: isOpened,
    [s.container__closed]: !isOpened,
  });

  return createPortal(
    <div id={id} onClick={onClose} className={cl}>
      {isOpened ? <div className={s.modalContainer}>{children}</div> : <></>}
    </div>,
    document.body,
  );
};
