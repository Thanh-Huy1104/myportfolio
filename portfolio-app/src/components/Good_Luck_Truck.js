import GoodLuckTruck_img from "../assets/img/Good-Luck-Truck.png";
import Project from "./Projects";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const GoodLuckTruck = () => {
  return (
    <Project
      text="The 'GoodLuckTruck' project was born out of the challenge presented by 123Loadboard. Our goal was to create an efficient freight matching platform for truckers. We aimed to simplify load coordination by using geospatial data and advanced filters to connect truck drivers with the right cargo loads. This project aimed to improve efficiency, reduce fuel consumption, and boost earnings by providing customized load suggestions through notifications."
      title="Good-Luck-Truck | Optimized freight matching algorithm"
      img={GoodLuckTruck_img}
      link="https://devpost.com/software/goodlucktruck"
    />
  );
};

export default GoodLuckTruck;
