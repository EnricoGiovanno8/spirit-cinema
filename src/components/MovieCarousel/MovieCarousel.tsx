import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';

import { Movie } from '../../index.types';
import { handleImageError, scroll } from './MovieCarousel.handler';
import { ArrowDirection, MovieCarouselProps, RenderMoviesParams } from './MovieCarousel.types';

const renderMovies = ({
  query,
  scrollContainerRef,
  showLeftArrow,
  showRightArrow,
  setShowLeftArrow,
  setShowRightArrow,
}: RenderMoviesParams) => {
  if (query.isLoading) return <p>Loading...</p>;

  if (query.error) return <p>Error loading movies</p>;

  return (
    <div className="relative">
      {showLeftArrow && (
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full z-10"
          onClick={scroll({
            direction: ArrowDirection.Left,
            scrollContainerRef,
            setShowLeftArrow,
            setShowRightArrow,
          })}
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>
      )}
      <div ref={scrollContainerRef} className="flex gap-4 overflow-hidden">
        {query.data?.results.map((movie: Movie) =>
          movie.backdrop_path ? (
            <div key={movie.id} className="flex-shrink-0 w-40 md:w-52">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg shadow-lg w-full"
                onError={handleImageError}
              />
            </div>
          ) : null
        )}
      </div>
      {showRightArrow && (
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full z-10"
          onClick={scroll({
            direction: ArrowDirection.Right,
            scrollContainerRef,
            setShowLeftArrow,
            setShowRightArrow,
          })}
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
};

const MovieCarousel = ({ title, query }: MovieCarouselProps): React.ReactNode => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  return (
    <section>
      <h2 className="text-xl text-white font-bold mb-4">{title}</h2>
      {renderMovies({
        query,
        scrollContainerRef,
        showLeftArrow,
        showRightArrow,
        setShowLeftArrow,
        setShowRightArrow,
      })}
    </section>
  );
};

export default MovieCarousel;
