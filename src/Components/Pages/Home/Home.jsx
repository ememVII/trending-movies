import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrending } from '../../../store/dataSlice'
import Trending from '../../Trending/Trending'
import Error from '../../UI/Error/Error'
import Loading from '../../UI/Loading/Loading'

export default function Home() {
  const dispatch = useDispatch()

  const trendingMovies = useSelector(state => state.data.movie[0])
  const trendingShows = useSelector(state => state.data.tv[0])
  // const trendingPeople = useSelector(state => state.data.person[0])

  useEffect(() => {
    const categories = ['movie', 'tv']
    categories.map(category => dispatch(getTrending(category)))
  }, [dispatch])

  const { error, isLoading } = useSelector(state => state.data)

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <>
          <div className="row mt-5">
            <Trending mediaType={trendingMovies} title="Movies" type="movie" />
          </div>

          <div className="row mt-5">
            <Trending mediaType={trendingShows} title="Tv Shows" type="tv" />
          </div>
          {/* 
          <div className="row mt-2">
            <Trending mediaType={trendingPeople} title="Celebrities" type="people" />
          </div> */}
        </>
      )}
    </>
  )
}
