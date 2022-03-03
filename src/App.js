import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Tools from "./Tools.js";
import Projects from "./Projects.js";
import Media from "./Media.js";
import Research from "./Research.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Research />
      <Tools />
      <Media />
      <Projects />
    </div>
  );
}

export default App;
