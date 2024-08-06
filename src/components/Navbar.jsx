import Logo from "./Logo";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons"

const Header = () => {
  return (
    <>
      <div
        className="navbar_component flex items-center border-b border-solid border-gray-100 min-h-18 md:min-h-20 pl-4 pr-4 md:pl-8 md:pr-8"
      >
        <div className="navbar_container flex justify-between items-center w-full ml-auto mr-auto max-w-7xl">
          <Logo />
          <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a 
                href={item.label}
                className="font-nunito-sans font-semibold leading-normal text-lg text-slate-gray">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden max-lg:block">
            <img 
            src={hamburger} 
            alt="Hamburger"
            width={25}
            height={25} 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
