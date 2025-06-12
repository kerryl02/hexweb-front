import { navLinks } from "@constants"
import { Link } from "react-router-dom"
import Logo from "../components/Logo"
import ButtonCta from "../components/ButtonCta"
import { instagram } from "../assets/icons"
import { x } from "../assets/icons"
import { facebook } from "../assets/icons"
import { youtube } from "../assets/icons"


const Footer = () => {
  return (
    <footer className="flex justify-center w-full px-4 bg-black md:px-8">
      <div className=" w-full max-w-[100rem]">

          <div className="flex flex-wrap justify-around gap-8 mt-16 md:flex-nowrap sm:gap-2">
            <div className="w-full sm:w-[24rem]">
              <div>
                <Logo color="white" />
              </div>
              <div className="flex gap-2 py-4">
                <div className="flex items-center justify-center bg-white rounded-lg w-7 h-7">
                  <img className="w-6 h-6" src={instagram} alt="" />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg w-7 h-7">
                  <img className="w-6 h-5" src={x} alt="" />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg w-7 h-7">
                  <img className="w-6 h-6" src={facebook} alt="" />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg w-7 h-7">
                  <img className="w-6 h-6" src={youtube} alt="" />
                </div>
              </div>
              <div>
                <span className="text-white">© 2024</span>
              </div>
            </div>
            <div className="sm:w-[24rem] text-center w-full sm:text-start">
                {navLinks.slice(0, 1).map((item) => (
                  <h2 key={item.label} className="font-semibold text-white">{item.label}</h2>
                ))}
                <ul>
                  {navLinks.slice(4, 8).map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.link}
                        className="text-base leading-normal text-white font-nunito-sans text-slate-gray"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
            <div className="sm:w-[24rem] text-center w-full sm:text-start">
                {navLinks.slice(8, 9).map((item) => (
                  <h2 key={item.label} className="font-semibold text-white">{item.label}</h2>
                ))}
                <ul>
                  {navLinks.slice(9).map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.link}
                        className="text-base leading-normal text-white font-nunito-sans text-slate-gray"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
            <div className="w-[24rem]">

            </div>
          </div>
          <div className="flex justify-end pt-14">
            <div className="flex justify-end gap-4 md:w-1/2">
              <ButtonCta 
                className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 focus:ring-opacity-20 dark:focus:ring-cyan-800"
                classNameB="font-bold text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0 font-nunito-sans"
              >
                Prendre un rendez-vous
              </ButtonCta>
              <ButtonCta 
                className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 focus:ring-opacity-20 dark:focus:ring-cyan-800"
                classNameB="font-bold text-lg relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0 font-nunito-sans"
              >
                 Nous contacter
              </ButtonCta>
            </div>

          </div>
          <div className="pb-6">
            <div className="flex items-center justify-center w-full my-5 text-white">
              <a className="text-sm" href="">Politique de Confidentialité<span className="px-1">.</span></a>
              <a className="text-sm" href="">Mentions Légales<span className="px-1">.</span></a>
              <a className="text-sm " href="">Gestion des cookies</a>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer