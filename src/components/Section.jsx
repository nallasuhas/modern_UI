
import SectionSvg from "../assets/assets/svg/SectionSvg"

function Section({className, id, crosses, crossesOffset, customPadding, children}) {
  return (
    // a div-wrapper that contains children, two absolutely positioned lines that acts as left and right borders 
    <div id={id} className={`relative ${customPadding ||  `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`}  ${className || ""}`}>
        {/* children  */}
        {children}
        {/* absolutely positioned left line  */}
        <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10">
        </div>
        {/* absolutely positioned right line */}
        <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10">
        </div>
        {/* if section contains crosses a top crosses svg */}
        {crosses && (
            <>
              {/* a div that is absolutely positioned at top of the section div resulting as a top-border*/}
              <div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
              } pointer-events-none lg:block xl:left-10 right-10`}>
             </div>
             {/* SectionSvg which inturn contains two plussvgs that are positioned to left and right extremes of Section component */}
             <SectionSvg crossesOffset={crossesOffset} />
            </>
        )}
    </div>
  )
}

export default Section