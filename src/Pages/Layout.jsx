import { Outlet, NavLink } from 'react-router-dom';
import {HomeIcon, PersonIcon, CodeSquareIcon, ThreeBarsIcon} from '@primer/octicons-react';

export default function Layout() {
  
  return (
    <div>
      <header className="header">


        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle bg-dark text-white border-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <ThreeBarsIcon size={16} />
  </button>
 <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <NavLink to="/" className="dropdown-item">
          <HomeIcon size={16} /> Home
        </NavLink>
        <NavLink to="/about" className="dropdown-item">
          <PersonIcon size={16} /> About Me
        </NavLink>
        <NavLink to="/projects" className="dropdown-item">
          <CodeSquareIcon size={16} /> Projects
        </NavLink>
      </div>
        </div>


      </header>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
