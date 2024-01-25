import BuildABook_Img from "../assets/img/Build-A-Book.png";
import Project from "./Projects";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const BuildABook = () => {
  return (
    <Project
      text="Build-a-Book is an educational platform that empowers parents to take an active role in their children's learning journey. It places the creative process directly in the hands of parents, starting with a simple prompt. Using advanced AI technologies like Stability AI and Open AI, our software crafts personalized and immersive stories tailored to each child. Parents not only receive an original narrative but also a beautifully illustrated digital book filled with captivating animations. Build-a-Book seamlessly merges education and creativity, transforming learning into an engaging and comprehensive experience for both parents and children."
      title="Build-A-Book | AI generated children books | Winner Project at ConcUHacks 2023 | Best use of AI in Education"
      img={BuildABook_Img}
      link="https://devpost.com/software/build-a-book"
    />
  );
};

export default BuildABook;
