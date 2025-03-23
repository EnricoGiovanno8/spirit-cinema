import { describe, expect, it } from 'vitest';

import { handleImageError } from '../../../src/components/MovieCard/MovieCard.handler';

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
});
