import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies.jsx";
import Neighbourhood from "./components/Neighbourhood/Neighbourhood";
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Neighbourhood />
      <Value />
    </div>
  );
}

export default App;
