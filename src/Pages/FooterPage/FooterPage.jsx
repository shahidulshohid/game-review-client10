
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import logo from '../../assets/logo.jpg'
const FooterPage = () => {
    return (
        <div className="my-12 bg-pink-300 w-11/12 mx-auto rounded-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 px-5 py-8 gap-6">
                <div>
                    <div>
                        <img className="w-10 h-10 md:w-12 md:h-12 rounded-full" src={logo} alt="logo" />
                    </div>

                    <p className="text-sm font-semibold text-gray-800 my-3">Explore the vibrant world of game development with your ultimate destination for innovative games and industry insights. </p>
                    <div className="flex gap-6">
                    <FaFacebookF className="text-xl w-9 h-9 bg-white p-2 rounded-full hover:text-white hover:bg-pink-500" />
                    <FaTwitter className="text-xl w-9 h-9 bg-white p-2 rounded-full hover:text-white hover:bg-pink-500" />
                    <FaInstagram className="text-xl w-9 h-9 bg-white p-2 rounded-full hover:text-white hover:bg-pink-500" />
                    <FaLinkedin className="text-xl w-9 h-9 bg-white p-2 rounded-full hover:text-white hover:bg-pink-500" />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Game List</h3>
                    <ul>
                        <li className="text-sm font-semibold">Action & Adventure</li>
                        <li className="text-sm font-semibold">Role-Playing Games (RPG)</li>
                        <li className="text-sm font-semibold">Battle Royale</li>
                        <li className="text-sm font-semibold">Sports</li>
                        <li className="text-sm font-semibold">Simulation & Strategy</li>
                        <li className="text-sm font-semibold">Horror</li>
                        <li className="text-sm font-semibold">First-Person Shooter (FPS)</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Support</h3>
                    <ul>
                        <li className="text-sm font-semibold">My Account</li>
                        <li className="text-sm font-semibold">Community</li>
                        <li className="text-sm font-semibold">FAQ</li>
                        <li className="text-sm font-semibold">Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="text-center pb-4">
                <p>Copyright© 2024 Game, All rights reserved. </p>
            </div>
        </div>
    );
};

export default FooterPage;