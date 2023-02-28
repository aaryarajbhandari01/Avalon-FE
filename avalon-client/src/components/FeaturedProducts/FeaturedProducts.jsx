import React from 'react'
import { useProductContext } from '../../context/productContext';
import ProductCard from '../ProductCard/ProductCard';
import "./FeaturedProducts.css";



const FeaturedProducts = ({type}) => {

    // using Product Context hook
    const {isLoading, featuredProducts} = useProductContext();
    console.log(
        "file:FeaturedProducts.jsx featuredProduct->", featuredProducts
    );

    //showing loading when api data is loading
    if (isLoading){
        return <div> .....Loading</div> ;
    }


  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            {/* <p>
                Lorem ipsum dolar sit amet,
            </p> */}
        </div>   

        <div className="bottom">
        {/* mapping through data and calling card component for each item */}
         
         {
            featuredProducts.map((currElem) => {
                return <ProductCard key={currElem.id} {...currElem}/>
            })
         }
         
        </div> 
    </div>
  )
}

export default FeaturedProducts