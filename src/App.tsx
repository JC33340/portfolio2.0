import './App.css'
import Landing from './sections/landing/Landing'
import About from './sections/about/About'
import { createContext, useRef } from 'react'

type portfolioContextType = {
    aboutRef: React.RefObject<HTMLDivElement | null> | null
}
const portfolioContext = createContext<portfolioContextType>({ aboutRef: null })

function App() {
    const aboutRef = useRef<HTMLDivElement>(null)
    return (
        <div className="font-Noto">
            <portfolioContext.Provider value={{ aboutRef }}>
                <Landing />
                <About />
            </portfolioContext.Provider>
        </div>
    )
}

export { portfolioContext }
export default App
