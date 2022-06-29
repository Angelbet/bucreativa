import Image from "next/image";
import portafolio_1 from "../styles/assets/img/portfolio-1.jpg"
import portafolio_2 from "../styles/assets/img/portfolio-2.jpg"
import portafolio_3 from "../styles/assets/img/portfolio-3.jpg"
import portafolio_4 from "../styles/assets/img/portfolio-4.jpg"
import portafolio_5 from "../styles/assets/img/portfolio-5.jpg"
import portafolio_6 from "../styles/assets/img/portfolio-6.jpg"

import payment_1 from "../styles/assets/img/payment/payment-1.png"
import payment_2 from "../styles/assets/img/payment/payment-2.png"
import payment_3 from "../styles/assets/img/payment/payment-3.png"
import payment_4 from "../styles/assets/img/payment/payment-4.png"
import payment_5 from "../styles/assets/img/payment/payment-5.png"


function Footer() {
  return (
    <div
      className="container-fluid bg-color-footer text-light footer wow fadeIn"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeIn",
      }}
    >
      <div className="container py-5 px-lg-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3 text-footer-color">
            <p className="section-title text-white h5 mb-4">
              Dirección
              <span />
            </p>
            <p>
              <i className="fa bi bi-geo-alt-fill me-2" />
              Caracas, VE.
            </p>
            <p>
              <i className="fa bi bi-telephone-inbound-fill me-2" />
              +58 424 1412601
            </p>
            <p>
              <i className="fa bi bi-envelope-check me-2" />
              bucretiva@gmail.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab bi-twitter" />
              </a>
              <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/B%C3%BA-Creativa-112241858180778/">
                <i className="fab bi-facebook" />
              </a>
              <a className="btn btn-outline-light btn-social" href="https://instagram.com/bucreativa?igshid=YmMyMTA2M2Y=">
                <i className="fab bi-instagram" />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">
            Enlace Rápido
              <span />
            </p>
            <a className="btn btn-link" href="#nosotros">
              <i className="bi bi-caret-right-fill"></i> Nosotros
            </a>
            <a className="btn btn-link" href="">
              <i className="bi bi-caret-right-fill"></i> Contacto
            </a>
            <a className="btn btn-link" href="">
              <i className="bi bi-caret-right-fill"></i> Política de Privacidad
            </a>
            <a className="btn btn-link" href="">
              <i className="bi bi-caret-right-fill"></i> Terminos &amp; Condiciones
            </a>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">
              Galeria
              <span />
            </p>
            <div className="row g-2">
              <div className="col-4">
                <Image
                  className="img-fluid"
                  src={portafolio_1}
                  alt="Image"
                />
              </div>
              <div className="col-4">
                <Image
                  className="img-fluid"
                  src={portafolio_2}
                  alt="Image"
                />
              </div>
              <div className="col-4">
                <Image
                  className="img-fluid"
                  src={portafolio_3}
                  alt="Image"
                />
              </div>
              <div className="col-4">
                <Image
                  className="img-fluid"
                  src={portafolio_4}
                  alt="Image"
                />
              </div>
              <div className="col-4">
                <Image
                  className="img-fluid"
                  src={portafolio_5}
                  alt="Image"
                />
              </div>
              <div className="col-4">
                <Image
                  className="img-fluid"
                  src={portafolio_6}
                  alt="Image"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-footer-color">
            <p className="section-title text-white h5 mb-4">
              Medios de Pago
              <span />
            </p>
            <p>
              Contamos con diferentes métodos de pagos que se adaptan a todos nuestros clientes.
            </p>
            <div className="position-relative w-100 mt-3">
              {/* <input
                className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                type="text"
                placeholder="Your Email"
                style={{ height: 48 }}
              />
              <button
                type="button"
                className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
              >
                <i className="fa fa-paper-plane text-primary fs-4" />
              </button> */}
              <div className="footer__payment">
                <a href="#"><Image src={payment_1} alt="payment" /></a>
                <a href="#"><Image src={payment_2} alt="payment" /></a>
                <a href="#"><Image src={payment_3} alt="payment" /></a>
                <a href="#"><Image src={payment_4} alt="payment" /></a>
                <a href="#"><Image src={payment_5} alt="payment" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©<a href="#">Bú Creativa</a>
              , Todos los derechos reservados 2022.
              <br />
              <br />
              Designed By
              <a href="https://angel-cv.vercel.app" target="_blank" rel="noreferrer">
                &nbsp; Angel Becerra
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="#">Inicio</a>
                <a href="">Cookies</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
