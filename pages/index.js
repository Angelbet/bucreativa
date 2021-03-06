import Head from "next/head";
import Image from "next/image";

import Footer from "../components/Footer";
import Script1 from "../components/Script1";
import Portfolio from "../components/Portfolio";
import Navbar from "../components/Navbar";

import "bootstrap-icons/font/bootstrap-icons.css";

import hero_new from "../styles/assets/img/img-hero-new.png";
import ita_new from "../styles/assets/img/logo-2.png";

import team_1 from "../styles/assets/img/MarketingDigital.png";
import team_2 from "../styles/assets/img/Programación.png";
import team_3 from "../styles/assets/img/DiseñoGráfico.png";

import jQuery from "jquery";
import $ from "jquery";


export default function Home() {

  if (typeof window !== "undefined") {
    $(document).ready(function () {
      $(".counter").each(function () {
        var count = $(this);
        var countTo = count.attr("data-count");
        // console.log(countTo);
        $({ countNum: count.text() }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 5000,
            easing: "linear",
            step: function () {
              count.text(Math.floor(this.countNum));
            },
            complete: function () {
              count.text(this.countNum);
            },
          }
        );
      });
    });
  }


  return (
    <>
      <Head>
        <title>Bú Creativa</title>
        <meta name="description" content="Somos tu mejor opción digital." />
      </Head>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <Navbar />
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center pb-4">
              <Image src={ita_new} alt="Logo Ita" className="img-fluid" />
              <h2>
                Entérate cuáles son los caminos para desarrollar e implementar
                en el mundo tecnológico.
              </h2>
              <div className="d-flex" id="nosotros">
                <a
                  href="mailto:bucretiva@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-get-started scrollto"
                >
                  Contáctanos
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <Image
                src={hero_new}
                className="img-fluid animated"
                alt="Hero Principal"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="about-section">
          <div className="inner-container">
            <h1>
              <i className="bi bi-star-fill p-1"></i>
              <i className="bi bi-star-fill p-1"></i>
              <i className="bi bi-star-fill p-1"></i>
              <i className="bi bi-star-fill p-1"></i>
              <i className="bi bi-star-fill p-1"></i>
            </h1>
            <h2 className="title-about">#Tecnólogia</h2>
            <h1 className="title-about-2">Nosotros</h1>
            <p className="text">
              Somos una agencia creativa dedicada a crear estrategias y
              herramientas de comunicación, tecnología y marketing digital.
              Ofrecemos soluciones personalizadas que se adaptan a las
              necesidades de nuestros clientes, encaminando al éxito sus ideas y
              proyectos apoyándolos en cada paso de su camino. Contamos con un
              equipo interdisciplinario que nos permite la especialización en
              distintas áreas de marketing, tecnología, producciones y mucho
              más.
            </p>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section id="main">
        <div className="container"></div>
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <h1 className="mb-5 title-about-2 text-center">
              Nuestros <span>Objetivos</span>
            </h1>
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="feature-item bg-color-1 rounded-m text-center p-4">
                  <i className="fa fa-3x bi bi-envelope-check-fill text-primary mb-4" />
                  <h2 className="mb-3 title-about-3">Visión</h2>
                  <p className="m-0">
                    Ofrecer soluciones de comunicación digital, tecnología, y
                    crisis organizacionales, basada en la creatividad, la
                    innovación y los canales pertinentes que impulsen al logro
                    de los objetivos de nuestros clientes.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 wow fadeInUp animated"
                data-wow-delay="0.3s"
                style={{ visibility: "visible", animationDelay: "0.3s" }}
              >
                <div className="feature-item bg-color-1 rounded-m text-center p-4">
                  <i className="fa fa-3x bi bi-search text-primary mb-4" />
                  <h2 className="mb-3 title-about-3">Misión</h2>
                  <p className="m-0">
                    Ser una agencia reconocida por la responsabilidad,
                    estrategias, innovación y desarrollo en las áreas de
                    tecnología y marketing digital, con una alta productividad,
                    talento de su equipo y sus colaboradores.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature-item bg-color-1 rounded-m text-center p-4">
                  <i className="fa fa-3x bi bi-laptop text-primary mb-4" />
                  <h2 className="mb-3 title-about-3">Objetivos</h2>
                  <p className="m-0">
                    Capacitar, desarrollar, crear e impulsar todos los
                    requerimientos e ideas de nuestros clientes, llevándolos a
                    obtener los mejores resultados de calidad y con los mejores
                    estándares de calidad y eficacia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Objetivos */}

      {/* Clientes */}
      <div className="container-xxl bg-color-2 fact py-5">
        <div className="container py-5 px-lg-5">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 text-center">
              <i className="fa bi bi-patch-check-fill fa-3x text-secondary mb-3" />
              <h1
                className="text-white mb-2 counter"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-count="5"
              >
                0
              </h1>
              <p className="text-white mb-0">Años de Experiencia</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center">
              <i className="fa bi-people-fill fa-3x text-secondary mb-3" />
              <h1
                className="text-white mb-2 counter"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-count="3"
              >
                0
              </h1>
              <p className="text-white mb-0">Miembros del Equipo</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center">
              <i className="fa bi bi-person-hearts fa-3x text-secondary mb-3" />
              <h1
                className="text-white mb-2 counter"
                data-count="11"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                0
              </h1>
              <p className="text-white mb-0">Clientes Satisfechos</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center">
              <i className="fa bi bi-bookmark-check-fill fa-3x text-secondary mb-3" />
              <h1
                className="text-white mb-2 counter"
                data-count="15"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                0
              </h1>
              <p className="text-white mb-0">Proyectos Completados</p>
            </div>
          </div>
        </div>
      </div>
      {/* Clientes */}

      {/* Servicios */}
      <section id="servicios">
        <div className="fh5co-work-2">
          <div className="container-xxl py-5">
            <div className="container-xxl">
              <div className="container px-lg-5">
                <div>
                  <div className="section-heading">
                    <h1 className="mb-5 title-about-3 text-center">
                      Nuestros <span>Servicios</span>
                    </h1>
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="service-item d-flex flex-column text-center border-2">
                      <div className="service-icon flex-shrink-0">
                        <i className="fa bi-binoculars fa-2x" />
                      </div>
                      <h5 className="mb-3 item">SEO</h5>
                      <p className="m-0">
                        Con el objetivo de llevar a tu web a las primeros
                        lugares de los buscadores mas importantes.
                      </p>
                      <a className="btn btn-square">
                        <i className="fa bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="service-item d-flex flex-column text-center border-2">
                      <div className="service-icon flex-shrink-0">
                        <i className="fa bi bi-code-slash fa-2x" />
                      </div>
                      <h5 className="mb-3 item">Diseño Web</h5>
                      <p className="m-0">
                        Diseño de portales profesionales a la medida y 100%
                        optimazados para el SEO.
                      </p>
                      <a className="btn btn-square">
                        <i className="fa bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="service-item d-flex flex-column text-center border-2">
                      <div className="service-icon flex-shrink-0">
                        <i className="fab bi bi-cart fa-2x" />
                      </div>
                      <h5 className="mb-3 item">Tiendas Virtuales</h5>
                      <p className="m-0">
                        Creación de E-commerce en Woocommerce, Prestashop,
                        Magneto, Wordpress, Shopify.
                      </p>
                      <a className="btn btn-square">
                        <i className="fa bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="service-item d-flex flex-column text-center border-2">
                      <div className="service-icon flex-shrink-0">
                        <i className="fa bi-megaphone fa-2x" />
                      </div>
                      <h5 className="mb-3 item">Social Media</h5>
                      <p className="m-0">
                        Gestión estrategias de redes sociales, mejor alcance y
                        oportunidades de marca.
                      </p>
                      <a className="btn btn-square">
                        <i className="fa bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="service-item d-flex flex-column text-center border-2">
                      <div className="service-icon flex-shrink-0">
                        <i className="fa bi bi-hand-thumbs-up fa-2x" />
                      </div>
                      <h5 className="mb-3 item">ADS</h5>
                      <p className="m-0">
                        Amplio alcance de tu marca con uno de los métodos
                        publicitarios mas efectivos.
                      </p>
                      <a className="btn btn-square">
                        <i className="fa bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="service-item d-flex flex-column text-center border-2">
                      <div className="service-icon flex-shrink-0">
                        <i className="fab bi bi-phone fa-2x" />
                      </div>
                      <h5 className="mb-3 item">Desarrollo de Apps</h5>
                      <p className="m-0">
                        Diseño y desarrollo de aplicaciones moviles
                        multiplataforma.
                      </p>
                      <a className="btn btn-square">
                        <i className="fa bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Servicios */}

      {/* Plans */}
      <div id="pricing" className="pricing-tables py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 mb-3">
              <div className="section-heading">
                <h1 className="mt-5 mb-5 title-about-2">
                  Nuestros <span>Planes</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="item first-item">
                <h4>Bú Capital</h4>
                {/* <em>$80/mo</em> */}
                <span>$80</span>
                <ul className="padding-pricing">
                  <li>Landing Pages</li>
                  <li>Estrategia de Marketing</li>
                  <li>20 SEO checkups</li>
                  <li>Basic Support</li>
                </ul>
                <a
                  href="mailto:bucretiva@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-get-started scrollto"
                >
                  Contáctanos
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item second-item">
                <h4>Bú País</h4>
                {/* <em>$120/mo</em> */}
                <span>$120</span>
                <ul className="padding-pricing">
                  <li>20 Projects</li>
                  <li>200 GB space</li>
                  <li>50 SEO checkups</li>
                  <li>Pro Support</li>
                </ul>
                <a
                  href="mailto:bucretiva@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-get-started scrollto"
                >
                  Contáctanos
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item third-item">
                <h4>Bú Global</h4>
                {/* <em>$360/mo</em> */}
                <span>$200</span>
                <ul className="padding-pricing">
                  <li>30 Projects</li>
                  <li>300 GB space</li>
                  <li>100 SEO checkups</li>
                  <li>Best Support</li>
                </ul>
                <a
                  href="mailto:bucretiva@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-get-started scrollto"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Plans */}

      {/* Equipo */}
      <section id="fh5co-work">
        <div className="container-xxl py-5">
          <div className="container py-3 px-lg-5">
            <h1 className="text-center title-about-3 mb-5">
              Nuestro <span>Equipo</span>
            </h1>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="team-item bg-light-3 rounded-m">
                  <div className="text-center border-bottom p-4">
                    <Image
                      className="img-fluid rounded-circle"
                      src={team_1}
                      alt="Equipo 1"
                    />
                    <h5>Henry Alcocer</h5>
                    <span>CEO &amp; Marketing</span>
                  </div>
                  <div className="d-flex justify-content-center p-4">
                    <a className="btn btn-square-2 mx-1" href="">
                      <i className="fab bi bi-facebook" />
                    </a>
                    <a className="btn btn-square-2 mx-1" href="">
                      <i className="fab bi bi-instagram" />
                    </a>
                    <a className="btn btn-square-2 mx-1" href="">
                      <i className="fab bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-item bg-light-2 rounded-m">
                  <div className="text-center border-bottom p-4">
                    <Image
                      className="img-fluid rounded-circle"
                      src={team_2}
                      alt="Equipo 2"
                    />
                    <h5>Angel Becerra</h5>
                    <span>Diseñador Web</span>
                  </div>
                  <div className="d-flex justify-content-center p-4">
                    <a
                      className="btn btn-square-2 mx-1"
                      href="https://www.facebook.com/AngelBecerra13"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab bi bi-facebook" />
                    </a>
                    <a
                      className="btn btn-square-2 mx-1"
                      href="https://github.com/Angelbet/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab bi bi-github" />
                    </a>
                    <a
                      className="btn btn-square-2 mx-1"
                      href="https://www.instagram.com/angil_b3/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab bi bi-instagram" />
                    </a>
                    <a
                      className="btn btn-square-2 mx-1"
                      href="http://linkedin.com/in/angel-becerra-2a4435202"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-item bg-light-4 rounded-m">
                  <div className="text-center border-bottom p-4">
                    <Image
                      className="img-fluid rounded-circle"
                      src={team_3}
                      alt="Equipo 3"
                    />
                    <h5>Gunther Calderas</h5>
                    <span>Diseñador Gráfico</span>
                  </div>
                  <div className="d-flex justify-content-center p-4">
                    <a className="btn btn-square-2 mx-1" href="">
                      <i className="fab bi bi-facebook" />
                    </a>
                    <a className="btn btn-square-2 mx-1" href="">
                      <i className="fab bi bi-behance" />
                    </a>
                    <a className="btn btn-square-2 mx-1" href="">
                      <i className="fab bi bi-instagram" />
                    </a>
                    <a className="btn btn-square-2 mx-1" href="">
                      <i className="fab bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Equipo */}

      {/* Brand Logos */}

      

      <div className="wrap">
        <ul className="clients row justify-content-center">
          <li className="col-lg-2">
            <a href="">
              <img
                src="https://webslides.tv/static/images/logos/google.svg"
                alt="Google"
              />
            </a>
          </li>
          <li className="col-lg-2">
            <a href="">
              <img
                src="https://webslides.tv/static/images/logos/airbnb.svg"
                alt="Airbnb"
              />
            </a>
          </li>
          <li className="col-lg-2">
            <a href="">
              <img
                src="https://webslides.tv/static/images/logos/apple.svg"
                alt="Apple"
              />
            </a>
          </li>
          <li className="col-lg-2">
            <a href="">
              <img
                src="https://webslides.tv/static/images/logos/microsoft.svg"
                alt="Microsoft"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Brand Logos */}

      {/* Portafolio */}
      <Portfolio />
      {/* Portafolio */}

      {/* Intagram Post */}
      <section className="instagram spad pb-5">
        <div className="instagram">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg insta_1">
                  <div className="instagram__text">
                    <i className="fa fa-instagram" />
                    <a href="https://instagram.com/bucreativa?igshid=YmMyMTA2M2Y=">
                      @ Bucreativa
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg insta_2">
                  <div className="instagram__text">
                    <i className="fa fa-instagram" />
                    <a href="#">@ Bucreativa</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  className="instagram__item set-bg insta_3"
                  data-setbg="./insta-3.jpg"
                >
                  <div className="instagram__text">
                    <i className="fa fa-instagram" />
                    <a href="#">@ Bucreativa</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  className="instagram__item set-bg insta_4"
                  data-setbg="img/instagram/insta-4.jpg"
                >
                  <div className="instagram__text">
                    <i className="fa fa-instagram" />
                    <a href="#">@ Bucreativa</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  className="instagram__item set-bg insta_5"
                  data-setbg="img/instagram/insta-5.jpg"
                >
                  <div className="instagram__text">
                    <i className="fa fa-instagram" />
                    <a href="#">@ Bucreativa</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  className="instagram__item set-bg insta_6"
                  data-setbg="img/instagram/insta-6.jpg"
                >
                  <div className="instagram__text">
                    <i className="fa fa-instagram" />
                    <a href="#">@ Bucreativa</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Intagram Post */}
      <div className="container-xxl">
        <Footer />
      </div>
      <Script1 />
    </>
  );
}
