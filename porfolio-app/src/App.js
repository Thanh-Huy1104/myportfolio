import './App.css';
import {NavBar, Banner, Footer, Skill} from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';


//Not using skills rn
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
