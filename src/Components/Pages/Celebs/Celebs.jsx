import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Pagination from '../../UI/Pagination/Pagination';
import { fetchCelebs } from "../../../store/fetchDataSlice";
import MediaContent from "../../Trending/Media/MediaContent";
import Loading from '../../UI/Loading/Loading';
import Error from '../../UI/Error/Error';
import { motion } from "framer-motion";

export default function Celebs() {
  
  const dispatch = useDispatch()
  
  const {celebs, isLoading, error, totalPages} = useSelector((state) => state.fetchData)
  
  const pageChangeHandler = (page) => {
    dispatch(fetchCelebs(page))
  }
  
  useEffect(() => {
    dispatch(fetchCelebs(1))
  }, [])
  
  if(isLoading) {
    return <Loading/>
  }
  
  if(error) {
    return <Error/>
  }
  
  return (
    <motion.div className="row mt-4 d-flex justify-content-center" initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1}}>
      {celebs && celebs.map((celebs) =>
        <div className="col-md-2" key={celebs.id}>
          <div className="media position-relative">
            <MediaContent mediaType={celebs} type={'people'}/>
          </div>
        </div>)}
      
      <Pagination totalPages={totalPages} onChangePage={pageChangeHandler}/>
    </motion.div>
  )
}
