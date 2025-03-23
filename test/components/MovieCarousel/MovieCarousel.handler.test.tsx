import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { scroll } from '../../../src/components/MovieCarousel/MovieCarousel.handler';
import { ArrowDirection } from '../../../src/components/MovieCarousel/MovieCarousel.types';

describe('MovieCarousel handler', () => {
  describe('#updateArrows', () => {
    it('should call scrollBy, setShowLeftArrow and setShowRightArrow with correct params when click left', () => {
      vi.useFakeTimers();
      const mockScrollBy = vi.fn();
      vi.spyOn(React, 'useRef').mockReturnValue({
        current: { scrollBy: mockScrollBy, scrollLeft: 100, scrollWidth: 200, clientWidth: 300 },
      });
      const scrollContainerRef = React.useRef<HTMLDivElement>(null);
      const params = {
        direction: ArrowDirection.Left,
        scrollContainerRef,
        setShowLeftArrow: vi.fn(),
        setShowRightArrow: vi.fn(),
      };
      const expectedScrollByParams = {
        left: -300,
        behavior: 'smooth',
      };

      scroll(params)();
      vi.advanceTimersByTime(350);

      expect(mockScrollBy).toHaveBeenCalledWith(expectedScrollByParams);
      expect(params.setShowLeftArrow).toHaveBeenCalledWith(true);
      expect(params.setShowRightArrow).toHaveBeenCalledWith(false);
      vi.useRealTimers();
    });

    it('should call scrollBy, setShowLeftArrow and setShowRightArrow with correct params when click right', () => {
      vi.useFakeTimers();
      const mockScrollBy = vi.fn();
      vi.spyOn(React, 'useRef').mockReturnValue({
        current: { scrollBy: mockScrollBy, scrollLeft: 100, scrollWidth: 200, clientWidth: 300 },
      });
      const scrollContainerRef = React.useRef<HTMLDivElement>(null);
      const params = {
        direction: ArrowDirection.Right,
        scrollContainerRef,
        setShowLeftArrow: vi.fn(),
        setShowRightArrow: vi.fn(),
      };
      const expectedScrollByParams = {
        left: 300,
        behavior: 'smooth',
      };

      scroll(params)();
      vi.advanceTimersByTime(350);

      expect(mockScrollBy).toHaveBeenCalledWith(expectedScrollByParams);
      expect(params.setShowLeftArrow).toHaveBeenCalledWith(true);
      expect(params.setShowRightArrow).toHaveBeenCalledWith(false);
      vi.useRealTimers();
    });

    it('should not call scrollBy, setShowLeftArrow and setShowRightArrow when current is nul', () => {
      vi.useFakeTimers();
      const mockScrollBy = vi.fn();
      vi.spyOn(React, 'useRef').mockReturnValue({
        current: null,
      });
      const scrollContainerRef = React.useRef<HTMLDivElement>(null);
      const params = {
        direction: ArrowDirection.Right,
        scrollContainerRef,
        setShowLeftArrow: vi.fn(),
        setShowRightArrow: vi.fn(),
      };

      scroll(params)();
      vi.advanceTimersByTime(350);

      expect(mockScrollBy).not.toHaveBeenCalled();
      expect(params.setShowLeftArrow).not.toHaveBeenCalled();
      expect(params.setShowRightArrow).not.toHaveBeenCalled();
      vi.useRealTimers();
    });
  });
});
