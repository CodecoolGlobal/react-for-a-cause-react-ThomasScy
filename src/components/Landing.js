// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Landing.css';

import ImageWaterBike from "./images/landingpic1.jpg";
import ImageLadyBike from "./images/landingpic2BW.jpg";
import ImageSchoolBike from "./images/landingpic3.webp";


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
                    delay: 20000,
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
                        imgSrc={ImageWaterBike}
                        imgAlt={"water bike"}
                        title={"Fabio"}
                        text={"Who we are and what we stand for..."}
                        classString={"one"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        imgSrc={ImageWaterBike}
                        imgAlt={"water bike"}
                        title={""}
                        text={"We are 'The First African Bicycle Information Organization' using bicycles as a tool for social transformation."}
                        classString={"one"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        imgSrc={ImageLadyBike}
                        imgAlt={"lady bike"}
                        title={"Our Motivation"}
                        text={"is based on daily challenges..."}
                        classString={"one"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        imgSrc={ImageLadyBike}
                        imgAlt={"lady bike"}
                        title={""}
                        text={"Some of the challenges are that transport routes are still done on foot while carrying cargo by head. Distances to work or school can take up to 2-3 hours. Using bikes instead saves daily productive time and increases live quality for each individual."}
                        classString={"one"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        imgSrc={ImageSchoolBike}
                        imgAlt={"school bike"}
                        title={"Our Future"}
                        text={"Developing our common future means changing old habits..."}
                        classString={"one"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        imgSrc={ImageSchoolBike}
                        imgAlt={"school bike"}
                        title={""}
                        text={"Riding a bicycle makes a change. To get out of poverty, accessibility is one of the most important tools. FABIO is aiming to spread the idea of cycling for a better future. Therefore we are thankful for every kind of support."}
                        classString={"one"}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

function Slide({ imgSrc, imgAlt, title, text, classString }) {
    return (

        <div className="slide-container">
            <img className="swiper-slide img" src={imgSrc} alt={imgAlt}></img>
            <div className={`text-container ${classString}`}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>

    )

}