import * as TanStackQuery from '@tanstack/react-query';
import { UseQueryResult } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { SetURLSearchParams } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import appRoutes from '../../../src/appRoutes';
import { MovieQueryResult } from '../../../src/index.types';

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
    useSearchParams: vi.fn(),
  };
});

describe('SearchPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createRouter = () =>
    ReactRouterDOM.createMemoryRouter(appRoutes, {
      initialEntries: ['/search'],
      initialIndex: 0,
    });

  it('renders loading spinner when fetching data', () => {
    const router = createRouter();
    vi.spyOn(ReactRouterDOM, 'useSearchParams').mockReturnValue([
      new URLSearchParams({ keyword: 'spiderman' }),
    ] as unknown as [URLSearchParams, SetURLSearchParams]);
    vi.spyOn(TanStackQuery, 'useQuery').mockReturnValue({ isLoading: true } as UseQueryResult<
      MovieQueryResult,
      unknown
    >);

    const { getByTestId } = render(<ReactRouterDOM.RouterProvider router={router} />);

    expect(getByTestId('loading')).toBeDefined();
  });

  it('renders error message when query fails', () => {
    const router = createRouter();
    vi.spyOn(ReactRouterDOM, 'useSearchParams').mockReturnValue([
      new URLSearchParams({ keyword: 'spiderman' }),
    ] as unknown as [URLSearchParams, SetURLSearchParams]);
    vi.spyOn(TanStackQuery, 'useQuery').mockReturnValue({
      isLoading: false,
      error: new Error('Failed to fetch'),
    } as UseQueryResult<MovieQueryResult, unknown>);

    const { getByText } = render(<ReactRouterDOM.RouterProvider router={router} />);

    expect(getByText('Something went wrong')).toBeDefined();
  });

  it('renders no results message when no movies are found', () => {
    const router = createRouter();
    vi.spyOn(ReactRouterDOM, 'useSearchParams').mockReturnValue([
      new URLSearchParams({ keyword: 'unknown' }),
    ] as unknown as [URLSearchParams, SetURLSearchParams]);
    vi.spyOn(TanStackQuery, 'useQuery').mockReturnValue({
      isLoading: false,
      data: { results: [] },
    } as unknown as UseQueryResult<MovieQueryResult, unknown>);

    const { getByText } = render(<ReactRouterDOM.RouterProvider router={router} />);

    expect(
      getByText(
        "We couldn't find any movies matching your search. Please check your spelling or try a different keyword."
      )
    ).toBeDefined();
  });

  it('renders movie cards when data is available', () => {
    const router = createRouter();
    vi.spyOn(ReactRouterDOM, 'useSearchParams').mockReturnValue([
      new URLSearchParams({ keyword: 'spiderman' }),
    ] as unknown as [URLSearchParams, SetURLSearchParams]);
    vi.spyOn(TanStackQuery, 'useQuery').mockReturnValue({
      isLoading: false,
      data: {
        results: [
          { id: 1, title: 'Spiderman', poster_path: '/spiderman.jpg', backdrop_path: '/spiderman-bg.jpg' },
        ],
      },
    } as UseQueryResult<MovieQueryResult, unknown>);

    const { getByAltText } = render(<ReactRouterDOM.RouterProvider router={router} />);

    expect(getByAltText('Spiderman')).toBeDefined();
  });
});
