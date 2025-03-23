import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { LayoutPage } from '../../../src/pages';

describe('LayoutPage', () => {
  it('should render component withour crashing', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LayoutPage />
      </MemoryRouter>
    );

    expect(getByTestId('navbar')).toBeDefined();
  });
});
