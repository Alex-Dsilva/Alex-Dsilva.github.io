import logo from './logo.svg';
import './App.css';
import Header from "./comp/header/Header";
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import {Projects} from "./Pages/Projects/Projects"
// import {ProjectsSection} from "./Pages/Projects/ProjectsSection"
import Skills from "./Pages/Skills/Skills"
import Contact from "./Pages/Contact/Contact"


function App() {
  return (  
    <div className="App">
      <Header/>
      {/* <AllRoutes/>  */}
      <Home/>
      <About/>
      {/* <Projects/> */}
      {/* <Skills/> */}
      <Contact/>
    </div>
  );
}

export default App;
