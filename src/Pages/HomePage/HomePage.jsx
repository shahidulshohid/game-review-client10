import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import HeightRatedCame from "../../components/HeightRatedGame/HeightRatedCame";

const HomePage = () => {
    const addReviewsData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
        <h2 className="text-center text-3xl font-bold mb-8 mt-12 text-pink-500">Highest Rated Game</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
            addReviewsData?.map(reviewData => <HeightRatedCame key={reviewData._id} reviewData={reviewData}></HeightRatedCame>)
            }
            </div>
        </div>
    );
};

export default HomePage;