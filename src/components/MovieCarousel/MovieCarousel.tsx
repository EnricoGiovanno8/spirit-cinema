import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';

import MovieCard from '../MovieCard/MovieCard.tsx';
import { scroll } from './MovieCarousel.handler';
import { ArrowDirection, MovieCarouselProps, RenderMoviesParams } from './MovieCarousel.types';

const renderMovies = ({
  query,
  scrollContainerRef,
  showLeftArrow,
  showRightArrow,
  setShowLeftArrow,
  setShowRightArrow,
  navigate,
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
        {query.data?.results.map(
          (movie) =>
            movie.backdrop_path && (
              <MovieCard
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                navigate={navigate}
              />
            )
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

const MovieCarousel = ({ title, query, navigate }: MovieCarouselProps): React.ReactNode => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  return (
    <section data-testid="movie-carousel">
      <h2 className="text-xl text-spirit-blue font-bold mb-4">{title}</h2>
      {renderMovies({
        query,
        scrollContainerRef,
        showLeftArrow,
        showRightArrow,
        setShowLeftArrow,
        setShowRightArrow,
        navigate,
      })}
    </section>
  );
};

export default MovieCarousel;
