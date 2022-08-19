import React, { useEffect, useState } from 'react';

import './styles.scss';

import CaretDownYellow from '../../assets/CaretDownYellow.svg';
import CaretDownYellowTwo from '../../assets/CaretDownYellowTwo.svg';
import CaretDownBlack from '../../assets/CaretDownBlack.svg';
import CaretDownBlackTwo from '../../assets/CaretDownBlackTwo.svg';
import PointsTwo from '../../assets/PointsTwo.svg';


import api from '../../services/api';
import RenderItems from '../RenderItems';

export default function MyDog({ title }) {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsParPage, setItemsParPage] = useState(4)

  useEffect(() => {
    async function loadItems() {
      const response = await api.get('/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json');

      console.log(response.data.products)
      setItems(response.data.products);
    }
    loadItems();
  }, []);

  const itemsApi = Math.ceil(items.length / itemsParPage);
  const startIndex = currentPage * itemsParPage;
  const endIndex = startIndex + itemsParPage;
  const currenteItems = items.slice(startIndex, endIndex);

  return (
    <main className="container-mydog">
      <div className="header-my-dog">
        <section className="section-title">
          <h1>{title}</h1>
        </section>
        <section className="section-links">
          <img src={CaretDownYellow} alt="yellow left arrow
" />
          <a href="#:" className="link-principal">É AGITADO</a>
          <a href="#:" className="link-second">MORDE</a>
          <a href="#:" className="link-second">LATE MUITO</a>
          <a href="#:" className="link-second">É ANSIOSO</a>
          <a href="#:" className="link-second">É ESTRESSADO</a>
          <img src={CaretDownYellowTwo} alt="yellow right arrow" />
        </section>
      </div>

      <div className="items">
        <a href="#:"><img src={CaretDownBlack} alt="black right arrow" /></a>
          <RenderItems itemsApi={currenteItems} />
        <a href="#:"><img src={CaretDownBlackTwo} alt="black right arrow" /></a>
      </div>

      <div className="div-more-items">
        <a href="#:">Ver todos</a>
        <button><img src={PointsTwo} alt="three points" /></button>
      </div>

    </main>
  );
}