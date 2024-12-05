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

  console.log(myReviewsData);
  return (
    <div className="bg-slate-50 my-12 py-6">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Photo</th>
              <th>Title</th>
              <th>Genres</th>
              <th>Rating</th>
              <th>Email</th>
              <th>Action</th>
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



           