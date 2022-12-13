import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/3.png';
import IMG2 from '../../assets/mockupPH.png';
import IMG3 from '../../assets/2.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Travel Website',
    github: 'https://github.com/Prasetiaadi',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Human Resource Management',
    github: 'https://github.com/Prasetiaadi/powerhuman-frontend',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Game Voucher Top Up',
    github: 'https://github.com/Prasetiaadi',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn-portfolio" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
