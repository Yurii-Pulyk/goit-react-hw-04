export default function ImageCard({ image, onImageClick }) {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onImageClick}
        style={{ cursor: 'poiner' }}
      />
    </div>
  );
}
