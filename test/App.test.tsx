import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import App from '../src/App';

vi.mock('@tanstack/react-query', () => ({
  QueryClient: vi.fn(),
  QueryClientProvider: vi.fn(() => 'QueryClientProvider'),
}));

describe('App Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<App />);

    expect(container).toBeDefined();
  });
});
