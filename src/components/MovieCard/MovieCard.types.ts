import { NavigateFunction } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
  navigate: NavigateFunction;
}

export type { MovieCardProps };
