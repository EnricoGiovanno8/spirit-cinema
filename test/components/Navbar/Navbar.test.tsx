import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Navbar } from '../../../src/components';

describe('Navbar', () => {
  it('should render component correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Navbar />);

    expect(getByText('SpiritCinema')).toBeDefined();
    expect(getByPlaceholderText('Search movies')).toBeDefined();
  });
});
