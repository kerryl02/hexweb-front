import Logo from "../Logo";
import { navLinks } from "@constants";
import { Link } from "react-router-dom";
import ButtonCta from "../ButtonCta";

import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center h-16 pl-4 pr-4 border-b border-gray-100 border-solid navbar_component min-h-18 md:min-h-20 md:pl-8 md:pr-8">
        <div className="flex items-center justify-between w-full ml-auto mr-auto navbar_container max-w-[100rem]">
          <Logo />
          <div className="">
            <ul className="flex items-center justify-center flex-1 gap-12 max-lg:hidden">
              {navLinks.slice(0, 4).map((item) => (
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
                <ButtonCta>
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
