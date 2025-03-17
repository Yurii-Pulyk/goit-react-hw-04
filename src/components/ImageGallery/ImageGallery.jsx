import ImageCard from './ImageCard';

export default function ImageGallery({ images }) {
  return (
    <ul>
      {images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </ul>
  );
}
