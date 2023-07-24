import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies.jsx";
import Neighbourhood from "./components/Neighbourhood/Neighbourhood";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Viewing from "./components/Viewing/Viewing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Value />
      <Neighbourhood />
      <Contact />
      <Viewing />
      <Footer />
    </div>
  );
}

export default App;
