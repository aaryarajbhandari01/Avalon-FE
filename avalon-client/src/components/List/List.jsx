import React, { useContext, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "./List.css"
import { products } from "../../products";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productAction';
import { useProductContext } from '../../context/productContext';
import { useFilterContext } from '../../context/filterContext';
import GridView from '../GridView/GridView';



// list for fetching PRODUCTS data
const List = ( ) => {
  // const List = (props) => {
  // console.log('List',props)

  const {filter_products, setGridView} = useFilterContext();
console.log('List.jsx filter_products->', filter_products)

  // if(setGridView === true){
  //   return (
  //   <div className='list'>
  //   {/*passing products prop */}
  //   <GridView products={filter_products}/>
  //   </div>
  //   )
  // }

  // if(setGridView === false){
  //   return <ListView products={filter_products}/> //passing products prop
  // }

  // const dispatch = useDispatch();
  //   const productList = useSelector((state)=>state.productList);
  //   const {error,loading,products} =productList
  //   useEffect(()=>{
  //       dispatch(listProducts());
  //   },[dispatch])

  return (

    <section className='list'>

         {/* {loading ?(
                <Loader />
        ):error ?(
              <Message variant='danger'>{error}</Message>
        ): */}

        {/* <div> */}

        {/* <ProductCard products={filter_products}/> */}
{/* 
        {products.map((item) => (
        <ProductCard item={item} key={item.id} />
        ))} */}

        {filter_products?.map((currentElem, id)=>
                 <ProductCard key={currentElem.id} {...currentElem}/>
            )}

        {/* </div> */}
        {/* } */}  
    </section>
  )
}

export default List