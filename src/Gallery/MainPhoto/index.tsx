import { Photo } from "../types";

import clsx from "clsx";

import style from "./index.module.scss";

type MAinPhotoProps = {
  activePhoto: Photo;
  nextPhoto: Photo;
  prevPhoto: Photo;
};

export const MainPhoto: React.FC<MAinPhotoProps> = ({
  activePhoto,
  nextPhoto,
  prevPhoto,
}) => {
  return (
    <div className={style.mainPhoto}>
      {prevPhoto && (
        <img
          className={clsx(style.mainPhoto_img, style.mainPhoto_img__prev)}
          src={prevPhoto.src}
          alt={prevPhoto.description}
        />
      )}
      <img
        className={style.mainPhoto_img}
        src={activePhoto.src}
        alt={activePhoto.description}
      />
      {nextPhoto && (
        <img
          className={clsx(style.mainPhoto_img, style.mainPhoto_img__next)}
          src={nextPhoto.src}
          alt={nextPhoto.description}
        />
      )}
    </div>
  );
};
