import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage"
import ALLReviewsPage from "../Pages/AllReviewsPage/AllReviewsPage"
import AddReviewsPage from "../Pages/AddReviewsPage/AddReviewsPage";
import MyReviewsPage from "../Pages/MyReviewsPage/MyReviewsPage";
import GameWatchListPage from "../Pages/GameWatchListPage/GameWatchListPage"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>
            },
            {
                path:'/allReviews',
                element:<ALLReviewsPage></ALLReviewsPage>
            },
            {
                path:'/addReviews',
                element:<AddReviewsPage></AddReviewsPage>
            },
            {
                path:'/myReviews',
                element:<MyReviewsPage></MyReviewsPage>
            },
            {
                path:'/gameWatchList',
                element:<GameWatchListPage></GameWatchListPage>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router