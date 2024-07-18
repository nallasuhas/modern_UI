import { companyLogos } from "../constants"

function CompanyLogos({className}) {
  return (
    <div className={className}>
         <h5 className="tagline mb-6 text-center text-n-1/50">
         Helping people create beautiful content at
         </h5>
         <ul className="flex">
            {companyLogos.map((logo, index) => (
                <li 
                className="flex items-center justify-center flex-1 h-[8.5rem]"
                key={index}>
                  <div className="px-4 py-3 hover:border-2 hover:border-white rounded-full hover:scale-[1.02] transition-all ease-in duration-100">
                     <img src={logo} width={134} height={28} alt={logo} />
                  </div>
                    

                </li>
            ))}

         </ul>
    </div>
   
  )
}

export default CompanyLogos