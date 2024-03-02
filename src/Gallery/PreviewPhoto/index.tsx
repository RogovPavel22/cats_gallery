import { ClassProps, Photo } from "../types";
import { useEffect, useMemo, useRef } from "react";

import clsx from "clsx";

import style from "./index.module.scss";

interface PreviewPhotoProps extends ClassProps {
  indexActivePhoto: number;
  photos: Photo[];
  imgClick: (arg: number) => void
}

export const PreviewPhoto: React.FC<PreviewPhotoProps> = ({
  indexActivePhoto,
  photos,
  className,
  imgClick
}) => {
  const previewCont = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!previewCont.current) {
      return;
    }
    previewCont.current.style.transform = `translate(-${
      indexActivePhoto * 164
    }px, 0)`;
  }, [indexActivePhoto]);

  return (
    <div className={clsx(className, style.preview)}>
      {useMemo(
        () => (
          <ul className={style.previewGallery} ref={previewCont}>
            {photos.map((item, i) => (
              <li className={style.previewGallery_photo} key={item.id} onClick={() => imgClick(i)}>
                <img
                  className={style.previewGallery_photoImg}
                  src={item.preview}
                  alt={item.description}
                />
              </li>
            ))}
          </ul>
        ),
        []
      )}
      <div className={style.previewCover}>
        {indexActivePhoto + 1} / {photos.length}
      </div>
    </div>
  );
};
