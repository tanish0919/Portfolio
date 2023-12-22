import React from 'react';
import "./services.css"
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Crafting intuitive interfaces rooted in thorough user research.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Seamless communication and adaptable collaboration across
                disciplines.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Mastery of industry-standard tools like Sketch, Figma, and Adobe
                XD.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Stay current on design trends, ensuring alignment with industry
                best practices.
              </p>
            </li>
          </ul>
        </article>

        {/* end of ui ux */}

        {/* start of web dev */}

        <article className="service">
          <div className="service__head">
            <h3>Web Devlopment</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Comprehensive expertise in both front-end and back-end
                technologies for end-to-end web development.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create visually appealing and functional websites with a focus
                on responsive and mobile-friendly design.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Stay current with the latest web development frameworks and
                technologies for optimal project outcomes.
              </p>
            </li>
          </ul>
        </article>

        {/* end of web dev */}

        {/* start of content creation */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Compelling Storytelling</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Multimedia Proficiency</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO-Optimized Content</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services