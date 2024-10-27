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
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom, // 通过该属性维持占位符的高度
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
      }}
    >
      {loaded && (
        <img
          src={src}
          alt={alt}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
    </div>
  );
};
