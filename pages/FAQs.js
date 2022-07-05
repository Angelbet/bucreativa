import Footer from "../components/Footer";
import Script1 from "../components/Script1";
import Navbar from "../components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
  if (typeof window !== "undefined") {
    function refresh() {
      setTimeout(function () {
        location.reload();
      }, 100);
    }
  }
  return (
    <div>
      <Navbar />

      <div>testeo</div>

      <Footer />
      <Script1 />
    </div>
  );
}

export default Home;