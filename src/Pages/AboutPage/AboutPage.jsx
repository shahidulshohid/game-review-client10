import gamer1 from "../../assets/gamer1.jpg";
import gamer2 from "../../assets/gamer2.jpg";
import gamer3 from "../../assets/gamer3.jpg";
import gamer4 from "../../assets/gamer5.jpg";
import Marquee from "react-fast-marquee";
import 'animate.css';

const AboutPage = () => {
  return (
    <div className="my-16">
      <h3  className="text-center text-3xl font-bold text-white">About Us</h3>
      <p className="text-white text-center mt-2">
        Hey there! We are Hot Chili Games, a young team of passionate, spicy
        game developers.<br/> We might be small but we think big.
      </p>
      <Marquee>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        <div className="text-center mb-5 lg:mb-0">
            <img className="w-full h-[200px]" src={gamer1} alt="" />
            <div className="mt-2 space-y-1">
                <h3 className="text-xl font-semibold text-gray-400">Pierre-Louis Verguin</h3>
                <h4 className="text-lg font-semibold text-gray-400">CTO & Game programmer</h4>
                <p className="text-gray-400 text-semibold">Working on development to create great games.</p>
            </div>
        </div>
        <div className="text-center mb-5 lg:mb-0">
            <img className="w-full h-[200px]" src={gamer2} alt="" />
            <div className="mt-2 space-y-1">
                <h3 className="text-xl font-semibold text-gray-400">Alexandre Framezelle</h3>
                <h4 className="text-lg font-semibold text-gray-400">Game art & Technical art</h4>
                <p className="text-gray-400 text-semibold">Creating dope FX and shaders to enhance game's art.</p>
            </div>
        </div>
        <div className="text-center mb-5 lg:mb-0">
            <img className="w-full h-[200px]" src={gamer3} alt="" />
            <div className="mt-2 space-y-1">
                <h3 className="text-xl font-semibold text-gray-400">Charli Mira</h3>
                <h4 className="text-lg font-semibold text-gray-400">Artistic director & Animation</h4>
                <p className="text-gray-400 text-semibold">Designing worlds and characters to please your eyes.</p>
            </div>
        </div>
        <div className="text-center">
            <img className="w-full h-[200px]" src={gamer4} alt="" />
            <div className="mt-2 space-y-1">
                <h3 className="text-xl font-semibold text-gray-400">Elliot Blazy</h3>
                <h4 className="text-lg font-semibold text-gray-400">Game programmer & Level designer</h4>
                <p className="text-gray-400 text-semibold">Fighting through scripts to get clean game experiences.</p>
            </div>
        </div>
      </div>
      </Marquee>
    </div>
  );
};

export default AboutPage;
