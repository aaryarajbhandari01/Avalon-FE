import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const GridView = ({products}) => {

    console.log("GRIDVIEW.JSX products", products)

  return (
    <section className='gridView'>
        <div className='gridViewContainer'>
            {products.map((currentElem, id)=>{
                return <ProductCard key={currentElem.id} {...currentElem}/>
            })}

        </div>
    </section>
  )
}

export default GridView

