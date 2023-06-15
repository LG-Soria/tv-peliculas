import TvRanking from "../Components/TV/TvPopulares";
import TvTrending from "../Components/TV/TvTrending";

const Tv = () => {
    return(
        <div id="tv" className='tv z-0'>
        <TvTrending />
        <TvRanking />
      
      </div>
    )
}

export default Tv;