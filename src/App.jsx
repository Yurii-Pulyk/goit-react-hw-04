import { useState, useEffect } from 'react';

import SearchForm from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { Toaster, toast } from 'react-hot-toast';
import { fetchImages } from './components/SearchService';

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = topic => {
    setSearchTerm(topic);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (searchTerm === '') return;

    async function getData() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(searchTerm, page);
        setImages(prevImages => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
        toast.error('please reload!');
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [searchTerm, page]);

  return (
    <>
      <SearchForm onSearch={handleSearch} />

      {error && <b>Woops there was an error plz reload...</b>}
      {images.length > 0 && <ImageGallery images={images} />}

      {loading && <b>Loading data, please wait...</b>}

      {images.length > 0 && !loading && (
        <button onClick={() => setPage(page + 1)}>
          Load more images {page}
        </button>
      )}
      <Toaster />
    </>
  );
}
