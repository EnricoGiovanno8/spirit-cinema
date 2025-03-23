import { render } from '@testing-library/react';
import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import appRoutes from '../../../src/appRoutes';

vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual('@tanstack/react-query');

  return {
    ...actual,
    useQuery: vi.fn().mockReturnValue({ data: { results: [] }, isLoading: false, error: null }),
  };
});

describe('HomePage', () => {
  const createRouter = () =>
    createMemoryRouter(appRoutes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

  it('should render without crashing', () => {
    const router = createRouter();

    const { getByText, getAllByTestId, getByTestId } = render(<RouterProvider router={router} />);

    expect(getByText('Now Playing')).toBeDefined();
    expect(getByText('Popular')).toBeDefined();
    expect(getByText('Top Rated')).toBeDefined();
    expect(getByText('Upcoming')).toBeDefined();
    const movieCarousels = getAllByTestId('movie-carousel');
    expect(movieCarousels.length).toEqual(4);
    const navbar = getByTestId('navbar');
    expect(navbar).toBeDefined();
  });
});
