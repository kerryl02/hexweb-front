import Logo from "../Logo";
import { navLinks } from "@constants";
import { Link } from "react-router-dom";
import ButtonCta from "../ButtonCta";

import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center h-16 pl-4 pr-4 border-b border-gray-100 border-solid navbar_component min-h-18 md:min-h-20 md:pl-8 md:pr-8">
        <div className="flex items-center justify-between w-full h-full ml-auto mr-auto navbar_container max-w-[100rem]">
          <Logo />
          <div className="flex items-center h-full">
            <ul className="flex items-center justify-center flex-1 gap-12 max-lg:hidden h-full" >
              {/* Dropdown Menu for Services */}
              <li className="flex items-center relative group h-full">
                <Link  to={"/services"} className="text-lg font-semibold leading-normal text-slate-gray font-nunito-sans hover:text-transparent hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 hover:bg-clip-text">
                  Services
                </Link>

                {/* Sous-menu */}
                <ul className="z-50 absolute left-0 top-[45px] hidden mt-2 space-y-2 bg-neutral-100 text-black rounded-b-lg shadow-lg group-hover:block w-max">
                  {navLinks.slice(5, 8).map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.link}
                        className="block px-4 py-2 text-lg font-normal text-slate-600 hover:bg-neutral-200 rounded-lg"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {navLinks.slice(1, 4).map((item) => (
                <li key={item.label} className="flex items-center">
                  <Link
                    to={item.link}
                    className="text-lg font-semibold leading-normal hover:text-transparent font-nunito-sans text-slate-gray hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 hover:bg-clip-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="min-w-56">
                <ButtonCta
                  link={"/contact"}
                  className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 focus:ring-opacity-20 dark:focus:ring-cyan-800"
                  classNameB="font-bold text-lg relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0 font-nunito-sans"
                >
                  Commencez Maintenant
                </ButtonCta>
              </li>
            </ul>
          </div>
          <UserMenu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
