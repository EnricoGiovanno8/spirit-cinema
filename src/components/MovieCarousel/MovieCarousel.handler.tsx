import { ArrowDirection, ScrollParams, UpdateArrowsParams } from './MovieCarousel.types';

const _updateArrows = ({ container, setShowLeftArrow, setShowRightArrow }: UpdateArrowsParams) => {
  setShowLeftArrow(Number(container?.scrollLeft) > 0);
  setShowRightArrow(
    Number(container?.scrollLeft) < Number(container?.scrollWidth) - Number(container?.clientWidth)
  );
};

const scroll =
  ({ direction, scrollContainerRef, setShowLeftArrow, setShowRightArrow }: ScrollParams) =>
  () => {
    const container = scrollContainerRef.current;

    if (container) {
      const scrollAmount = 300;

      container.scrollBy({
        left: direction === ArrowDirection.Left ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });

      setTimeout(() => {
        _updateArrows({ container, setShowLeftArrow, setShowRightArrow });
      }, 350);
    }
  };

export { scroll };
