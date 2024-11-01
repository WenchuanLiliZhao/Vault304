import styles from "./Img.module.scss";
import React, { useState, useEffect } from 'react';

interface ImgProps {
  src: string;
  ratio?: [number, number];  // Making ratio optional
  alt: string;
  className?: string;
}

export const Img: React.FC<ImgProps> = ({ src, ratio = [16, 9], alt, className }) => {
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

  // Use the provided ratio or default to 16:9 if none is provided
  const [ratioWidth, ratioHeight] = ratio;
  const calculatedDefaultAspectRatio = ratioWidth / ratioHeight;

  // Ensure a placeholder height until the image is loaded
  const paddingBottom = aspectRatio ? `${100 / aspectRatio}%` : `${100 / calculatedDefaultAspectRatio}%`;

  return (
    <div
      className={`${className} ${styles["img-container"]}`}
      style={{ paddingBottom }}
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
