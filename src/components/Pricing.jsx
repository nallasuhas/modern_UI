import Section from "./Section"
import { smallSphere } from "../assets/assets"
import Heading from "./Heading"
import PricingList from "./PricingList"

function Pricing() {
  return (
    <Section className="overflow-hidden" id="pricing">
        {/* div-wrapper that contains sphere image, a heading, PricingList and an anchor tag */}
        <div className="container relative z-2">
            {/* div-wrapper for sphere image */}
            <div className="hidden mb-[6.5rem]  relative justify-center lg:flex">
                <img src={smallSphere} width={255} height={255} alt="" />
            </div>
            {/* heading */}
            <Heading  tag="Get started with Brainwave"  title="Pay once, use forever" />
           {/* div-wrapper for pricingList */}
            <div className="relative">
                <PricingList />

            </div>
          {/* div-wrapper for anchor-tag */}
            <div className="flex justify-center mt-10">
                <a 
                href="/pricing"
                className="text-xs font-code font-bold tracking-wider uppercase border-b">
                     See the full details
                </a>
            </div>


        </div>
    </Section>
  )
}

export default Pricing