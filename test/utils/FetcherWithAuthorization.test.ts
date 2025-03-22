import axios from 'axios';
import { describe, expect, it, Mocked, vi } from 'vitest';

import fetcherWithAuthorization from '../../src/utils/FetcherWithAuthorization';

vi.mock('axios');

const mockedAxios = axios as Mocked<typeof axios>;

describe('#FetcherWithAuthorization', () => {
  it('should return correct data', async () => {
    const url = 'www.domain.com';
    const expectedResponse = {
      data: 'data',
    };
    mockedAxios.get.mockResolvedValue(expectedResponse);

    const actualData = await fetcherWithAuthorization(url);

    expect(actualData).toEqual(expectedResponse.data);
  });
});
