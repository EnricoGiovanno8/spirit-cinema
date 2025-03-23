import { Outlet } from 'react-router-dom';

import { Navbar } from '../../components';

const LayoutPage = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPage;
