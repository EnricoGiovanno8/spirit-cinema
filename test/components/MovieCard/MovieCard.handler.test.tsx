import { describe, expect, it, vi } from 'vitest';

import { handleClick, handleImageError } from '../../../src/components/MovieCard/MovieCard.handler';

describe('MovieCard handler', () => {
  describe('#handleImageError', () => {
    it('should set display to none', () => {
      const expectedResult = 'none';
      const event = {
        currentTarget: {
          style: {
            display: 'flex',
          },
        },
      };

      handleImageError(event as React.SyntheticEvent<HTMLImageElement, Event>);

      expect(event.currentTarget.style.display).toEqual(expectedResult);
    });
  });

  describe('#handleClick', () => {
    it('should call navigate with correct params', () => {
      const navigate = vi.fn();
      const id = 123;

      handleClick(navigate, id)();

      expect(navigate).toHaveBeenCalledWith(`/movieDetail/${id}`);
    });
  });
});
