import { Link } from "react-router-dom";
import fourZeroFourImg from "../../assets/errorImag.jpg"
const ErrorPage = () => {
    return (
        <div className="my-24">
            <div>
                <img className="rounded-xl max-w-sm mx-auto" src={fourZeroFourImg} alt="" />
            </div>
            <h1 className="text-7xl text-center my-6 text-secondary">Not Found Page</h1>
            <div className="text-center">
            <Link to="/"><button className="bg-purple-500 text-white text-lg font-semibold py-3 px-4 rounded-xl">back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;