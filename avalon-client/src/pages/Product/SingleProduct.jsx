import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductContext } from '../../context/productContext'
import "./SingleProduct.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddToCart from '../../components/AddToCart/AddToCart';
import Images from '../../components/Images/Images';
import Review from '../../components/Reviews/review';
import ReviewForm from '../../components/Reviews/reviewForm';
import axios from 'axios';

const API = "http://127.0.0.1:8000/api/product"

const SingleProduct = () => {

  const{getSingleProduct, isSingleLoading, singleProduct} = useProductContext();
  console.log("File: SingleProduct.js singleProduct:" ,singleProduct);


  const {id} = useParams();
  console.log("File: SingleProduct.js single product id :" ,id);
  
  const [reviews, setReviews] = useState([]);


   //destructuring single product details data
    const  { 
      id: alias,
      name,
      price,
      description,
      color,
      size,
      category,
      quantity,
      product_review,
      images,
    } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`)
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  // const authToken = localStorage.getItem("authToken");

  // const addReview = async (data, authToken) => {
  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:8000/api/product/review/create/",
  //       data,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${authToken}`,
  //         },
  //       }
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // };

  // const handleReviewSubmit = async (data) => {
  //   try {
  //     const newReview = await addReview(data, authToken);
  //     setReviews([...reviews, newReview]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  if(isSingleLoading){
        return  <div className='page_loading'>
          Loading.....
        </div>
      }
  
    return (
    <div className='product'> 
      <div className='top'>
        <button>
        <Link className ="link" to="/products"> <ArrowBackIosNewIcon/></Link>
        </button> 
      </div>

      <div>
        <div>
            <div className='center'>
              {/* PRODUCT IMAGE */}
           
            <div className="left">
                {/* PRODUCT IMAGE */}
                <Images imgs={images}   />
                {/* <img src={ images[0]?.image} alt={"name"} className="secondImg" /> */}
          {/* images */}
            </div>
            
            <div className="right">
              <div className='top'>
                <h1>{name}</h1>
                {quantity > 0 ? <span className='inStock'>In Stock</span> : <span className='outOfStock'>Out of Stock</span>}
              </div>

              <span className='price'>NRs. {price}</span>
              

              <p className='desc'>
                {description} 
              </p>
            
             
        
               <div div className='productData'>
                  <p>ID : <span>{id}</span></p>
                  <p>Category : <span>{category?.name}</span></p>
               </div>

              <hr/>
              {/* Using singleProduct useContext and stock */}
             {quantity > 0 && 
                <AddToCart 
                  product={singleProduct} //passing product as singleProduct in add to cart
                />}
                    
              </div>

              
          </div>

          <hr />

          <div className='bottom'>
             <h3> Review</h3>
             <ReviewForm/>
             {/* <ReviewForm productId={id} onSubmit={handleReviewSubmit} /> */}
             <hr/>
            
            <div className="main_reviews-container">
              <div className="review_answer">
                <Review reviews={product_review}/>
              </div>
            </div>
         </div>
          </div>
      </div>
        {/* } */}
      </div>
  )
}

export default SingleProduct

// import { AddShoppingCartOutlined, SettingsApplicationsRounded} from '@mui/icons-material';
// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom';
// import "./SingleProduct.css"
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import styled from "styled-components";
// // import { products } from '../../products';
// // import axios from 'axios';
// import { useProductContext } from '../../context/productContext';
// import Images from '../../components/Images/Images';
// import AddToCart from '../../components/AddToCart/AddToCart';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// // API url for single page
// // const API = "https://api.pujakaitem.com/api/products";
// const API = "http://127.0.0.1:8000/api/product/"


// // const FilterContainer = styled.div`
// //   width: 50%;
// //   margin: 10px 0px;
// //   display: flex;
// //   justify-content: space-between;
// // `;

// // const Filter = styled.div`
// //   display: flex;
// //   align-items: center;
// // `;

// // const FilterTitle = styled.span`
// //   font-size: 16px;
// //   font-weight: 200;
// //   padding-right:10px;
// // `;

// // // const FilterColor = styled.button`
// // //   width: 20px;
// // //   height: 20px;
// // //   border-radius: 50%;
// // //   background-color: ${(props) => props.color};
// // //   margin: 0px 5px;
// // //   cursor: pointer;
// // // `;

// // const FilterSize = styled.select`
// //   margin-left: 10px;
// //   padding: 5px;
// // `;

// // const FilterSizeOption = styled.option``;

// const SingleProduct = ( ) => {

//   //using product context hook
//   const{getSingleProduct, isSingleLoading, singleProduct} = useProductContext();
//   console.log("File: SingleProduct.js singleProduct Detail:" ,singleProduct);

  
//   const { id } = useParams();
//   console.log("File: SingleProduct.js single product id :" ,id);

//   //destructuring single product details data
//   const  { 
//     id: alias,
//     name,
//     price,
//     description,
//     category,
//     stock,
//     stars,
//     reviews,
//     image,
//   } = singleProduct;

