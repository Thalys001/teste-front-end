import React from 'react';

import './styles.scss';

import FormDog from '../../assets/FormDog.svg';
import FormUser from '../../assets/FormUser.svg';
import FormEnvelope from '../../assets/FormEnvelope.svg';

export default function Form(){
  return(
    <main className="container-form">
      <div className="container-wrapper">
        <section className="section-logo-title">
          <img src={FormDog} alt="dog photo"/>
          <p>
            Se inscreva para receber<br/>
            novidades e promoções
          </p>
        </section>
        <section className="form-section">
          <form action="" className="form">
            <div className="form-name">
              <img src={FormUser} alt="user icon"/>
              <input type="text" placeholder="Digite seu nome" maxlength="50"/>
            </div>
            <div className="form-email">
              <img src={FormEnvelope} alt="envelope icon"/>
              <input type="email" placeholder="Digite seu e-mail"/>
            </div>
            <div className="form-button">
              <button>Enviar</button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}