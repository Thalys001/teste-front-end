import React from 'react';

import './styles.scss';

import InstagramPhotoOne from '../../assets/InstagramPhotoOne.svg';
import InstagramhotoTwo from '../../assets/InstagramPhotoTwo.svg';
import InstagramPhotoThree from '../../assets/InstagramPhotoThree.svg';

export default function Instagram({title}) {
  return (
    <main className="container-instagram">
      <div className="div-title">
        <section className="section-title">
          <h1>{title}</h1>
        </section>
        <section className="section-link">
          <a href="#">+Seguir</a>
        </section>
      </div>

      <div className="instagram-photos">
        <section className="instagram-photos-img">
          <img src={InstagramPhotoOne} alt="instagram photo one"/>
        </section>
        <section className="instagram-photos-img">
          <img src={InstagramhotoTwo} alt="instagram photo two"/>
        </section>
        <section className="instagram-photos-img">
          <img src={InstagramPhotoThree} alt="instagram photo three"/>
        </section>
        <section className="instagram-photos-img">
          <img src={InstagramPhotoOne} alt="instagram photo four"/>
        </section>
        <section className="instagram-photos-img">
          <img src={InstagramhotoTwo} alt="instagram photo five"/>
        </section>
        <section className="instagram-photos-img">
          <img src={InstagramPhotoThree} alt="instagram photo six"/>
        </section>
      </div>
    </main>
  );
}
