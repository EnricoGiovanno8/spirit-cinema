import { UseQueryResult } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { MovieCarousel } from '../../../src/components';
import { MovieQueryResult } from '../../../src/index.types';

vi.mock('react', () => ({
  useState: vi.fn().mockReturnValue([true, vi.fn()]),
  useRef: vi.fn(),
}));

describe('MovieCarousel', () => {
  it('should render loading', () => {
    const query = {
      data: {
        results: [
          {
            adult: false,
            backdrop_path: '/qfAfE5auxsuxhxPpnETRAyTP5ff.jpg',
            genre_ids: [28, 53, 878],
            id: 822119,
            original_language: 'en',
            original_title: 'Captain America: Brave New World',
            overview:
              'After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.',
            popularity: 375.95,
            poster_path: '/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg',
            release_date: '2025-02-12',
            title: 'Captain America: Brave New World',
            video: false,
            vote_average: 6.132,
            vote_count: 1076,
          },
          {
            adult: false,
            backdrop_path: '/AuSip6e3uvQgPnnFQjzdTrOVPx7.jpg',
            genre_ids: [16, 28],
            id: 1297763,
            original_language: 'ja',
            original_title: 'ニンジャバットマン対ヤクザリーグ',
            overview:
              'The Batman family has returned to the present to discover that Japan has disappeared, and a giant island - Hinomoto - is now in the sky over Gotham City.  At the top sit the Yakuza, a group of superpowered individuals who reign without honor or humanity and look suspiciously like the Justice League. Now, it’s up to Batman and his allies to save Gotham!',
            popularity: 366.6,
            poster_path: '/2HiTUdSCKQUW7FhupW53ZE6KSwB.jpg',
            release_date: '2025-03-17',
            title: 'Batman Ninja vs. Yakuza League',
            video: false,
            vote_average: 6.7,
            vote_count: 46,
          },
        ],
      },
      isLoading: true,
      error: null,
    };
    const title = 'Now Playing';

    const { getByText } = render(
      <MovieCarousel title={title} query={query as UseQueryResult<MovieQueryResult, Error>} />
    );

    expect(getByText('Loading...')).toBeDefined();
  });

  it('should render error', () => {
    const query = {
      data: {
        results: [
          {
            adult: false,
            backdrop_path: '/qfAfE5auxsuxhxPpnETRAyTP5ff.jpg',
            genre_ids: [28, 53, 878],
            id: 822119,
            original_language: 'en',
            original_title: 'Captain America: Brave New World',
            overview:
              'After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.',
            popularity: 375.95,
            poster_path: '/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg',
            release_date: '2025-02-12',
            title: 'Captain America: Brave New World',
            video: false,
            vote_average: 6.132,
            vote_count: 1076,
          },
          {
            adult: false,
            backdrop_path: '/AuSip6e3uvQgPnnFQjzdTrOVPx7.jpg',
            genre_ids: [16, 28],
            id: 1297763,
            original_language: 'ja',
            original_title: 'ニンジャバットマン対ヤクザリーグ',
            overview:
              'The Batman family has returned to the present to discover that Japan has disappeared, and a giant island - Hinomoto - is now in the sky over Gotham City.  At the top sit the Yakuza, a group of superpowered individuals who reign without honor or humanity and look suspiciously like the Justice League. Now, it’s up to Batman and his allies to save Gotham!',
            popularity: 366.6,
            poster_path: '/2HiTUdSCKQUW7FhupW53ZE6KSwB.jpg',
            release_date: '2025-03-17',
            title: 'Batman Ninja vs. Yakuza League',
            video: false,
            vote_average: 6.7,
            vote_count: 46,
          },
        ],
      },
      isLoading: false,
      error: { message: 'message' },
    };
    const title = 'Now Playing';

    const { getByText } = render(
      <MovieCarousel title={title} query={query as UseQueryResult<MovieQueryResult, Error>} />
    );

    expect(getByText('Error loading movies')).toBeDefined();
  });

  it('should render movies', () => {
    const query = {
      data: {
        results: [
          {
            adult: false,
            backdrop_path: '/qfAfE5auxsuxhxPpnETRAyTP5ff.jpg',
            genre_ids: [28, 53, 878],
            id: 822119,
            original_language: 'en',
            original_title: 'Captain America: Brave New World',
            overview:
              'After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.',
            popularity: 375.95,
            poster_path: '/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg',
            release_date: '2025-02-12',
            title: 'Captain America: Brave New World',
            video: false,
            vote_average: 6.132,
            vote_count: 1076,
          },
          {
            adult: false,
            backdrop_path: null,
            genre_ids: [16, 28],
            id: 1297763,
            original_language: 'ja',
            original_title: 'ニンジャバットマン対ヤクザリーグ',
            overview:
              'The Batman family has returned to the present to discover that Japan has disappeared, and a giant island - Hinomoto - is now in the sky over Gotham City.  At the top sit the Yakuza, a group of superpowered individuals who reign without honor or humanity and look suspiciously like the Justice League. Now, it’s up to Batman and his allies to save Gotham!',
            popularity: 366.6,
            poster_path: '/2HiTUdSCKQUW7FhupW53ZE6KSwB.jpg',
            release_date: '2025-03-17',
            title: 'Batman Ninja vs. Yakuza League',
            video: false,
            vote_average: 6.7,
            vote_count: 46,
          },
        ],
      },
      isLoading: false,
      error: null,
    };
    const title = 'Now Playing';

    const { getByText, getAllByRole } = render(
      <MovieCarousel title={title} query={query as UseQueryResult<MovieQueryResult, Error>} />
    );

    expect(getByText(title)).toBeDefined();
    const images = getAllByRole('img');
    expect(images.length).toEqual(1);
  });
});
