import { useState } from "react";

import { Photo } from "./types";
import { MainPhoto } from "./MainPhoto";
import { Navigation } from "./Navigation";
import { PreviewPhoto } from "./PreviewPhoto";

import style from "./index.module.scss";

type GalleryProps = {
  photos: Photo[];
};

export const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const [indexActivePhoto, setindexActivePhoto] = useState(0);
  const activePhoto = photos[indexActivePhoto];
  const nextPhoto = photos[indexActivePhoto + 1]
  const prevPhoto = photos[indexActivePhoto - 1]

  return (
    <div className={style.gallary}>
      <div className={style.gallary_container}>
        <MainPhoto activePhoto={activePhoto} nextPhoto={nextPhoto} prevPhoto={prevPhoto} />
        <Navigation />
      </div>
      <PreviewPhoto />
    </div>
  );
};
