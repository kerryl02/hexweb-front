import Logo from "../Logo";
import { navLinks } from "../../constants";

import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <>
      <div
        className="flex items-center pl-4 pr-4 border-b border-gray-100 border-solid navbar_component min-h-18 md:min-h-20 md:pl-8 md:pr-8"
      >
        <div className="flex items-center justify-between w-full ml-auto mr-auto navbar_container max-w-7xl">
          <Logo />
          <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a 
                href={item.label}
                className="text-lg font-semibold leading-normal font-nunito-sans text-slate-gray">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <UserMenu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
