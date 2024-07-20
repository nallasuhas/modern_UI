import Section from "./Section"
import Heading from "./Heading"
import { roadmap } from "../constants"
import { check2, grid, loading1 } from "../assets/assets"
import Tagline from "./Tagline"
import Button from "./Button"

function Roadmap() {
  return (
   <Section className="overflow-hidden">
     {/* a div-wrapper that contains Heading, a grid-container, and a Button */}
      <div className="container md:pb-10">
        {/* Heading */}
         <Heading tag="Ready to get started" title="What we’re working on" />
         {/* grid-container */}
         <div className="relative grid  gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
            {roadmap.map((item) => {
                const status = item.status === "done" ? "Done" : "In progress"

                return (
                    // grid-item
                    <div 
                    key={item.id}
                    className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`}>
                        {/* div-wrapper */}
                        <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                            {/* absolutely positioned div, containing grid-image */}
                            <div className="absolute top-0 left-0 max-w-full">
                                <img src={grid} width={550} height={550} className="w-full"alt="" />
                            </div>
                            {/* div-wrapper */}
                            <div className="relative z-1"> 
                                {/* div containing tagline and status image, flex-container */}
                                <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                    <Tagline>{item.date}</Tagline>
                                    {/* flex-item, flex-container containing img and status text */}
                                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                        <img 
                                         className="mr-2.5"
                                        width={16}
                                        height={16}
                                        src={item.status === "done" ? check2 : loading1} alt="" />
                                        <div className="tagline">{status}</div>
                                    </div>
                                </div>
                                {/* div containing an image */}
                                <div className="mb-10 -my-10 -mx-15">
                                    <img 
                                    className="w-full"
                                    src={item.imageUrl} 
                                    width={650}
                                    height={420}
                                    alt="" />
                                </div>
                                <h4 className="h4 mb-4">{item.title}</h4>
                                <p className="body-2 text-n-4">{item.text}</p>
                            </div>
                        </div>

                    </div>
                )
            })}
         </div>
         {/* Button */}
         <div className="flex items-center justify-center mt-12 md:mt-15 xl:mt-20">
            <Button href="/roadmap">
               Our roadmap
            </Button>

         </div>

      </div>

   </Section>
  )
}

export default Roadmap