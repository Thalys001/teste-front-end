import React from 'react'

import './styles.scss'

import CaretDownBrands from '../../assets/CaretDownBrands.svg'
import BrandOne from '../../assets/BrandOne.svg'
import BrandTwo from '../../assets/BrandTwo.svg'
import BrandThree from '../../assets/BrandThree.svg'
import CaretDownBrandsTwo from '../../assets/CaretDownBrandsTwo.svg'

export default function Brands({ title }) {
  return (
    <main className="container-brans">
      <div className="container-title">
        <section className="section-title">
          <h1>{title}</h1>
        </section>
        <section className="section-link">
          <a href="#:">Ver todos</a>
        </section>
      </div>

      <div className="container-brands">
        <a href="#" className="left-arrow">
          <img
            src={CaretDownBrands}
            alt="left arrow icon"
            className="left-arrow"
          />
        </a>
        <img src={BrandOne} alt="brand icon one" />
        <img src={BrandTwo} alt="brand icon two" />
        <img src={BrandThree} alt="brand icon three" />
        <img src={BrandOne} alt="Logo da marca four" />
        <img src={BrandTwo} alt="Logo da marca five" />
        <img src={BrandThree} alt="Logo da marca six" />
        <a href="#">
          <img
            src={CaretDownBrandsTwo}
            alt="right arrow icon"
            className="right-arrow"
          />
        </a>
      </div>
    </main>
  )
}
