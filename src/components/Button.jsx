import ButtonSvg from '../assets/assets/svg/ButtonSvg'

// This is Button component that either renders a button or a link with some custom button styling
function Button({className, href, onClick, children, px, white }) {
    // This classes is passed down to button element
     const classes = `button relative inline-flex justify-center items-center h-12 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'}  ${className || ''} `  

     const spanClasses = 'relative z-10'

   const renderButton = () => (
//    flex-container consisting of a text span element and a ButtonSvg 
    <button className={classes} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
         {/* It contains three svgs, all are absolutely positioned: first svg that sort of defines the left-border  of the button, second svg defines top and bottom borders, third svg defines right border for the button with gradients from ButtonGradient.jsx */}
        {ButtonSvg(white)}
    </button>
    
   )
   const renderLink = () => (
    <a href={href} className={classes} >
         <span className={spanClasses}>{children}</span>
         {ButtonSvg(white)}
    </a>
   )

   return href ? renderLink() : renderButton()
   
}

export default Button