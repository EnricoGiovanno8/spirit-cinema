import { UseQueryResult } from '@tanstack/react-query';

import { MovieQueryResult } from '../../index.types';

export enum ArrowDirection {
  Left = 'left',
  Right = 'right',
}

type ScrollContainerRef = React.RefObject<HTMLDivElement | null>;

interface ScrollParams {
  direction: ArrowDirection;
  scrollContainerRef: ScrollContainerRef;
  setShowLeftArrow: React.Dispatch<React.SetStateAction<boolean>>;
  setShowRightArrow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MovieCarouselProps {
  title: string;
  query: UseQueryResult<MovieQueryResult, Error>;
}

interface RenderMoviesParams {
  query: UseQueryResult<MovieQueryResult, Error>;
  scrollContainerRef: ScrollContainerRef;
  showLeftArrow: boolean;
  showRightArrow: boolean;
  setShowLeftArrow: React.Dispatch<React.SetStateAction<boolean>>;
  setShowRightArrow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UpdateArrowsParams {
  container: HTMLDivElement | null;
  setShowLeftArrow: React.Dispatch<React.SetStateAction<boolean>>;
  setShowRightArrow: React.Dispatch<React.SetStateAction<boolean>>;
}

export type { MovieCarouselProps, RenderMoviesParams, ScrollParams, UpdateArrowsParams };
