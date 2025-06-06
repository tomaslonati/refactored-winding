import Hero from '../sections/home/hero.jsx';
import ProductCategory from '../sections/home/productCategorys.jsx';
import BannerSherpa from '../sections/home/banner-sherpa.jsx';
import LogoCarousel from '../sections/home/logoCarousel.jsx';
import Services from '../sections/home/services.jsx';
import BannerGen from '../sections/home/bannerGen.jsx';
import SomosWinding  from '../sections/home/somosWinding.jsx';


function Home() {
    return (
        <div className="w-full">
            <Hero />
            <ProductCategory />
            <BannerSherpa />
            <LogoCarousel />
            <Services />
            <BannerGen />
            <SomosWinding />
        </div>
    );
}

export default Home;