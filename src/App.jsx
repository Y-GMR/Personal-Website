import Hero from './components/hero'
import Manifesto from './components/manifesto'
import Skills from './components/skills'

function App() {
  return (
    <div className="min-h-dvh bg-[#F8F8F8] flex justify-center items-start p-[clamp(1rem,5vw,10rem)]">
      <div className="gap-[clamp(1rem,2vw,2.5rem)] flex flex-col lg:flex-row =">
        <div className="gap-[clamp(1rem,2vw,2.5rem)] flex flex-col">
          <Hero />

          <div className="hidden lg:block">
            <Manifesto />
          </div>
        </div>
        
        <Skills />

        <div className="block lg:hidden">
          <Manifesto />
        </div>
      </div>
    </div>
  )
}

export default App