import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { MovieCard } from '../../../src/components';

describe('MovieCard', () => {
  it('should render component without crashing', () => {
    const id = 123;
    const title = 'title';
    const posterPath = 'posterPath';

    const { getByAltText, getByTestId, getByRole } = render(
      <MovieCard id={id} title={title} posterPath={posterPath} />
    );

    expect(getByTestId('movie-card')).toBeDefined();
    expect(getByAltText(title)).toBeDefined();
    expect(getByRole('img')).toBeDefined();
  });
});
