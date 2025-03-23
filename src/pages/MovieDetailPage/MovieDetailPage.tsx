import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { MOVIE_DETAIL_URL } from '../../constants/apiUri';
import { MovieDetailResult } from '../../index.types';
import fetcherWithAuthorization from '../../utils/fetcherWithAuthorization';

const MovieDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery<MovieDetailResult>({
    queryKey: ['movieDetail', id],
    queryFn: fetcherWithAuthorization(`${MOVIE_DETAIL_URL}/${id}`),
  });

  if (isLoading) {
    return (
      <div data-testid='loading' className="flex flex-1 justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex flex-1 justify-center items-center min-h-screen">
        <p className="text-spirit-blue text-lg font-semibold">
          Oops! Something went wrong. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 justify-center items-center max-w-5xl mx-auto p-6">
      <div className="flex flex-1 flex-col md:flex-row gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
          className="w-full md:w-80 rounded-lg shadow-lg"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">{data.title}</h1>
            <p className="text-white italic text-lg">{data.tagline}</p>
            <p className="mt-2 text-white text-justify">{data.overview}</p>
          </div>

          <div className="mt-4">
            <p className="text-white">
              <strong>Genres:</strong>
              {data.genres.map((genre: { id: number; name: string }) => genre.name).join(', ')}
            </p>
            <p className="text-white">
              <strong>Release Date:</strong> {data.release_date}
            </p>
            <p className="text-white">
              <strong>Vote Average:</strong> {data.vote_average.toFixed(1)} ⭐
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
