import * as TanStackQuery from '@tanstack/react-query';
import { UseQueryResult } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import appRoutes from '../../../src/appRoutes';
import { MovieDetailResult } from '../../../src/index.types';

vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual('@tanstack/react-query');

  return {
    ...actual,
    useQuery: vi.fn(),
  };
});

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');

  return {
    ...actual,
    useParams: vi.fn(),
  };
});

describe('MovieDetailPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createRouter = () =>
    ReactRouterDOM.createMemoryRouter(appRoutes, {
      initialEntries: ['/movie-detail/291611'],
      initialIndex: 0,
    });

  it('renders loading spinner when fetching data', () => {
    const router = createRouter();
    vi.spyOn(ReactRouterDOM, 'useParams').mockReturnValue({ id: '291611' });
    vi.spyOn(TanStackQuery, 'useQuery').mockReturnValue({ isLoading: true } as UseQueryResult<
      MovieDetailResult,
      unknown
    >);

    const { getByTestId } = render(<RouterProvider router={router} />);

    expect(getByTestId('loading')).toBeDefined();
  });

  it('renders error message when query fails', () => {
    const router = createRouter();
    vi.spyOn(ReactRouterDOM, 'useParams').mockReturnValue({ id: '291611' });
    vi.spyOn(TanStackQuery, 'useQuery').mockReturnValue({
      isLoading: false,
      error: new Error('Failed to fetch'),
    } as UseQueryResult<MovieDetailResult, unknown>);

    const { getByText } = render(<RouterProvider router={router} />);

    expect(getByText('Oops! Something went wrong. Please try again later.')).toBeDefined();
  });

  it('renders movie details correctly', () => {
    const router = createRouter();
    vi.spyOn(ReactRouterDOM, 'useParams').mockReturnValue({ id: '291611' });
    vi.spyOn(TanStackQuery, 'useQuery').mockReturnValue({
      isLoading: false,
      data: {
        title: 'Fate',
        tagline: 'She walked out of his dreams and into his life. The rest is up to... FATE',
        overview:
          'Writer Jake Blackburn and his model girlfriend Chelly are a new couple living together in LA...',
        poster_path: '/2eHSfB3monxZORp6XgJZJfCegsa.jpg',
        genres: [
          { id: 10749, name: 'Romance' },
          { id: 35, name: 'Comedy' },
        ],
        release_date: '1990-01-01',
        vote_average: 6.5,
      },
    } as UseQueryResult<MovieDetailResult, unknown>);

    const { getByText } = render(<RouterProvider router={router} />);

    expect(getByText('Fate')).toBeDefined();
    expect(getByText('She walked out of his dreams and into his life. The rest is up to... FATE')).toBeDefined();
    expect(getByText('Writer Jake Blackburn and his model girlfriend Chelly are a new couple living together in LA...')).toBeDefined();
    expect(getByText('Romance, Comedy')).toBeDefined();
    expect(getByText('Release Date:')).toBeDefined();
    expect(getByText('1990-01-01')).toBeDefined();
    expect(getByText('Vote Average:')).toBeDefined();
    expect(getByText('6.5 ⭐')).toBeDefined();
  });
});
