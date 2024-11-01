import React, { useState } from 'react';

interface ImageMetadata {
  width: number;
  height: number;
  fileSize?: string;
  mimeType?: string;
}

const ImageDimensionChecker: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [metadata, setMetadata] = useState<ImageMetadata | null>(null);

  const loadImageMetadata = async () => {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous'; // Required to fetch the image data due to CORS
      img.src = imageUrl;
      img.onload = async () => {
        let blob: Blob | null = null;
        try {
          const response = await fetch(imageUrl, { mode: 'cors' });
          blob = await response.blob();
        } catch (error) {
          console.error('Failed to fetch image blob:', error);
        }

        setMetadata({
          width: img.naturalWidth,
          height: img.naturalHeight,
          fileSize: blob ? `${(blob.size / 1024).toFixed(2)} KB` : undefined,
          mimeType: blob ? blob.type : undefined,
        });
      };
      img.onerror = () => {
        alert('Failed to load image. Please check the URL.');
      };
    } catch (error) {
      console.error('Error loading image metadata:', error);
      alert('Error loading image metadata. Please check the console for more details.');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
    setMetadata(null); // Reset metadata whenever input changes
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      loadImageMetadata();
    }
  };

  const handleButtonClick = () => {
    loadImageMetadata();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        style={{ marginBottom: '10px', width: '300px' }}
      />
      <button onClick={handleButtonClick} style={{ marginLeft: '10px' }}>
        Get Metadata
      </button>
      {metadata && (
        <div>
          <div>Image Dimensions: {metadata.width} x {metadata.height}</div>
          {metadata.fileSize && <div>File Size: {metadata.fileSize}</div>}
          {metadata.mimeType && <div>MIME Type: {metadata.mimeType}</div>}
          {metadata.mimeType && <div>MIME Type: {metadata.mimeType}</div>}
        </div>
      )}
    </div>
  );
};

export default ImageDimensionChecker;
