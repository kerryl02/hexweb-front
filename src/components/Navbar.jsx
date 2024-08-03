import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <div
        data-w-id="32d4938e-f7df-0205-edad-fa350dbfe94a"
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar_component flex items-center border-b border-solid border-gray-100 min-h-18 md:min-h-20 pl-4 pr-4 md:pl-8 md:pr-8"
      >
        <div className="navbar_container flex justify-between items-center w-full ml-auto mr-auto max-w-7xl">
          <Logo />
          <ul>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
