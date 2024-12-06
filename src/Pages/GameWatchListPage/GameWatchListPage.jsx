import { useLoaderData } from "react-router-dom";
import MyWatchListTable from "../MyWatchListTable/MyWatchListTable";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const GameWatchListPage = () => {
    const watchData = useLoaderData()
    const {user} = useContext(AuthContext)
    const [watchListData, setWatchListData] = useState(watchData)
    
    useEffect(()=> {
        const matchEmailData = watchListData.filter((fil) => fil.newEmail === user?.email);
        setWatchListData(matchEmailData);
    }, [])
    
    return (
        
        <div className=" my-12"> 
            <h3 className="text-4xl text-center font-bold mb-6 text-pink-500">My watch list</h3>

        <div className="bg-[#F4F3F0] rounded-xl py-6 lg:w-10/12 mx-auto">
         <div className="overflow-x-auto ">
           <table className="table">
             {/* head */}
             <thead>
               <tr>
                 <th className="text-black text-lg">Photo</th>
                 <th className="text-black text-lg hidden lg:flex">Title</th>
                 <th className="text-black text-lg">genres</th>
                 <th className="text-black text-lg hidden lg:flex">Email</th>
                 <th className="text-black text-lg">Rating</th>
                 <th className="text-black text-lg">Action</th>
               </tr>
             </thead>
             <tbody>
           {
            watchListData?.map(listData => <MyWatchListTable key={listData._id} listData={listData}watchListData={watchListData} setWatchListData={setWatchListData}></MyWatchListTable>)
           }
         </tbody>
        </table>
      </div>
    </div>
    </div>
    );
};

export default GameWatchListPage;





   


         
 
