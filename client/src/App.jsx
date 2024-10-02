import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Introduction from "./components/Introduction/Introduction";
import bgImage from "./assets/bg-introduction.png";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <>
      <Router>
        <div className="flex-col w-[100vw] max-w-full overflow-hidden scroll-smooth">
          <Header />
          <a href="#home">
            <div className="bg-violet-600 fixed inline-block rounded-full p-3 shadow-xl z-50 bottom-10 right-5 md:bottom-10 md:right-20">
              <img src="assets/up.svg" alt="up-arrow" className="w-6 h-6" />
            </div>
          </a>
          <div
            className="bg-local bg-center bg-cover w-[100vw] max-w-full min-h-screen bg-zinc-50 pt-[80px]"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <Introduction />
          </div>
          <div className="w-[100vw] max-w-full min-h-screen bg-violet-600">
            <About />
          </div>
          <div
            className="flex flex-col bg-local bg-center bg-cover items-center w-[100vw] max-w-full min-h-screen bg-zinc-50"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <Projects />
          </div>
          <div className="snap-center w-[100vw] max-w-full min-h-screen bg-violet-600">
            <Experiences />
          </div>
          <ContactMe />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
