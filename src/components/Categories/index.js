import React from 'react';

import './styles.scss';

import DogOne from '../../assets/DogOne.svg';
import DogTwo from '../../assets/DogTwo.svg';
import DogThree from '../../assets/DogThree.svg';
import DogFour from '../../assets/DogFour.svg';
import LeftArrowTwo from '../../assets/LeftArrowTwo.svg';
import RightArrowTwo from '../../assets/RightArrowTwo.svg';


export default function Category({ title }) {
  return (
    <main className="container">
      <div className="categories-main">
        <div className="categories-wrapper">
          <div className="categories-title">
            <h1>{title}</h1>
          </div>

          <div className="categories-banner">
            <section className="categories-banner-section">
              <a>
                <img src={LeftArrowTwo} alt="left arrow icon" />
              </a>
              <section>
                <img src={DogOne} alt="Dog photo" />
              </section>
              <section className="categories-banner-section-links">
                <a href="#:">Brinquedos</a>
              </section>
            </section>

            <section className="categories-banner-section">
              <section>
                <img src={DogTwo} alt="Dog photo" />
              </section>
              <section className="categories-banner-section-links">
                <a href="#:">Petiscos</a>
              </section>
            </section>

            <section className="categories-banner-section">
              <section>
                <img src={DogThree} alt="Dog photo" />
              </section>
              <section className="categories-banner-section-links">
                <a href="#:">Guias</a>
              </section>
            </section>

            <section className="categories-banner-section">
              <section>
                <img src={DogFour} alt="Dog photo" />
                <a>
                  <img src={RightArrowTwo} alt="Right arrow icon" />
                </a>
              </section>
              <section className="categories-banner-section-links">
                <a href="#:">Higiene</a>
              </section>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
