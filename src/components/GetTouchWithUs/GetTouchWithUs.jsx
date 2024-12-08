
const GetTouchWithUs = () => {
    return (
        <div className="bg-[#000000] rounded-xl py-12">
            <h2 className="text-center mb-6 text-white text-3xl font-bold">Get Touch With Us</h2>
            <form className="w-8/12 mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
           <input
                type="text"
                name="sal"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            <input
                type="email"
                name="sal"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            <input
                type="number"
                name="sal"
                placeholder="Phone"
                className="input input-bordered"
                required
              />
           </div>
           <div>
            <textarea className="input input-bordered w-full h-28 my-5" placeholder="Message"></textarea>
           </div>
           <div className=" text-center">
            <button className="btn border-none text-xl text-white hover:text-black bg-pink-500">Join Now</button>
           </div>
            </form>
        </div>
    );
};

export default GetTouchWithUs;