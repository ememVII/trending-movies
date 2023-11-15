import React from 'react'
import classes from './Trending.module.css'
import MediaContent from './Media/MediaContent'
import { animate, motion } from 'framer-motion'

export default function Trending(props) {
  const { mediaType, title, type } = props

  return (
    <>
      <motion.div
        className={`${classes.mediaHeader} col-md-4 fw-bold`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>
          Top Rated <br /> Anime {title} <br /> to Watch Now
        </h2>
        <p className="text-muted">Top Rated Anime {title} of All Time</p>
      </motion.div>
      {mediaType &&
        mediaType.slice(0, 16).map(mediatype => (
          <motion.div
            className="col-md-2 my-3"
            key={mediatype.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="media position-relative">
              <MediaContent mediaType={mediatype} type={type} />
            </div>
          </motion.div>
        ))}
    </>
  )
}

/*

import React from 'react'
import classes from './Trending.module.css'
import MediaContent from './Media/MediaContent'

export default function Trending(props) {
  
  const {mediaType, title, type} = props
    
  return (
    <>
      <div className={`${classes.mediaHeader} col-md-4 fw-bold`}>
          <h2>Trending <br/> {title} <br/> to Watch Now</h2>
          <p className='text-muted'>Most watched {title} by days</p>
        </div>
        {mediaType && mediaType.slice(0,10).map((mediatype) => 
        <div className='col-md-2' key={mediatype.id}>
          <div className='media position-relative'>
            <MediaContent mediaType={mediatype} type={type}/>
          </div>
        </div>)}
    </>
  )
}

*/
