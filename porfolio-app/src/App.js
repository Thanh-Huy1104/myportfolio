import './App.css';
import {NavBar, Banner, Skills, SpaceWizard, NextClass, Howtobenice, Footer, About} from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <SpaceWizard />
      <Howtobenice />
      <NextClass />
      <Footer />
    </div>
  );
}

export default App;
