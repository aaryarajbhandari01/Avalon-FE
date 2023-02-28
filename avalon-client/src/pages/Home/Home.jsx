import React, { useEffect } from 'react'
import Slider from '../../components/Carousel/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import "./Home.css"

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='home'>
      <Slider/>
      {/* for featured product: trending type*/}
      <FeaturedProducts type="trending"/> 
      {/* for featured product: recently added type*/}
      {/* <FeaturedProducts type="recently Added"/> */}
    </div>
  )
}

export default Home