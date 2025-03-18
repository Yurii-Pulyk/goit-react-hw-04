import ImageCard from './ImageCard';
import ImageModal from '../ImageModal/ImageModal';
import { useState } from 'react';

export default function ImageGallery({ images }) {
  const [selectImageIndex, setSelectImageIndex] = useState(null);
  const openModal = index => {
    setSelectImageIndex(index);
  };
  const closeModal = () => {
    setSelectImageIndex(null);
  };

  const nextImage = () => {
    setSelectImageIndex(prevIndex =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevImage = () => {
    setSelectImageIndex(prevIndex =>
      prevIndex > 0 ? prevIndex - 1 : images.Length - 1
    );
  };

  return (
    <>
      <ul>
        {images.map((image, index) => (
          <ImageCard
            key={image.id}
            image={image}
            onImageClick={() => openModal(index)}
          />
        ))}
      </ul>
      {selectImageIndex !== null && (
        <ImageModal
          image={images[selectImageIndex]}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}
