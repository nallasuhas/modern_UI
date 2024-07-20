import Section from "./Section"
import { socials } from "../constants"

function Footer() {
  return (
    // a Section with crosses and change the default paddings for Section
    <Section crosses className="!px-0 !py-10">
        {/* flex-container, div-wrapper */}
        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
            {/* flex-item */}
            <p className="caption text-n-4 lg:block">
            © {new Date().getFullYear()}. All rights reserved.
            </p>
            {/* flex-item, flex-container*/}
            <ul className="flex gap-5 flex-wrap">
                {/* flex-item, an anchor containing social-icon */}
                {socials.map((item) => (
                    <a 
                    key={item.id}
                    href={item.url}
                    className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                    >
                        <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                    </a>
                ))}
            </ul>
        </div>

    </Section>
  )
}

export default Footer