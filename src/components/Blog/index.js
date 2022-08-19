import React from 'react';

import './styles.scss';

import BlogBannerOne from "../../assets/BlogBannerOne.svg";
import BlogBannerTwo from "../../assets/BlogBannerTwo.svg";
import BlogBannerThree from "../../assets/BlogBannerThree.svg";
import BlogBannerFour from "../../assets/BlogBannerFour.svg";
import Points from "../../assets/Points.svg";

export default function Blog({title}) {
  return (
    <main className="container-blog">
      <div className="div-title-blog">
        <h1 className="title">{title}</h1>
      </div>

      <div className="div-blog">
        <section className="section-blog">
          <section className="section-blog-banner">
            <img src={BlogBannerOne} alt="blog image one"/>
          </section>
          <section className="section-blog-title">
            <p>
              Lorem ipsum dolor sit
              <br/>
              amet consectetur.
            </p>
          </section>
          <section className="section-blog-subTitle">
            <p>
              Lorem ipsum dolor sit amet,
              <br/>
              consectetur elit adipiscing
              <br/>
              dignissim posuere vitae.
            </p>
          </section>
          <section className="section-blog-button">
            <button>LER ARTIGO</button>
          </section>
        </section>

        <section className="section-blog">
          <section className="section-blog-banner">
            <img src={BlogBannerTwo} alt="blog image two"/>
          </section>
          <section className="section-blog-title">
            <p>
              Lorem ipsum dolor sit
              <br />
              amet consectetur.
            </p>
          </section>
          <section className="section-blog-subTitle">
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur elit adipiscing
              <br />
              dignissim posuere vitae.
            </p>
          </section>
          <section className="section-blog-button">
            <button>LER ARTIGO</button>
          </section>
        </section>

        <section className="section-blog">
          <section className="section-blog-banner">
            <img src={BlogBannerThree} alt="blog image three" />
          </section>
          <section className="section-blog-title">
            <p>
              Lorem ipsum dolor sit
              <br />
              amet consectetur.
            </p>
          </section>
          <section className="section-blog-subTitle">
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur elit adipiscing
              <br />
              dignissim posuere vitae.
            </p>
          </section>
          <section className="section-blog-button">
            <button>LER ARTIGO</button>
          </section>
        </section>

        <section className="section-blog">
          <section className="section-blog-banner">
            <img src={BlogBannerFour} alt="blog image four" />
          </section>
          <section className="section-blog-title">
            <p>
              Lorem ipsum dolor sit
              <br />
              amet consectetur.
            </p>
          </section>
          <section className="section-blog-subTitle">
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur elit adipiscing
              <br />
              dignissim posuere vitae.
            </p>
          </section>
          <section className="section-blog-button">
            <button>LER ARTIGO</button>
          </section>
        </section>
      </div>

      <div className="blog-button-points">
        <button>
          <img src={Points} alt="icon three points" />
        </button>
      </div>
    </main>
  );
}
