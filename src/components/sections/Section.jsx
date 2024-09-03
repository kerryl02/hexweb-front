// eslint-disable-next-line react/prop-types
const Section = ({className, id, crosses,customPaddings, children}) => {

  return (
    <section
    id={id}
    className={`relative ${ customPaddings || `mx-auto w-full max-w-7xl px-4 md:px-8 pb-16 pt-10 xl:py-14 ${crosses ? "lg:py-32 xl:py-40" : ""} ${ className || ""}`}`}>
      {children}
    </section>
  )
}

export default Section;