import logo from './logo.svg';
import './App.css';
import Header from "./comp/header/Header";
import AllRoutes from './Pages/AllRoutes';


function App() {
  return (  
    <div className="App">
      <Header/>
      <AllRoutes/> 
    </div>
  );
}

export default App;
