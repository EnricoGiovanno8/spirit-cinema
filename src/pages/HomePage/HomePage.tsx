import { useQuery } from '@tanstack/react-query';

import { MovieCarousel } from '../../components';
import {
  NOW_PLAYING_MOVIE_LIST_URL,
  POPULAR_MOVIE_LIST_URL,
  TOP_RATED_MOVIE_LIST_URL,
  UPCOMING_MOVIE_LIST_URL,
} from '../../constants/apiUri';
import { MovieQueryResult } from '../../index.types.tsx';
import fetcherWithAuthorization from '../../utils/fetcherWithAuthorization.ts';

const HomePage = () => {
  const nowPlayingMovieQuery = useQuery<MovieQueryResult>({
    queryKey: ['nowPlayingMovie'],
    queryFn: fetcherWithAuthorization(NOW_PLAYING_MOVIE_LIST_URL),
  });
  const popularMovieQuery = useQuery<MovieQueryResult>({
    queryKey: ['popularMovie'],
    queryFn: fetcherWithAuthorization(POPULAR_MOVIE_LIST_URL),
  });
  const topRatedMovieQuery = useQuery<MovieQueryResult>({
    queryKey: ['nowPlayingMovie'],
    queryFn: fetcherWithAuthorization(TOP_RATED_MOVIE_LIST_URL),
  });
  const upcomingMovieQuery = useQuery<MovieQueryResult>({
    queryKey: ['upcomingMovie'],
    queryFn: fetcherWithAuthorization(UPCOMING_MOVIE_LIST_URL),
  });

  return (
    <div className="flex flex-col p-4 md:p-8 py-8 md:py-12 gap-10 md:gap-14 max-w-7xl mx-auto">
      <MovieCarousel title="Now Playing" query={nowPlayingMovieQuery} />

      <MovieCarousel title="Popular" query={popularMovieQuery} />

      <MovieCarousel title="Top Rated" query={topRatedMovieQuery} />

      <MovieCarousel title="Upcoming" query={upcomingMovieQuery} />
    </div>
  );
};

export default HomePage;
