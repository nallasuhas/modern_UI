import ButtonGradient from "./assets/assets/svg/ButtonGradient"
import Benefits from "./components/Benefits"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {


  return (
    <>
    <div className="pt-4  lg:pt-5 overflow-hidden">
     <Header />
     <Hero/>
     <Benefits />
    </div>
      <ButtonGradient />
    </>
  )
}

export default App