//   // const [quantity, setQuantity] = useState(1); //default qty value is 1

  
  
//   const [cart, setCart] = useState({});
//   const [cartCount, setCartCount] = useState(0);

//   // const addToCart = (product) => {
//   //   setCart([...cart, product]);
//   //   setCartCount(cartCount + 1);
//   // };


//   useEffect(() => {
//     //API data query for single product and getting id through useparams
//       getSingleProduct(`${API}${id}/`); //template literals
//       //  getSingleProduct("http://127.0.0.1:8000/api/product/1");
//       console.log("singleProduct.jsx getSingleProduct->", getSingleProduct)
   
// }, [id]);

// useEffect(() => {
//   console.log("SingleProduct.js useEffect -> singleProduct:", singleProduct);
// }, [singleProduct]);

//   if(isSingleLoading){
//     return  <div className='page_loading'>
//       Loading.....
//     </div>
//   }

  



//   return (
//     <div className='product'> 
//       <div className='top'>
//         <button>
//         <Link className ="link" to="/products"> <ArrowBackIosNewIcon/></Link>
//         </button> 
//       </div>

//       <div>
//         {/* {loading ? <Loading/> :  */}
//         <div>
//             <div className='center'>
//             {/* <div className="left">
//               {/* PRODUCT IMAGE */}
//             {/* <div className="images"> */}
//               {/* <img src={product.img} alt="" onClick={() => handleImageClick(product.img)}/> */}
//               {/* <img src={product.img2} alt="" onClick={() => handleImageClick(product.img2)}/> */}
//               {/* <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/> */}
//               {/* <img src={image} alt={name}/> */}
//             {/* </div> */}

          
//             {/* <div className="mainImg"> */}
//               {/* <img src={product.img} alt=""/> */}
//               {/* <img src={selectedImg} alt=""/> */}



//             {/* {selectedImg && (
//               <img src={product.selectedImg} alt=""/>
//               )} */}
//             {/* </div> */}
          
//           {/* </div> */} 
//             <div className="left">
//                 {/* PRODUCT IMAGE */}
//                 <Images imgs={image}  />
             
          
//             </div>

//             <div className="right">
//               <div className='top'>
//                 <h1>{name}</h1>
//                 {stock ? <span>In Stock</span> : <span>Out of Stock</span>}
//               </div>

//               <span className='price'>NRs. {price}</span>
              

//               <p className='desc'>
//                 {description}
//                 {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non orci eros. 
//                 Fusce tristique, elit in hendrerit pharetra, tortor leo pulvinar magna, vel pharetra
//                 enim leo non quam. Nunc sem erat, bibendum at leo ac, bibendum facilisis massa. Nullam 
//                 vitae nunc sed aliquam. */}
//               </p>
            
             
        
//                <div div className='productData'>
//                   <p>ID : <span>{id}</span></p>
//                   <p>Category : <span>{category}</span></p>
//                </div>

              
//               {/* Using singleProduct useContext and stock*/}
//                {stock > 0 && 
//                 <AddToCart
//                   product={singleProduct} //passing product as singleProduct in add to cart
//                 />}

                    
//             {/* <FilterContainer>
//                 <Filter>
//                   <FilterTitle>Color</FilterTitle>
//                   <FilterColor color="black" />
//                   <FilterColor color="darkblue" />
//                   <FilterColor color="gray" />
//                 </Filter>
//                 <Filter>
//                   <FilterTitle>Size</FilterTitle>
//                   <FilterSize>
//                     <FilterSizeOption>XS</FilterSizeOption>
//                     <FilterSizeOption>S</FilterSizeOption>
//                     <FilterSizeOption>M</FilterSizeOption>
//                     <FilterSizeOption>L</FilterSizeOption>
//                     <FilterSizeOption>XL</FilterSizeOption>
//                   </FilterSize>
//                 </Filter>
//               </FilterContainer>

//                 <div className='cartQty'>
//                   <div className='quantity'> */}
//                     {/* <button onClick={()=>setQuantity(prev=>prev-1)}>-</button> */}
//                     {/* <button onClick={()=>setQuantity((prev) => prev ===1 ? 1 : prev - 1)}>-</button>
//                     <div className='qty'>
//                       {quantity}
//                     </div>
//                     <button onClick={()=>setQuantity(prev => prev + 1)}>+</button>
//                   </div>

//                   <button className="add" onClick={() => addToCart({ id: id})}> 
//                     <AddShoppingCartOutlined/> 
//                     Add To Cart 
//                   </button>
//                 </div>  */}
          
//               </div>

              
//           </div>

//           <hr />

//           <div className='bottom'>
//           <h3> Review and Ratings</h3>
//           <p>{stars} from {reviews} reviews</p>
//           </div>
//       </div>
//         {/* } */}
//       </div>
//     </div>
//   )
// }

// export default SingleProduct