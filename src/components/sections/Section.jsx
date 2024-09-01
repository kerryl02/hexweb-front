// eslint-disable-next-line react/prop-types
const Section = ({className, id, crosses,customPaddings, children}) => {

  return (
    <section
    id={id}
    className={`relative ${ customPaddings || `mx-auto w-full max-w-7xl px-4 md:px-8 lg:py-16 xl:py-12 ${crosses ? "lg:py-32 xl:py-40" : ""} ${ className || ""}`}`}>
      {children}
    </section>
  )
}

export default Section;