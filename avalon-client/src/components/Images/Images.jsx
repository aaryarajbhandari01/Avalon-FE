import React, { useState } from "react";
import styled from "styled-components";
import "../Images/Images.css"

const MyImage = ({ imgs = [{ url: "" }] }) => {//url of an array object to 
 
  // console.log('Images.jsx imgs->', imgs)

    // useState hook for selectedImages
    const [selectedImg, setSelectedImg] = useState(imgs[0]); 

  return (
    <section className="imgWrapper">
      <div className="grid grid-four-column">
        {imgs.map((currElem, index) => {
          return (
            <figure>
              <img
                src={currElem.image} //from api data (image)
                alt={currElem.image}
                className="box-image--style"
                key={index} // passing imaage array index as key
                onClick={() => setSelectedImg(currElem)} // getting current selected image
              />
            </figure>
          );
        })}
      </div>

      {/* 2nd column  */}

      <div className="main-screen">
      {/* <img src={imgs[0].url} alt={imgs[0].filename} /> */}
        <img src={selectedImg.image} alt={setSelectedImg.image} /> 
      </div>
    </section>
  );
};


export default MyImage;

