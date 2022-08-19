import React from 'react';

import './styles.scss';

import BannerDogTwo from '../../assets/BannerDogTwo.svg';
import Points from '../../assets/Points.svg';

export default function Bullets(){
  return (
    <main className="container-wrapper-bullet">
      <div className="container-bullet grid"> 
        <section className="bullet-first">
          <h1>Parceiros</h1>
          <p>
            Lorem ipsum dolor sit <br/> 
            amet, consectetur
            </p>
          <button>CONFIRA</button>
        </section>
        <section className="bullet-second">
          <section className="bullet-second-first">
            <h1>
              Assinatura <br/>
              Cãoselheiro
            </h1>
            <p>
            Lorem ipsum dolor sit amet, <br/> 
            consectetur adipiscing elit. Auctor <br/>
            adipiscing quis non sed.
            </p>
            <button>SAIBA MAIS</button>
          </section>
          
          <section className="banner">
            <img src={BannerDogTwo} alt="Image dog two"/>
          </section>
        </section>
      </div>
      <button className="points">
        <img src={Points} alt="icon three points"/>
      </button>
    </main>
  )
} 