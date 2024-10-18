/**
 * Fix le gros bug et finir le usermenu
 */

import { hamburger } from "@assets/icons";
import { useState, useCallback } from "react";
import { navLinks } from "@constants";
import Logo from "../Logo";
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="hidden max-lg:block" >
      <img src={hamburger} alt="Hamburger" onClick={toggleOpen} width={25} height={25} />
      {isOpen && (
        <div
          className="fixed top-0 right-0 z-50 w-full h-full overflow-hidden text-sm bg-white shadow-md sm:absolute sm:h-auto sm:right-4 md:right-8 sm:top-16 sm:w-[40vw] rounded-xl"
          >
          <ul className="max-sm:px-4">
            <div className="sm:hidden">
                <Logo />
            </div>
            {navLinks.slice(0, 4).map((item) => (
              <li key={item.label} className="">
                <NavLink
                  to={item.link}
                  className="flex items-center justify-center w-full h-full px-4 py-3 text-lg font-semibold leading-normal transition hover:bg-neutral-100 font-nunito-sans text-slate-gray cursor-pointer"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
