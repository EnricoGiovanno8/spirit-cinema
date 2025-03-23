import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { SearchPage } from '../../../src/pages';

describe('SearchPage', () => {
  it('should render component without crashing', () => {
    const { getByText } = render(<SearchPage />);

    expect(getByText('SearchPage')).toBeDefined();
  });
});
