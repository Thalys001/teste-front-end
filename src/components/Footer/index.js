import React from 'react';

import './styles.scss';

import Facebook from '../../assets/Facebook.svg'; 
import Instagram from '../../assets/Instagram.svg'; 
import Youtube from '../../assets/Youtube.svg'; 
import Telephone from '../../assets/Telephone.svg';
import CardVisa from '../../assets/CardVisa.svg';
import CardElo from '../../assets/CardElo.svg';
import CardMastercard from '../../assets/CardMastercard.svg';
import Ticket from '../../assets/Ticket.svg';
import CardDiners from '../../assets/CardDiners.svg';
import CardAmerican from '../../assets/CardAmerican.svg';
import Encrypt from '../../assets/Encrypt.svg';
import LogoEconverse from '../../assets/LogoEconverse.svg';
import LogoVtex from '../../assets/LogoVtex.svg';

export default function Footer() {
  return (
      <footer>

<div className='firstColumn'>
                <h2>
                    Nos siga nas nossas 
                    <br/> 
                    redes sociais
                </h2>
                <ul>
                <a href="#">
                    <img src={Facebook} alt="Facebook"/>
                </a>
                    
                        <a href="#">
                            <img src={Instagram} alt="Instagram"/>
                        </a>
                    
                    
                        <a href="#">
                            <img src={Youtube} alt="Youtube"/>
                        </a>
                    
                </ul>
                <h2>Sobre O Cãoselheiro</h2>
                <p>
                Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma empresa que nasceu para contribuir para uma melhor qualidade de vida dos cães e seus familiares humanos. Seus sócios são profissionais de educação canina que trabalham seguindo metodologias positivas de treinamento animal, encorajando e recompensando os acertos de nossos amigos em seus processos de adestramento. Aqui você encontrará apenas itens de qualidade comprovada e utilizados pessoalmente por seus idealizadores. Fique à vontade!
                </p>
            </div>

            <div className='lastColumn'>
                <div className='lastColumn__firstRow'>
                    <div>
                        <h2>Assinatura</h2>
                        <h2>Parceiros</h2>
                    </div>
                    <div>
                        <h2>Institucional</h2>
                        <ul>
                            <li>
                                <a href="/">Quem somos</a>
                            </li>
                            <li>
                                <a href="/">Política de privacidade</a>
                            </li>
                            <li>
                                <a href="/">Política comercial</a>
                            </li>
                            <li>
                                <a href="/">Política de devolução</a>
                            </li>
                            <li>
                                <a href="/">Regras de frete</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Atendimento</h2>
                        <ul>
                            <li>
                                <a href="/">Fale conosco</a>
                            </li>
                            <li>
                                <img src={Telephone} alt="Telefone" />
                                <a href="/">(11) 97212-1314</a>
                            </li>
                            <li>
                                <a href="/">ocaoselheiro@ocaoselheiro.com.br</a>
                            </li>
                            <li>
                                <a href="/">Trabalhe conosco</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='lastColumn__secondRow'>
                    <div>
                        <h2>Formas de pagamento</h2>
                        <div className='lastColumn__secondRow__cards'>
                            <img src={CardVisa} alt="Cartão Visa"/>
                            <img src={CardElo} alt="Cartão Elo"/>
                            <img src={CardMastercard} alt="Cartão Mastercard"/>
                            <img src={Ticket} alt="Boleto" />
                            <img src={CardDiners} alt="Cartão Diners"/>
                            <img src={CardAmerican} alt="Cartão American"/>
                        </div>
                    </div>
                    <div>
                        <h2>Segurança</h2>
                        <img src={Encrypt} alt="Segurança"/>
                    </div>
                </div>

                <div className='lastColumn__lastRow'>
                    <span>
                        O Cãoselheiro Comércio LTDA <br/>
                        CNPJ: 30.324.633/0001-16 <br/>
                        © Todos os direitos reservados. 2021
                    </span>

                    <div>
                        <img src={LogoEconverse} alt="Econverse"/>
                        <img src={LogoVtex} alt="VTEX"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}