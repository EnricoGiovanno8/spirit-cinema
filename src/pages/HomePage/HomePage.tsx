import { useQuery } from '@tanstack/react-query';

import MovieCarousel from '../../components/MovieCarousel';
import { NOW_PLAYING_MOVIE_LIST_URL } from '../../constants/apiUri';
import { MovieQueryResult } from '../../index.types';
import fetcherWithAuthorization from '../../utils/FetcherWithAuthorization';

const HomePage = () => {
  const nowPlayingQuery = useQuery<MovieQueryResult>({
    queryKey: ['nowPlaying'],
    queryFn: fetcherWithAuthorization(NOW_PLAYING_MOVIE_LIST_URL),
  });

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <MovieCarousel title="Now Playing" query={nowPlayingQuery} />
    </div>
  );
};

export default HomePage;
