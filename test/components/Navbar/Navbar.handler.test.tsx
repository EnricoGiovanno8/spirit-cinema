import { describe, expect, it, vi } from 'vitest';

import { handleKeyDown, handleOnChange } from '../../../src/components/Navbar/Navbar.handler';

describe('Navbar handle', () => {
  describe('#handleOnChange', () => {
    it('should call setKeyword with correct params', () => {
      const setKeyword = vi.fn();
      const event = {
        target: {
          value: 'value',
        },
      };

      handleOnChange(setKeyword)(event as React.ChangeEvent<HTMLInputElement>);

      expect(setKeyword).toHaveBeenCalledWith(event.target.value);
    });
  });

  describe('#handleKeyDown', () => {
    it('should call navigate with correct params when enter is pressed', () => {
      const ENTER_KEY = 'Enter';
      const event = {
        key: ENTER_KEY,
      };
      const navigate = vi.fn();
      const keyword = 'keyword';
      const expectedParams = `/search?keyword=${keyword}`;

      handleKeyDown(navigate, keyword)(event as React.KeyboardEvent<HTMLInputElement>);

      expect(navigate).toHaveBeenCalledWith(expectedParams);
    });

    it('should not call navigate when backspace is pressed', () => {
      const BACKSPACE_KEY = 'Backspace';
      const event = {
        key: BACKSPACE_KEY,
      };
      const navigate = vi.fn();
      const keyword = 'keyword';

      handleKeyDown(navigate, keyword)(event as React.KeyboardEvent<HTMLInputElement>);

      expect(navigate).not.toHaveBeenCalled();
    });
  });
});
