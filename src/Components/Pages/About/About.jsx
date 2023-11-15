import { motion } from 'framer-motion';
import { img01, img02, img03, img04 } from '../../../Utilities/imgs';
import './About.css'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
    <h1 className="text-center my-3">About Us</h1>
    <div className="row aboutImgs g-4">
      <div className="col-md-3">
        <motion.img src={img01} className='w-100' initial={{x:-1000}} animate={{x:15}} transition={{duration: 0.5}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}/>
      </div>
      <div className="col-md-3">
        <motion.img src={img02} className='w-100' initial={{x:-1000}} animate={{x:15}} transition={{duration: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}/>
      </div>
      <div className="col-md-3">
        <motion.img src={img03} className='w-100' initial={{x:-1000}} animate={{x:15}} transition={{duration: 1.5}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}/>
      </div>
      <div className="col-md-3">
        <motion.img src={img04} className='w-100' initial={{x:-1000}} animate={{x:15}} transition={{duration: 2}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}/>
      </div>
      </div>
      <div className="socialLinks d-flex justify-content-center mt-5">

              <i className="fa-brands fa-facebook me-5 fs-2">
                <Link></Link>
              </i>
              <i className="fa-brands fa-youtube me-5 fs-2">
                <Link></Link>
              </i>
              <i className="fa-brands fa-spotify me-5 fs-2">
                <Link></Link>
              </i>
              <i className="fa-brands fa-instagram me-5 fs-2">
                <Link></Link>
              </i>
            </div>
    </>
  )
}
