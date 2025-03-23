import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { MovieCard } from '../../components';
import { SEARCH_MOVIE_URL } from '../../constants/apiUri';
import { MovieQueryResult } from '../../index.types';
import fetcherWithAuthorization from '../../utils/fetcherWithAuthorization';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const configs = { params: { query: keyword } };

  const searchMovieQuery = useQuery<MovieQueryResult>({
    queryKey: ['searchMovie', keyword],
    queryFn: fetcherWithAuthorization(SEARCH_MOVIE_URL, configs),
  });

  if (searchMovieQuery.isLoading) {
    return (
      <div data-testid="loading" className="flex flex-1 justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (searchMovieQuery.error) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <h1 className="text-spirit-blue font-bold text-xl">Something went wrong</h1>
      </div>
    );
  }

  if (!searchMovieQuery.data?.results.length) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <h1 className="text-spirit-blue font-bold text-xl">
          We couldn't find any movies matching your search. Please check your spelling or try a different
          keyword.
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4 md:p-8 py-8 md:py-12 gap-10 md:gap-14 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {searchMovieQuery.data?.results.map(
          (movie) =>
            movie.backdrop_path && (
              <MovieCard id={movie.id} title={movie.title} posterPath={movie.poster_path} />
            )
        )}
      </div>
    </div>
  );
};

export default SearchPage;
