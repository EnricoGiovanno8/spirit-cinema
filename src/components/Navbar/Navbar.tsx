const Navbar = (): React.ReactNode => {
  return (
    <div className="bg-base-100" data-testid="navbar">
      <div className="navbar shadow-sm max-w-7xl mx-auto px-4 md:px-8">
        <div className="navbar-start" />
        <div className="navbar-center">
          <a className="btn btn-ghost text-2xl text-spirit-blue">SpiritCinema</a>
        </div>
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
            <input type="search" required placeholder="Search movies" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
