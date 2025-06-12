// eslint-disable-next-line react/prop-types
const Section = ({className, id, crosses,customPaddings, children}) => {

  return (
    <section
    id={id}
    className={`relative ${ customPaddings || `mx-auto w-full max-w-[100rem] px-4 md:px-8 pb-20 pt-14 xl:py-24 ${crosses ? "lg:py-32 xl:py-40" : ""} ${ className || ""}`}`}>
      {children}
    </section>
  )
}

export default Section;