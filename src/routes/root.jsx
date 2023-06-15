import { Outlet, Link  } from "react-router-dom";
import MovieSearch from "../Components/MovieSearch";


export default function Root() {
    return (
        <>
           <div  className="bg-[#ebf6ff] h-16 w-100 flex flex-row justify-around pt-2"> 
           <div>
            <ul className=" flex flex-row justify-center ">
                <li   className="text-[#8915ac]  font-semibold hover:text-[#ffffff] hover:bg-[#8915ac] p-4">
                    <Link to={`/peliculas`}>Peliculas</Link>
                </li>
                <li className="text-[#8915ac] font-semibold  hover:text-[#ffffff] hover:bg-[#8915ac] p-4">
                    <Link to={`/tv`}  >Tv/Series</Link>

                </li>
            </ul>
            </div>
            <div className="z-50">
            <MovieSearch />
            </div>
        </div>
    
            <div id="detail">
            <Outlet />
            </div>
        </>
    );
}