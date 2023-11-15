import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Pagination from './../../UI/Pagination/Pagination';
import { fetchMovies } from "../../../store/fetchDataSlice";
import MediaContent from "../../Trending/Media/MediaContent";
import Loading from './../../UI/Loading/Loading';
import Error from './../../UI/Error/Error';
import { animate, motion } from "framer-motion";

export default function Movies() {
  
  const dispatch = useDispatch()
  
  const {movies, isLoading, error, totalPages} = useSelector((state) => state.fetchData)
  
  const pageChangeHandler = (page) => {
    dispatch(fetchMovies(page))
  }
  
  useEffect(() => {
    dispatch(fetchMovies(1))
  }, [])
  
  if(isLoading) {
    return <Loading/>
  }
  
  if(error) {
    return <Error/>
  }

  return (
    <motion.div className="row mt-4 d-flex justify-content-center" initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1}}>
      {movies && movies.map((movie) =>
        <motion.div className="col-md-2 my-3" key={movie.id} initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 0.3}} whileHover={{scale: 1.1}}>
          <div className="media position-relative">
            <MediaContent mediaType={movie} type={'movie'}/>
          </div>
        </motion.div>)}
      
      <Pagination totalPages={totalPages} onChangePage={pageChangeHandler}/>
    </motion.div>
  )
}
