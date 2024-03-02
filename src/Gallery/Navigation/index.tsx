import { ClassProps } from "../types";

import clsx from "clsx";

import style from "./index.module.scss";

interface NavigationProps extends ClassProps {
  disabledPrev: boolean;
  disabledNext: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  disabledPrev,
  disabledNext,
  onPrevClick,
  onNextClick,
  className
}) => {
  return (
    <div className={clsx(className, style.nav)}>
      <button
        className={clsx(style.nav_btn, style.nav_btn__prev)}
        onClick={onPrevClick}
        disabled={disabledPrev}
      >
        Предыдущее фото
      </button>
      <button
        className={clsx(style.nav_btn, style.nav_btn__next)}
        onClick={onNextClick}
        disabled={disabledNext}
      >
        Следующее фото
      </button>
    </div>
  );
};
