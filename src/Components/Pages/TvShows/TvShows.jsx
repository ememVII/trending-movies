import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Pagination from './../../UI/Pagination/Pagination';
import { fetchTv } from "../../../store/fetchDataSlice";
import MediaContent from "../../Trending/Media/MediaContent";
import Loading from './../../UI/Loading/Loading';
import Error from './../../UI/Error/Error';
import { motion } from "framer-motion";

export default function TvShows() {
  
  const dispatch = useDispatch()
  
  const {tv, isLoading, error, totalPages} = useSelector((state) => state.fetchData)
  
  const pageChangeHandler = (page) => {
    dispatch(fetchTv(page))
  }
  
  useEffect(() => {
    dispatch(fetchTv(1))
  }, [])
  
  if(isLoading) {
    return <Loading/>
  }
  
  if(error) {
    return <Error/>
  }
  
  return (
    <motion.div className="row mt-4 d-flex justify-content-center" initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1}}>
      {tv && tv.map((tv) =>
        <motion.div className="col-md-2 my-3" key={tv.id} initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 0.3}} whileHover={{scale: 1.1}}>
          <div className="media position-relative">
            <MediaContent mediaType={tv} type={'tv'}/>
          </div>
        </motion.div>)}
      
      <Pagination totalPages={totalPages} onChangePage={pageChangeHandler}/>
    </motion.div>
  )
}
