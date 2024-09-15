import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Introduction from "./components/Introduction/Introduction";
import bgImage from './assets/bg-introduction.png';
import About from "./components/About/About"

function App() {
  return (
    <>
      <Router>
        <div className="flex-col">
          <Header />
          <div
            className="snap-center bg-local bg-center bg-cover w-full min-h-screen bg-zinc-50 scroll-smooth pt-[80px]"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <Introduction />
          </div>
          <div className="snap-center w-full min-h-screen bg-violet-700 scroll-smooth">
            <About />
          </div>
          <div
            className="snap-center bg-local bg-center bg-cover w-full min-h-screen bg-zinc-50 scroll-smooth pt-[80px]"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <Introduction />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
