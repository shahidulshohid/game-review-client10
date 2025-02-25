import bannerImg1 from "../../assets/banner1.jpg";
import bannerImg2 from "../../assets/banner2.jpg";
import bannerImg3 from "../../assets/banner3.jpg";
import bannerImg4 from "../../assets/banner4.jpg";
import bannerImg5 from "../../assets/banner5.jpg";
import { Fade } from "react-awesome-reveal";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg1})`,
              height: "380px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="border border-orange-600 rounded-xl bg-base-100">
              <div className="m-3 max-w-lg p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl">
                <Fade direction="down">
                <h3 className="text-white text-2xl md:text-4xl font-bold text-center">
                  Play with anyone, anywhere, and any device.
                </h3>
                </Fade>
                <Fade direction="right">
                <p className="text-center text-white font-semibold text-sm mt-3">
                  Explore the vibrant world of game development with game - your
                  ultimate destination for innovative games and industry
                  insights.
                </p>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center "
            style={{
              backgroundImage: `url(${bannerImg2})`,
              height: "380px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="border border-orange-600 rounded-xl bg-base-100">
              <div className="m-3 max-w-lg p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl">
                <h3 className="text-white text-2xl md:text-4xl font-bold text-center">
                  Play with anyone, anywhere, on any device.
                </h3>
                <p className="text-center text-white font-semibold text-sm mt-3">
                  Explore the vibrant world of game development with game - your
                  ultimate destination for innovative games and industry
                  insights.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg3})`,
              height: "380px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="border border-orange-600 rounded-xl bg-base-100">
              <div className="m-3 max-w-lg p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl">
                <h3 className="text-white text-2xl md:text-4xl font-bold text-center">
                  Play with anyone, anywhere, on any device.
                </h3>
                <p className="text-center text-white font-semibold text-sm mt-3">
                  Explore the vibrant world of game development with game - your
                  ultimate destination for innovative games and industry
                  insights.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg4})`,
              height: "380px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="border border-orange-600 rounded-xl bg-base-100 z-0">
              <div className="m-3 max-w-lg p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl">
                <h3 className="text-white text-2xl md:text-4xl font-bold text-center">
                  Play with anyone, anywhere, on any device.
                </h3>
                <p className="text-center text-white font-semibold text-sm mt-3">
                  Explore the vibrant world of game development with game - your
                  ultimate destination for innovative games and industry
                  insights.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg5})`,
              height: "380px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="border border-orange-600 rounded-xl bg-base-100">
              <div className="m-3 max-w-lg p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl">
                <h3 className="text-white text-2xl md:text-4xl font-bold text-center">
                  Play with anyone, anywhere, on any device.
                </h3>
                <p className="text-center text-white font-semibold text-sm mt-3">
                  Explore the vibrant world of game development with game - your
                  ultimate destination for innovative games and industry
                  insights.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
