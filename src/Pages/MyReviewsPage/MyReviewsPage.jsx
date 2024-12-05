import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyReviewTable from "../MyReviewTable/MyReviewTable";

const MyReviewsPage = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const [myReviewsData, setMyReviewsData] = useState(null);

  useEffect(() => {
    const matchEmailData = data.filter((fil) => fil.email === user?.email);
    setMyReviewsData(matchEmailData);
  }, [data]);

  return (
    <div className="bg-[#F4F3F0] rounded-xl my-12 py-6">
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-black text-lg">Photo</th>
              <th className="text-black text-lg">Title</th>
              <th className="text-black text-lg hidden lg:flex">Email</th>
              <th className="text-black text-lg">Rating</th>
              <th className="text-black text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                myReviewsData?.map(reviewData => <MyReviewTable key={reviewData._id} reviewData={reviewData} myReviewsData={myReviewsData} setMyReviewsData={setMyReviewsData}></MyReviewTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviewsPage;



           