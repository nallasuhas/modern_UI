import Heading from "./Heading"
import Section from "./Section"
import { benefits } from "../constants"
import Arrow from "../assets/assets/svg/Arrow"
// import { GradientLight } from "../design/Hero"
// import ClipPath from "../assets/assets/svg/ClipPath"

function Benefits() {
  return (
    // a Section w/o any crosses
    <Section id='features'>
        {/* a div-wrapper */}
        <div className="container relative z-2">
            {/* Heading for Benefits section */}
            <Heading 
            className= "md:max-w-md lg:max-w-2xl" 
            title="Chat Smarter, Not Harder with Brainwave" />
            {/* flex-container, div-wrapper for a list of cards like items */}
            <div className="flex flex-wrap gap-10 mb-10">
                {/* card  */}
                {benefits.map((item) => (
                    // div-wrapper for card, flex-item consists of Benefits info, and a absolutely positioned background image
                    <div
                    className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                    style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                    key={item.id}>
                        {/* flex-container */}
                        <div className=" flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none shadow-md shadow-white rounded-lg">
                           <h5 className="h5 mb-5">
                            {item.title}
                           </h5>
                           <p className="body-2 mb-6 text-n-3">
                            {item.text}
                           </p>
                           <div className="flex items-center mt-auto">
                            <img src={item.iconUrl} width={50} height={50}  alt="" />
                            <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">  Explore more</p>
                            <Arrow />
                           </div>
                        </div>
                        {/* {item.light && <GradientLight />} */}
                        {/* absolutely positioned div that contains an image */}
                        <div
                        className="absolute inset-0.5 bg-n-8 opacity-0 transition-opacity hover:opacity-10 " 
                       
                        >
                            <div>
                                {item.imageUrl && (
                                    <img
                                    src={item.imageUrl}
                                    width={380}
                                    height={362}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                  />
                                )}
                            </div>

                        </div>
                        {/* <ClipPath /> */}
               
                    </div>
                ))}
            </div>
        </div>

    </Section>
  )
}

export default Benefits