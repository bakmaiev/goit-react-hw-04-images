import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { fetchCard, hasMoreImages } from 'API';
import { Loader } from './Loader';
import { Button } from './Button';
import { StyledAppComponent } from './App.styled';

export const App = () => {
  const [images, setImages] = useState([]);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    const getCards = async () => {
      try {
        setIsLoading(true);

        const { data } = await fetchCard(value, page);

        if (data.totalHits === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        if (!hasMoreImages(page, data.totalHits) && data.totalHits !== 0) {
          toast.info(
            "We're sorry, but you've reached the end of search results."
          );
        }

        setImages(prevState =>
          page === 1 ? data.hits : [...prevState, ...data.hits]
        );
        setTotalImages(data.totalHits);

        if (page > 1) {
          setTimeout(() => {
            window.scrollBy({
              top: 500,
              behavior: 'smooth',
            });
          }, 200);
        }
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    value && getCards();
  }, [value, page]);

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const handleFormSubmit = el => {
    if (el.toLowerCase() === value.toLowerCase()) {
      toast.info(
        `We already found '${value.toLowerCase()}'! Enter something different.`
      );
      return;
    }
    setValue(el);
    setPage(1);
    setImages([]);
    setTotalImages(0);
  };

  return (
    <StyledAppComponent>
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading && page === 1 && <Loader />}
      {images && <ImageGallery data={images} />}
      {isLoading === false && hasMoreImages(page, totalImages) && (
        <Button onClick={handleLoadMore} />
      )}
      {isLoading && page !== 1 && <Loader />}
      <ToastContainer />
    </StyledAppComponent>
  );
};
