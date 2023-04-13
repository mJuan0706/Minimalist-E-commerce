import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";
import Banner1 from "../img/banner/banner1.jpg";
import Banner2 from "../img/banner/banner2.jpg";

function Home() {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner
        title="Vida armoniosa creativa"
        text=" Todos los productos RAOUF están hechos en tamaños estándar para que pueda mezclarlos y combinarlos libremente."
        img={Banner1}
      />
      <TrendingSlider />
      <BannerReverse
        title="Comfortable & Elegante Living"
        text=" Todos los productos RAOUF están hechos en tamaños estándar para que pueda mezclarlos y combinarlos libremente."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
