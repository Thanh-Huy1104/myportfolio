import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col } from "react-bootstrap";

const Project = ({ text, title, img, link }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section data-aos="fade-down" id="projects">
      <Col xl={12} sm={4} md={6}>
        <div className="next-class-container">
          <div className="next-class-content">
            <div className="next-class-title">
              <p>Backend/UI</p>
              <h1>{title}</h1>
            </div>
            <div className="next-class-text">{text}</div>
            <div className="next-class-img">
              <a href={link}>
                <img
                  src={img}
                  className="next-class-phoneimg"
                  alt="Next Class"
                />
              </a>
            </div>
          </div>
        </div>
      </Col>
    </section>
  );
};

export default Project;
