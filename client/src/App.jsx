import './App.css'
import Header from "./components/Header/Header"
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <div className='snap-x snap-mandatory'>
          <div className='w-full fixed'>
            <Header/>
          </div>
          <div className='snap-always snap-center w-full min-h-screen bg-zinc-50 scroll-smooth'>
            casca
          </div>
          <div className='snap-always snap-center w-full min-h-screen bg-zinc-500 scroll-smooth'>
            casca
          </div>
          <div className='snap-always snap-center w-full'>
            <Header/>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
