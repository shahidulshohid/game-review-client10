import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const AddReviewsPage = () => {
  const { user } = useContext(AuthContext);

  const handleAddReview = (e) => {
    e.preventDefault()
    const form = e.target
    const photo = form.photo.value 
    const title = form.title.value 
    const description = form.description.value
    const rating = parseInt(form.rating.value )
    const sal = parseInt(form.sal.value )
    const genres = form.genres.value
    const email = form.email.value 
    const userName = form.userName.value 
    const AddReviewData = {photo, title, description, rating, sal, genres, email, userName}

    // send to the server 
    fetch('http://localhost:8000/addReviews', {
      method:'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body:JSON.stringify(AddReviewData)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          title: 'Add Reviews Successfully!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Yes'
        })
      }
    })
  }
    return (
        <div>
      <div className="bg-[#F4F3F0] p-6 lg:p-12 my-12 rounded-xl">
        <h2 className="text-3xl text-center font-bold">Add New Review</h2>
        <form onSubmit={handleAddReview}>
            {/* first row */}
          <div className="md:flex gap-6">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Game Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Game Title"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* second row  */}
          <div className="md:flex gap-6 ">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Review Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Review Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full md:w-1/2">
            <label className="label">
                <span className="label-text font-bold">Rating</span>
              </label>
              <select className="input input-bordered " name="rating" id="rating">
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='1'>10</option>
              </select>
            </div>
          </div>
          {/* third row  */}
          <div className="md:flex gap-6 ">
          <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Publishing year</span>
              </label>
              <select className="input input-bordered " name="sal" id="sal">
                <option value="2115">2010</option>
                <option value="2115">2011</option>
                <option value="2115">2012</option>
                <option value="2115">2013</option>
                <option value="2115">2014</option>
                <option value="2115">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Genres</span>
              </label>
              <select className="input input-bordered " name="genres" id="year">
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Shooter">Shooter</option>
                <option value="Sports">Sports</option>
                <option value="Fighting">Fighting</option>
                <option value="Racing">Racing</option>
                <option value="Puzzle">Puzzle</option>
                <option value="RPG">RPG</option>
                <option value="Simulation">Simulation</option>
                <option value="Survival">Survival</option>
              </select>
            </div>
          </div>
          {/* fourth row */}
          <div className="md:flex gap-6 ">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email} readOnly
                placeholder="Email "
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">User Name</span>
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={user?.displayName} readOnly
                placeholder="User Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* End of Labels */}
          <input
            type="submit"
            value="Submit Review"
            className="btn w-full bg-pink-500 text-white mt-6 text-xl font-semibold"
          />
        </form>
      </div>
    </div>
    );
};

export default AddReviewsPage;

