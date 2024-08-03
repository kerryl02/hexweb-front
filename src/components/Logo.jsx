import logotext from "../assets/logotext.svg"
import logomark from "/logomark.svg"

const Logo = () => {
  return (
    <>
      <a href="#" className="p-0 w-nav-brand">
        <div className="flex w-auto items-center flex-nowrap">
          <div className="logogmark flex w-8 h-8 justify-center relative overflow-hidden flex-none border-[0.1] border-solid border-[#dae0e8] rounded-lg">
            <img src={logomark} alt="hexweb logomark" />
          </div>
          <div className="flex w-auto items-center ">
            <img  className="" src={logotext} alt="hexweb logotext" />
          </div>
        </div>
      </a>
    </>
  )
}

export default Logo