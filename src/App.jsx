import Hero from './components/hero'
import Skills from './components/skills'

function App() {
  return (
    <div className="min-h-dvh bg-[#F8F8F8] flex justify-center items-start p-[clamp(1rem,5vw,10rem)]">
      <div className="flex flex-col lg:flex-row gap-[clamp(1rem,2vw,2.5rem)]">
        <Hero />
        <Skills />
      </div>
    </div>
  )
}

export default App