import React from 'react';

import './styles.scss';

import Shield from '../../assets/Shield.svg';
import Truck from '../../assets/Truck.svg';
import CreditCard from '../../assets/CreditCard.svg';
import Logo from '../../assets/Logo.svg';
import Lupa from '../../assets/Lupa.svg';
import Group from '../../assets/Group.svg';
import Heart from '../../assets/Heart.svg';
import UserCircle from '../../assets/UserCircle.svg';
import ShoppingCart from '../../assets/ShoppingCart.svg';
import CrowmSimple from '../../assets/CrowmSimple.svg';
import LeftArrow from '../../assets/LeftArrow.svg';
import RightArrow from '../../assets/RightArrow.svg';
import DownArrow from '../../assets/DownArrow.svg';
import Points from '../../assets/Points.svg';


export default function Header() {
  return (
    <main>
      <header>
        <div className='header-info'>
          <section
            className='header-info-first'>
              <img src={Shield} alt="Shield image"/>
              <p>Compra<span>100% segura</span></p>
          </section>
          <section
            className='header-info-second'>
              <img src={Truck} alt="Truck image"/>
              <p>Compra<span>100% segura</span></p>
          </section>
          <section
            className='header-info-third'>
              <img src={CreditCard} alt="CreditCard image"/>
              <p>Compra<span>100% segura</span></p>
          </section>
          </div>
          <div className='header-search'>
          <section className='header-logo'>
            <img src={Logo} alt="website image" />
          </section>

          <section className='header-form'>
            <form action="">
              <input type="text" placeholder='O que você está buscando?' maxlength="98" />
              <img src={Lupa} alt="magnifying glass image" />
            </form>
          </section>

          <section className='header-icons'>
            <section className='section-icon-diferente'>
              <a href="#:">
                <img src={Group} alt="Group image" />
              </a>
              </section>
            <section className='section-icon'>
              <a href="#:">
                <img src={Heart} alt="Heart image" />
              </a>
            </section>
            <section className='section-icon'>
              <a href="#:">
                <img src={UserCircle} alt="User image" />
              </a>
            </section>
            <section className='section-icon'>
              <a href="#:">
                <img src={ShoppingCart} alt="Cart image" />
              </a>
            </section>
            </section>
          </div>

          <div className='links'>
          <section>
            <a href="#:">BRINCAR</a>
          </section>
          <section>
            <a href="#:">MORDER</a>
          </section>
          <section>
            <a href="#:">COMER</a>
          </section>
          <section>
            <a href="#:">PASSEAR</a>
          </section>
          <section>
            <a href="#:">CASA E CONFORTO</a>
          </section>
          <section>
            <a href="#:">EDUCAÇÃO</a>
          </section>
          <section>
            <a href="#:" className='link-oferta'>OFERTAS</a>
          </section>
          <section className='link-outono'>
            <img src={CrowmSimple} alt="" />
            <a href="#:">COLEÇÃO DE OUTONO</a>
          </section>
        </div>

        <div className="background-img">
          <div className="background-img-container">
            <div className="background-img-first">
              <section className='section-arrow-left'>
                <a href="#:">
                  <img src={LeftArrow} alt="Left Arrow" />
                </a>
              </section>
              <section>
                <p>
                  As melhores guias<br />
                  para os melhores<br />
                  passeios.
                </p>
                <button>Confira</button>
              </section>
            </div>
            <div className="background-img-second">
              <section className="section-arrow-right">
                <a href="#:">
                  <img src={RightArrow} alt="Right arrow image" />
                </a>
              </section>
            </div>
          </div>
        </div>
        <div className="div-navigation">
          <a href="#:">
            <img src={DownArrow} alt="Down arrow image" />
          </a>
          <a href="#:">
            <img src={Points} alt="three point image" />
          </a>
        </div>
      </header>
    </main>
  )
}