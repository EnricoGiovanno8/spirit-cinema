import '@testing-library/jest-dom';

import { beforeAll, vi } from 'vitest';

beforeAll(() => {
  vi.stubGlobal('import.meta', {
    env: {
      API_TOKEN: 'API_TOKEN',
    },
  });
});
