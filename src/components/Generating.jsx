import { loading } from "../assets/assets"

function Generating({className}) {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.8rem] ${className || ""} text-base`}>
         <img className="w-5 h-5 mr-4" src={loading}  />
         AI is generating
         
    </div>
  )
}

export default Generating