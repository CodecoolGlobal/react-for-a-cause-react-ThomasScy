// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Landing.css';

import ImageLadyBike from "./images/landingpic2BW.jpg";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

export default function LandingPage() {
    return (
        <section id="landing" className="landing">
            <Swiper
                spaceBetween={0}
                effect={"fade"}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={3000}
                pagination={{
                    clickable: true,
                    bulletElement: "span"
                }}
                navigation={true}
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide
                        imgSrc={"https://photography.bicyclingaroundtheworld.nl/wp-content/uploads/2019/01/africa-children-bicycle-water.jpg"}
                        imgAlt={"water bike"}
                        title={"Fabio"}
                        text={"The First African Bicycle Information Organization using bicycles as a tool for social transformation"}
                        classString={"one"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        // imgSrc={"https://www.un.org/sites/un2.un.org/files/field/image/2022/06/wbr_healthcare3.jpg"}
                        // imgSrc={"../../public/pix/landing/landingpic2BW.jpg"}
                        imgSrc={ImageLadyBike}
                        imgAlt={"lady bike"}
                        title={"The Challenge"}
                        text={"Transport is now done on foot, carrying cargo by head. Some distances to work or school take at least 2-3 hours. Using bikes instead saves daily productive time."}
                        classString={"two"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        imgSrc={"https://cdn.shopify.com/s/files/1/0266/8632/4820/articles/booomers-unicef_47_2048x.jpg?v=1574111150"}
                        imgAlt={"school bike"}
                        title={"The Change"}
                        text={"A Bicycle make a change. To get out of poverty, accessibility is one of the most important tools. FABIO is aiming to spread the idea of cycling for a better future."}
                        classString={"three"}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

function Slide({ imgSrc, imgAlt, title, text, classString }) {
    console.log(imgAlt)
    return (

        <div className="slide-container">
            <img className="swiper-slide img" src={imgSrc} alt={imgAlt}></img>
            <div className={`text-container ${classString}`}>
                <h1>{title}</h1>
                <h3>{text}</h3>
            </div>
        </div>

    )

}