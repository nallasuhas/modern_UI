import ButtonGradient from "./assets/assets/svg/ButtonGradient"
import Benefits from "./components/Benefits"
import Collaboration from "./components/Collaboration"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"

function App() {


  return (
    <>
    <div className="pt-4  lg:pt-5 overflow-hidden">
     <Header />
     <Hero/>
     <Benefits />
     <Collaboration />
     <Services />
    </div>
      <ButtonGradient />
    </>
  )
}

export default App
