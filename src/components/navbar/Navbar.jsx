import Logo from "../Logo";
import { navLinks } from "../../constants";

import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center pl-4 pr-4 border-b border-gray-100 border-solid navbar_component min-h-18 md:min-h-20 md:pl-8 md:pr-8">
        <div className="flex items-center justify-between w-full ml-auto mr-auto navbar_container max-w-7xl">
          <Logo />
          <div className="">
            <ul className="flex items-center justify-center flex-1 gap-12 max-lg:hidden">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.label}
                    className="text-lg font-semibold leading-normal font-nunito-sans text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="min-w-56">
                <a
                  href=""
                  className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                  <span className="font-bold text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                    Commencez Maintenant
                  </span>
                </a>
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
