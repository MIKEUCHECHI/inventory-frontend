import Link from 'next/link';
import { useState } from 'react';
import DashboardIcon from './icons/DashboardIcon';

function SidebarSubmenu({ route }: any) {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  return (
    <div className="my-3 px-2 bg-primary space-y-1 relative" key={route.name}>
      <button
        className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 text-white  px-2 py-2"
        onClick={handleDropdownMenuClick}
        aria-haspopup="true"
      >
        <span className="inline-flex items-center">
          <DashboardIcon />
          <span className="relative">{route.name}</span>
        </span>
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className={`${!isDropdownMenuOpen && 'hidden'}`}>
        <ul
          className="p-2 mt-2 ml-8 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md bg-transparent list-none"
          aria-label="submenu"
        >
          {route.routes.map((r: { name: string; path: string }) => (
            <li
              className="px-2 py-1 transition-colors duration-150 hover:text-gray-200 text-white"
              key={r.name}
            >
              <Link href={r.path}>{r.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarSubmenu;
