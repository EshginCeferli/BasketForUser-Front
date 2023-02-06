import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/css/BannerSlider/bannerSlider.css";

function BannerSlider() {
  return (
    <div>
      <section id="slider-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 p-0">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <Swiper
                    loop={true}
                    spaceBetween={10}
                    effect={"coverflow"}
                    grabCursor={true}
                    slidesPerView="1"
                    centeredSlides={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src="/images/slide-01.jpg" alt="" />
                        <div className="slider-detail">
                          <p>Women Collection 2018</p>
                          <h1>NEW SEASON</h1>
                          <a href="">
                            <button type="button" className="my-btn">
                              Shop Now
                            </button>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src="/images/slide-02.jpg" alt="" />
                        <div className="slider-detail">
                          <p>Men New-Season</p>
                          <h1>JACKETS &amp; COATS</h1>
                          <a href="">
                            <button type="button" className="my-btn">
                              Shop Now
                            </button>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src="/images/slide-03.jpg" alt="" />
                        <div className="slider-detail">
                          <p>Men Collection 2018</p>
                          <h1>NEW ARRIVALS</h1>
                          <a href="">
                            <button type="button" className="my-btn">
                              Shop Now
                            </button>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BannerSlider;
