import Modal from 'react-modal';
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from 'react-icons/io';
Modal.setAppElement('#root');
export default function ImageModal({ image, onClose, onNext, onPrev }) {
  if (!image) return null;
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Збільшене зображення"
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
        content: {
          width: '80%',
          height: '80%',
          margin: 'auto',
          padding: 0,
          background: 'transparent',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <button
        onClick={onPrev}
        style={{
          position: 'absolute',
          left: '10px',
          fontSize: '2rem',
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        <IoIosArrowBack />
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        style={{ maxHeight: '80%', maxWidth: '80%' }}
      />
      <button
        onClick={onNext}
        style={{
          position: 'absolute',
          right: '10px',
          fontSize: '2rem',
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        <IoIosArrowForward />
      </button>
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          fontSize: '2rem',
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        <IoIosClose />
      </button>
    </Modal>
  );
}
