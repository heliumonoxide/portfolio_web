import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (
    <>
      <Router>
        <div className="flex-col snap-x">
          <div className="w-full fixed z-50">
            <Header />
          </div>
          <div className="snap-center w-full min-h-screen bg-zinc-50 scroll-smooth pt-[120px]">
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
