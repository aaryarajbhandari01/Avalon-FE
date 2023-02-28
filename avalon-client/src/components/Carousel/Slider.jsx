import { EastOutlined, WestOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import "./Slider.css"
import { sliderItems } from "../../data";

const Slider = () => {

    // making slider dynamic
    const [currentSlide, setCurrentSlide] = useState(0);

    // images for slider
    // const data = [
    //     "https://cdn.dribbble.com/users/388811/screenshots/10291180/__________-72_still_2x.gif?compress=1&resize=640x480&vertical=top",
    //     "https://blog.hubspot.com/hs-fs/hubfs/Carousel%20slider%20on%20fashion%20website%20ALIE%CC%81TTE%20displays%20popular%20categories.jpg?width=1500&name=Carousel%20slider%20on%20fashion%20website%20ALIE%CC%81TTE%20displays%20popular%20categories.jpg",
    //     "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      
    // ];

    //previous button handler
    const prevSlide = () =>{
        // setCurrentSlide(currentSlide ===0 ? 2 : currentSlide - 1) 
        setCurrentSlide(currentSlide ===0 ? 2 : (prev) => prev - 1) ; // if in first image, prev images shows the last image of the slider, else if not in index 0 , then decreases the count and shows previous slide
    }
   

    //next button handler
    const nextSlide = () =>{
    setCurrentSlide(currentSlide ===2 ? 0 : (next) => next + 1) ;
    }

  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            {/* <img src={data[0]} alt=""/>
            <img src={data[1]} alt=""/>
            <img src={data[2]} alt=""/> */}
             {sliderItems.map((item) => (
                <img src={item.img} key={item.id}/>
             ))}
        </div>    

        <div className='icons'>
            <div className="icon" onClick={prevSlide}>
                <WestOutlined/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Slider