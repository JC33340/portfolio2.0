import './App.css'
import Landing from './sections/landing/Landing'
import About from './sections/about/About'
import Projects from './sections/projects/Projects'
import Header from './components/Header'
import { createContext, useRef } from 'react'
import Footer from './components/Footer'

type portfolioContextType = {
    aboutRef: React.RefObject<HTMLDivElement | null> | null
}
const portfolioContext = createContext<portfolioContextType>({ aboutRef: null })

function App() {
    const aboutRef = useRef<HTMLDivElement>(null)
    return (
        <div className="font-Noto">
            <portfolioContext.Provider value={{ aboutRef }}>
                <Header />
                <Landing />
                <About />
                <Projects />
                <Footer />
            </portfolioContext.Provider>
        </div>
    )
}

export { portfolioContext }
export default App
