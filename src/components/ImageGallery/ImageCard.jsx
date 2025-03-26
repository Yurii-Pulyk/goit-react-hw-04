export default function ImageCard({ photo, onImageClick }) {
  const { urls, alt_description } = photo;
  return (
    <div onClick={() => onImageClick(photo)}>
      <img src={urls.small} alt={alt_description} />
    </div>
  );
}
