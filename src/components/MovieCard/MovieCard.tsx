import React from 'react';

import { handleClick, handleImageError } from './MovieCard.handler';
import { MovieCardProps } from './MovieCard.types';

const MovieCard = ({ id, title, posterPath, navigate }: MovieCardProps): React.ReactNode => {
  return (
    <div
      key={id}
      className="flex-shrink-0 w-40 md:w-52 hover:cursor-pointer"
      data-testid="movie-card"
      onClick={handleClick(navigate, id)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="rounded-lg shadow-lg w-full"
        onError={handleImageError}
      />
    </div>
  );
};

export default MovieCard;
