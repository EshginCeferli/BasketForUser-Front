import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/css/Brands/brands.css"

function Brands() {
  return (
    <div>
      <section id="brand-area">
        <div className="container">
          <h3>OUR BRANDS :</h3>
          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              <Swiper
                slidesPerView={"2"}
                  breakpoints={{
                  
                    576: {
                      slidesPerView: 2
                    },
                    768: {
                      slidesPerView: 4
                    },
                    1200: {
                      slidesPerView: 4
                    }
                  }}
                loop={true}
                spaceBetween={10}               
                grabCursor={true}
               
             
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="/images/Gucci_Logo .svg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="/images/Lacoste_Logo .svg.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="/images/Mango_Logo.svg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="/images/Swatch_Logo.svg.png" alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Brands;
