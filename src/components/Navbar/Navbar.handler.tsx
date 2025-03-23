import { NavigateFunction } from 'react-router-dom';

const handleOnChange =
  (setKeyword: React.Dispatch<React.SetStateAction<string>>) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

const handleKeyDown =
  (navigate: NavigateFunction, keyword: string) => (event: React.KeyboardEvent<HTMLInputElement>) => {
    const ENTER_KEY = 'Enter';

    if (event.key === ENTER_KEY) {
      navigate(`/search?keyword=${keyword}`);
    }
  };

export { handleKeyDown, handleOnChange };
