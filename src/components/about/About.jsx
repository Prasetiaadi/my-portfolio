import React from 'react';
import './about.css';
import ME from '../../assets/7.png';
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about.img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            {/* <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>3 Completed</small>
            </article>
          </div>

          <p>
            My name is Prasetia Adiprakasa. I am goal oriented to pursuing a
            long-term career change in the frontend developer field. Have Experience in the field of
            Project Management for 4 years and is looking for experience serious about IT "Web
            Development". I have hands-on experience in HTML, CSS, JavaScript, React js, Node js,
            MySQL, REST API and am proficient in developing dynamic and progressive Web applications,
            analytical skills, project management and problem solving. Able to collaborate between
            teams.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
