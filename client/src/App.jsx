import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Introduction from "./components/Introduction/Introduction";
import bgImage from './assets/bg-introduction.png';

function App() {
  return (
    <>
      <Router>
        <div className="flex-col">
          <Header />
          <div
            className="snap-center bg-local bg-center bg-cover w-full min-h-screen bg-zinc-50 scroll-smooth pt-[100px]"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <Introduction />
          </div>
          <div className="snap-center w-full min-h-screen bg-zinc-800 scroll-smooth">
            casca
          </div>
          <div className="snap-center w-full min-h-screen">ngeliat</div>
        </div>
      </Router>
    </>
  );
}

export default App;
