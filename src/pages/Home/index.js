import React from 'react';

import Header from '../../components/Header';
import Categories from '../../components/Categories';
import MyDog from '../../components/MyDog';
import Brands from '../../components/Brands';
import Bullets from '../../components/Bullets';
import Blog from '../../components/Blog';
import Instagram from '../../components/Instagram';
import Form from '../../components/Form';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div>
      <Header/>
      <Categories title="Categorias"/>
      <MyDog title="Meu cachorro..."/>
      <Brands title="Principais marcas"/>
      <Bullets/>
      <Blog title="Confira o nosso Blog"/>
      <Instagram title="Intagram"/>
      <Form/>
      <Footer/>
    </div>
  )
}