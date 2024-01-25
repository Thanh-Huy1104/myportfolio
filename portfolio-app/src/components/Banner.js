import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/Lofi-icon.svg";
import { useState, useEffect } from "react";

const Banner = () => {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Developer", "Designer", "Student"];
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNumber % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi there, I am a`}
              <span className="wrap">
                <br />
                {text}
              </span>
            </h1>
            <p>
              My name is Thanh-Huy and I'm currently a student in university
              studying to become a future software engineer. I'm passionate
              about learning new things and I'm always looking for new
              opportunities to learn and grow.
            </p>
            <a href="mailto:etienne01.nguyen@gmail.com">
              Connect <ArrowRightCircle size={25} />
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className="banner-img" src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
