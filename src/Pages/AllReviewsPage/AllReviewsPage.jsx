import { useLoaderData } from "react-router-dom";
import ShowAllReviewsData from "../ShowAllReviewsData/ShowAllReviewsData";

const AllReviewsPage = () => {
    const allReviewsData = useLoaderData()
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 my-12 gap-6">
            {
                allReviewsData?.map(review => <ShowAllReviewsData key={review._id} review={review}></ShowAllReviewsData>)
            }
        </div>
    );
};

export default AllReviewsPage;