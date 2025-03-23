import { NavigateFunction } from 'react-router-dom';

const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  event.currentTarget.style.display = 'none';
};

const handleClick = (navigate: NavigateFunction, id: number) => () => {
  navigate(`/movieDetail/${id}`);
};

export { handleClick,handleImageError };
