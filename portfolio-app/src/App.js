import "./App.css";
import {
  NavBar,
  Banner,
  Footer,
  Skill,
  About,
  NextClass,
  RedBird,
  Sickness,
  BuildABook,
  GoodLuckTruck
} from "./components/index";
import "bootstrap/dist/css/bootstrap.min.css";

//Not using skills rn
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <div className="title">
        <h1>Projects</h1>
      </div>
      <BuildABook />
      <GoodLuckTruck />
      <Sickness />
      <NextClass />
      <RedBird />
      <div className="title">
        <h1>Skills</h1>
      </div>
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
