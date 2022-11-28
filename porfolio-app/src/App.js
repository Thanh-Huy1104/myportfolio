import './App.css';
import {NavBar, Banner, Skills, SpaceWizard, NextClass, Howtobenice, Footer} from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <SpaceWizard />
      <Howtobenice />
      <NextClass />
      <Footer />
    </div>
  );
}

export default App;
