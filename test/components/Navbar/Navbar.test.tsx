import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { Navbar } from '../../../src/components';

describe('Navbar', () => {
  it('should render component correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(getByText('SpiritCinema')).toBeDefined();
    expect(getByPlaceholderText('Search for a movie')).toBeDefined();
  });
});
