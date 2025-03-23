const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  event.currentTarget.style.display = 'none';
};

export { handleImageError };
