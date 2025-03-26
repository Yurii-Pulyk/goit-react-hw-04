import ImageCard from './ImageCard';

export default function ImageGallery({ photos, onImageClick }) {
  return (
    <ul>
      {photos.map(photo => (
        <li key={photo.id}>
          <ImageCard photo={photo} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
