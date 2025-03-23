import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { handleKeyDown, handleOnChange } from './Navbar.handler';

const Navbar = (): React.ReactNode => {
  const [keyword, setKeyword] = useState<string>('');
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900" data-testid="navbar">
      <div className="navbar shadow-sm max-w-7xl mx-auto px-4 md:px-8">
        <div className="navbar-start" />
        <Link to="/">
          <div className="navbar-center">
            <p className="btn btn-ghost text-2xl text-spirit-blue">SpiritCinema</p>
          </div>
        </Link>
        <div className="navbar-end">
          <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search for a movie"
              value={keyword}
              onChange={handleOnChange(setKeyword)}
              onKeyDown={handleKeyDown(navigate, keyword)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
