/* eslint-disable react/prop-types */
import logotext from "../assets/logotext.svg"
import logotextwhite from "../assets/logotextwhite.svg"
import logomark from "/logomark.svg"
import logomarkwhite from "/logomarkwhite.svg"

const Logo = ({color}) => {
  const logoSrc = color === 'white' ? logomarkwhite : logomark;
  const logoTextSrc = color === 'white' ? logotextwhite : logotext;
  return (
    <>
      <a href="/" className="p-0 w-nav-brand">
        <div className="flex items-center w-auto flex-nowrap">
          <div className="logogmark flex w-12 h-12 justify-center relative overflow-hidden flex-none border-[0.1] border-solid border-[#dae0e8] rounded-lg">
            <img src={logoSrc} alt="hexweb logomark" />
          </div>
          <div className="flex items-center w-auto h-[50px]">
            <img  className="" src={logoTextSrc} alt="hexweb logotext" />
          </div>
        </div>
      </a>
    </>
  )
}

export default Logo