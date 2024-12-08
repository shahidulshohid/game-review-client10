import graphicsImg from "../../assets/graphics.jpg";
import multiImg from "../../assets/multipleImg.jpg";
import simulationImg from "../../assets/simulationImg.jpg";
import devImg from "../../assets/dev.jpg";
import communityImg from '../../assets/community.jpg'
import { Fade } from "react-awesome-reveal";

const OurServices = () => {
  return (
    <div className="my-12 lg:my-24">
      <h2 className="text-3xl font-bold text-center text-pink-500">Our Services</h2>
      <p className="text-lg font-semibold  mb-6 text-center mt-2 text-green-500">
        We have kept a lots of advantage for all the gamer. Who want explore<br/>
        about game. Here game quality so heigh and strong and also powerful all feature.
      </p>

      <div className="lg:flex justify-between items-center">
        <div>
          <Fade direction="left">
          <div className="mr-6 md:flex items-center gap-2 text-center md:text-left mb-6 ">
            <img
              className="w-20 h-20 rounded-full mx-auto"
              src={devImg}
              alt=""
            />
            <div>
              <h2 className="text-xl font-bold text-pink-500">
                Game Development quality
              </h2>
              <p className="text-lg font-semibold text-green-500">
                Have develop quality and attractive animation, so can explore
                here.
              </p>
            </div>
          </div>
          <div className="md:flex items-center text-center md:text-left">
            <img
              className="w-20 h-20 rounded-full mx-auto"
              src={multiImg}
              alt=""
            />
            <div className="md:ml-3">
              <h2 className="text-xl font-bold text-pink-500">
                Multi-Platform Optimization{" "}
              </h2>
              <p className="text-lg font-semibold text-green-500">
                There are various platform to play any where, anyone and anu
                devices
              </p>
            </div>
          </div>
          <div className="mr-6 md:flex items-center gap-2 text-center md:text-left mt-6 ">
            <img
              className="w-20 h-20 rounded-full mx-auto"
              src={communityImg}
              alt=""
            />
            <div>
              <h2 className="text-xl font-bold text-pink-500">Community Building Support</h2>
              <p className="text-lg font-semibold text-green-500">
                We Have very co-operative community team. Who helps each others
              </p>
            </div>
          </div>
          <div className="mr-6 md:flex items-center gap-2 text-center md:text-left mt-6 ">
            <img
              className="w-20 h-20 rounded-full mx-auto"
              src={graphicsImg}
              alt=""
            />
            <div>
              <h2 className="text-xl font-bold text-pink-500">Graphics and Animation</h2>
              <p className="text-lg font-semibold text-green-500">
                Have graphics quality and attractive animation, so can explore
                here.
              </p>
            </div>
          </div>
          </Fade>
        </div>
        <Fade direction="right">
        <div>
          <img className="max-h-96 mx-auto rounded-xl" src={simulationImg} alt="" />
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default OurServices;