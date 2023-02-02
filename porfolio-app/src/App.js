import './App.css';
import {NavBar, Banner, Footer, Skill, About, NextClass, RedBird, } from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';


//Not using skills rn
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skill />
      <NextClass />
      <RedBird />
      <Footer />
    </div>
  );
}

export default App;
