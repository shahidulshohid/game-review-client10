import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ReviewDetailsPage = () => {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const detailsData = useLoaderData();
  const { photo, title, description, rating, genres, userName, email } =
    detailsData;
    
    const watchListData = {
      photo,
       title, 
       description, 
       rating, 
       genres, 
       newName:user?.displayName,
       newEmail:user?.email,
      }
      const handleAddToWatchList = () => {
        if(user?.email){
          fetch('http://localhost:8000/watchList', {
            method:"POST",
            headers: {
              'content-type':'application/json'
            },
            body:JSON.stringify(watchListData)
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Yes'
              })
            }
          })
        }
        else{
          Swal.fire({
            title: 'You have to login for this action',
            icon: 'error',
            confirmButtonText: 'Back'
          })
          navigate('/login')
        }
      }
  return (
    <div className="my-12">
      <div className="lg:w-1/2 mx-auto rounded-xl border-2 p-4 bg-gray-50">
        <div>
          <img className="rounded-xl w-full" src={photo} alt="" />
        </div>
        <div>
          <h2 className="card-title my-3">{title}</h2>
          <p className="text-gray-600 mb-1">{description}</p>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Ratting: {rating}</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <h4 className="text-lg font-semibold">Genres: {genres}</h4>
          <div>
            {
                userName && <h4 className="text-xl my-1 font-semibold">UserName: {userName}</h4> 
            }
            {
                email && <p className="text-sm mb-2">Viewers Email: {email}</p>
            }
          </div>
        </div>
        <div>
        <button onClick={handleAddToWatchList} className="btn btn-secondary text-lg font-semibold w-full">
          Add to WatchList
        </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetailsPage;
