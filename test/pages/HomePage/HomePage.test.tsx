import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import HomePage from '../../../src/pages/HomePage';

vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual('@tanstack/react-query');
  return {
    ...actual,
    useQuery: vi.fn().mockReturnValue({ data: { results: [] }, isLoading: false, error: null }),
  };
});

describe('HomePage', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<HomePage />);

    expect(getByText('Now Playing')).toBeDefined();
    expect(getByText('Popular')).toBeDefined();
    expect(getByText('Top Rated')).toBeDefined();
    expect(getByText('Upcoming')).toBeDefined();
  });
});
