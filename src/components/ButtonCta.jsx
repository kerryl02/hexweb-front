/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ButtonCta = ({children, link}) => {
  return (
    <Link
      to={link}
      className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium hover:text-gray-900 rounded-full group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 focus:ring-opacity-20 dark:focus:ring-cyan-800"
    >
      <span className="font-bold text-lg relative px-5 py-2.5 transition-all ease-in duration-75 group-hover:bg-white dark:bg-gray-900 rounded-full bg-opacity-0 font-nunito-sans">
        {children}
      </span>
    </Link>
  );
};

export default ButtonCta;
