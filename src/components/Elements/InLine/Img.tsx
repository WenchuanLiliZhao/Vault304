import styles from "./Img.module.scss"
import React, { useState, useEffect } from 'react';

interface ImgProps {
  src: string;
  alt: string;
  className?: string;
}

export const Img: React.FC<ImgProps> = ({ src, alt, className }) => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setAspectRatio(img.width / img.height);
      setLoaded(true);
    };
  }, [src]);

  // 提供一个默认的宽高比，比如4:3或16:9，在图片未加载前应用
  const defaultAspectRatio = 16 / 9;

  // 确保在图片加载前也有合适的占位高度
  const paddingBottom = aspectRatio ? `${100 / aspectRatio}%` : `${100 / defaultAspectRatio}%`;

  return (
    <div
      className={`${className} ${styles["img-container"]}`}
      style={{paddingBottom}}
    >
      {loaded && (
        <img
          className={styles["img"]}
          src={src}
          alt={alt}
        />
      )}
    </div>
  );
};
