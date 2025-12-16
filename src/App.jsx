import { BrowserRouter } from "react-router-dom";

import {
  About,
  Achievement,
  Contact,
 
  Hero,
  Navbar,
  Preloader,
  StarsCanvas,
  Works,
} from "./components";
// import EasterEggs from "./components/EasterEggs";
// import ElasticCursor from "./components/ElasticCursor";
import SkillKeyboard from "./components/SkillKeyboard";

const App = () => {
  return (
    <Preloader>
      <BrowserRouter>
        <div
          className="relative z-0"
          style={{ backgroundColor: "hsl(222.2 84% 4.9%)" }}
        >
         
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <StarsCanvas />
          <About />
          <Achievement />
          <SkillKeyboard />
          <Works />
       
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </Preloader>
  );
};

export default App;
