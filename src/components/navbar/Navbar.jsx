import Logo from "../Logo";
import { navLinks } from "@constants";
import { Link } from "react-router-dom";
import ButtonCta from "../ButtonCta";

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
                  <Link
                    to={item.link}
                    className="text-lg font-semibold leading-normal font-nunito-sans text-slate-gray"
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
