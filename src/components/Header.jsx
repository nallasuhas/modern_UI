import {brainwave} from "../assets/assets"
import { navigation } from "../constants"
import { useState } from "react";
import {useLocation} from "react-router-dom"
import {HamburgerMenu} from "../design/Header";
import Button from "./Button";
import MenuSvg from "../assets/assets/svg/MenuSvg"
import {disablePageScroll, enablePageScroll} from "scroll-lock"

// This Header basically contains a div-wrapper that is fixed to top of the viewport that contains an other div-wrapper(flex-container) which in turn contains: title logo, nav-section, an anchor tag and a Button which are hidden by default(for mobile screens) and a Button with MenuSvg as children which is hidden for large screens
// nav-section(for mobile screens): by default(mobile screens) is hidden and fixed, depending on the openNavigation state its is displayed as flex and fixed. This nav-section contains a div-wrapper(flex, flex-col) with nav-items and nav-section also contains a HamburgerMenu component which is absolutely positioned inside nav-section below its sibling div-wrapper(flex, flex-col) 
// nav-section(for large devices): it is displayed as flex-conatiner which contains a div-wrapper (flex, flex-row) and the HamBurgermenu is hidden for larger devices
function Header() {

  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  function handleClick(){
    if (!openNavigation) return;
     enablePageScroll();
    setOpenNavigation(false);
  }

  function toggleNavigation(){
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  }
  return (
    // div wrapper for the header section, fixed attached to top of the viewport 
    <div className={`fixed top-0 left-0 w-full z-50 lg:bg-n-8/90 lg:backdrop-blur-sm border-b border-n-6 ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}>
         {/* flex container for brainwave logo, nav bar, */}
         <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
             {/* flex-item, brainwave logo */}
             <a href="#hero" className=" w-[12rem] xl:mr-8">
                <img src={brainwave} width={190} height={40} alt="Brainwave" />
             </a>
             {/* flex-item, flex-container, nav bar: displayed as flex container for larger devices(lg) and displayed as flex and position:fixed nav bar that is stretched to the full viewport width for smaller devices */}
             <nav className={ `${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent` }>
               {/* flex-item, flex-container: by default flex-direction is flex-col and for larger devices flex-row , div wrapper for nav-items,  */}
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                   {/* nav-items */}
                    {navigation.map(item => (
                      <a 
                      key={item.id} 
                      href={item.url}
                      onClick={handleClick}
                      className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                        item.onlyMobile ? "lg:hidden" : ""
                      } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                        item.url === pathname.hash
                          ? "z-2 lg:text-n-1"
                          : "lg:text-n-1/50"
                      } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                        >
                          {item.title}
                      </a>
                    ))}
 
                </div>
                {/* flex-item, absolutely positioned inside nav element with inset: 0 that is hidden for larger devices, and only displays if openNavigation is true as nav does  */}
                <HamburgerMenu />
             </nav>
             {/* flex-item, by default it is hidden and for larger devices: displayed as block */}
             <a href="#signup" className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
              New account
              </a>
              {/* flex-item */}
             <Button className="hidden lg:flex" href="#login">
                 Sign in
             </Button>
             {/* flex-item, displayed for only smaller devices, a menu-button which can be toggled */}
             <Button
             className="ml-auto lg:hidden"
             px="px-3"
             onClick={toggleNavigation}>
              {/* this MenuSvg changes its shape depending on openNavigation */}
              <MenuSvg openNavigation={openNavigation} />

             </Button>

         </div>
    </div>
  )
}

export default Header