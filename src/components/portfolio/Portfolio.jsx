import React from 'react';
import "./portfolio.css";
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>E COMMERCE WEBSITE</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tanish0919/ProShop"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://proshop-845g.onrender.com/"
              className="btn btn-primary "
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>NETFLIX CLONE</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tanish0919/Netflix_Clone"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://netflix-clone-7d9bf.firebaseapp.com/"
              className="btn btn-primary "
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>SENTIMENTAL ANALYSIS</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tanish0919/analysis"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;