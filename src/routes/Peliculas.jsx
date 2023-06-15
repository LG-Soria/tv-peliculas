import PeliculasPopulares from "../Components/Peliculas/PeliculasPopulares";
import PeliculasTrending from "../Components/Peliculas/PeliculasTrending";


const Peliculas = () => {
    return (
        <div id="peliculas" className='peliculas z-0'>
        <PeliculasTrending />
        <PeliculasPopulares />

     
      </div>
    )
}

export default Peliculas;