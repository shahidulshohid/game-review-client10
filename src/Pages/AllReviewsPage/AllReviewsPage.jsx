import { useLoaderData } from "react-router-dom";
import ShowAllReviewsData from "../ShowAllReviewsData/ShowAllReviewsData";
import { useState } from "react";

const AllReviewsPage = () => {
  const allReviewsData = useLoaderData();

  const [allData, setAllData] = useState([...allReviewsData])

  const sortedByRating = () => {
    const sortedData = [...allData].sort((a, b) => b.rating - a.rating);
    setAllData([...sortedData]);
  }

  const sortedYYear = () => {
    const sortedData = [...allData].sort((a, b) => a.sal - b.sal)
    setAllData([...sortedData])
  }

  return (
    <div className=" my-12 text-pink-500">
      <div className="flex justify-center items-center mb-6">
        <h3 className="text-3xl font-bold">All Reviews</h3>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1 text-xl text-pink-500 border-2 border-green-500">
            Sorted
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-lg z-[1] right-0 w-32 fond-semibold text-lg p-2 shadow"
          >
            <li>
              <button onClick={sortedByRating} className="text-lg text-semibold text-black">By Rating</button>
            </li>
            <li>
              <button onClick={sortedYYear} className="text-lg text-semibold text-black">By Year</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allData?.map((review) => (
          <ShowAllReviewsData
            key={review._id}
            review={review}
          ></ShowAllReviewsData>
        ))}
      </div>
    </div>
  );
};

export default AllReviewsPage;
