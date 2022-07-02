import Link from "next/link";
import jQuery from "jquery";
import $ from "jquery";

if (typeof window !== "undefined") {
  (function ($) {
    $(function () {
      //  open and close nav
      $("#navbar-toggle").click(function () {
        $("nav ul").slideToggle();
      });

      // Hamburger toggle
      $("#navbar-toggle").on("click", function () {
        this.classList.toggle("active");
      });
      // If a link has a dropdown, add sub menu toggle.
      $("nav ul li a:not(:only-child)").click(function (e) {
        $(this).siblings(".navbar-dropdown").slideToggle("slow");

        // Close dropdown when select another dropdown
        $(".navbar-dropdown").not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });

      // Click outside the dropdown will remove the dropdown className
      $("html").click(function () {
        $(".navbar-dropdown").hide();
      });
    });
  })(jQuery);
   
}


function Footer() {
  return (
    <>
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <Link href="/">
              <span className="bu">Bú</span> Creativa
            </Link>
          </div>
          <nav>
            <div className="nav-mobile">
              <a id="navbar-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul className="nav-list">
              {/* <li>
          <a href="#!">Inicio</a>
        </li> */}
              <li>
                <a href="#nosotros">Nosotros</a>
              </li>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#portafolio">Portafolio</a>
              </li>
              <li>
                <a
                  href="mailto:bucretiva@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/bucreativa?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram mobile-nav-toggle"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/B%C3%BA-Creativa-112241858180778/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook mobile-nav-toggle"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Footer;
