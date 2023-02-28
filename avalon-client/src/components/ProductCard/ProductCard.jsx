import React from 'react'
import "./ProductCard.css";
import { Link } from 'react-router-dom';


// Product Card
const ProductCard = (props) => {
  // console.log('this is props',props)

  //destructuring the current element
  const {id, name, images, price,category} = props;

  return (
    // <h1>props.id</h1>
    // linking card to the respective product item's detail page
  
    // <Link className='link' to={`/singleproduct/${props?.id}`}>
    // <div className='card'>
    //     <div className="image">
    //         {/* {item.isNew && <span>New Season</span>}  */}
    //         <span>{props?.category?.name}</span> 
    //         {/* <img src={{uri:props?.images[0]?.image}} alt={"name"} className="mainImg" /> */}
    //         {/* <img src={img2} alt={name} className="secondImg" /> */}
    //         <img src={ props?.images[0]?.image} alt={"name"} className="secondImg" />

    //     </div>
       
    //     <h2>{props?.name}</h2>
    //     <div className="prices">
    //     {/* <h3>NRs. {item.price}</h3> */}
    //     <h3>NRs. {props?.price}</h3>
    //     </div> 
    // </div>
    // </Link>
     <Link className='link' to={`/singleproduct/${id}`}>
     <div className='card'>
         <div className="image">
             {/* {item.isNew && <span>New Season</span>}  */}
             <span>{category?.name}</span> 
             {/* <img src={{uri:props?.images[0]?.image}} alt={"name"} className="mainImg" /> */}
             {/* <img src={img2} alt={name} className="secondImg" /> */}
             <img src={ images[0]?.image} alt={"name"} className="secondImg" />
 
         </div>
        
         <h2>{name}</h2>
         <div className="prices">
         {/* <h3>NRs. {item.price}</h3> */}
         <h3>NRs. {price}</h3>
         </div> 
     </div>
     </Link>
  )
}

export default ProductCard