// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Landing.css';

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
                {/* <h1>Fabio</h1>
                <h3>
                The First African Bicycle Information Organization using bicycles as a tool for social transformation
                </h3> */}

                <img className="swiper-slide img" src="https://photography.bicyclingaroundtheworld.nl/wp-content/uploads/2019/01/africa-children-bicycle-water.jpg" alt="water bike"></img>
            </SwiperSlide>
            <SwiperSlide>
                {/* <p>
                A Bicycle make a change. The solution is as old as good. To get out of 
                poverty, accessibility is one of the most important tools.  The bicycle 
                drastically improves this in an eco-friendly way. Easy to repair and 
                maintain, in many cases the bicycle is a suitable response to the 
                challenges people face. FABIO is aiming to spread the idea of cycling for 
                a better future.
                </p> */}
                <img className="swiper-slide img" src="https://www.un.org/sites/un2.un.org/files/field/image/2022/06/wbr_healthcare3.jpg" alt="lady bike"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className="swiper-slide img" src="https://cdn.shopify.com/s/files/1/0266/8632/4820/articles/booomers-unicef_47_2048x.jpg?v=1574111150" alt="school bike"></img>
                
            </SwiperSlide>
        </Swiper>
      </section>
    );
};