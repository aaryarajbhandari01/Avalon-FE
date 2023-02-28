import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import FilterSection from '../../components/FilterSection/FilterSection'
import List from '../../components/List/List'
import Sort from '../../components/Sort/Sort'
import { useFilterContext } from '../../context/filterContext'
import "./Products.css"

const Products = () => {

    const {filter_products} = useFilterContext();
    console.log("file:Products.jsx filter_products" , filter_products)

    useEffect(() => {
      window.scrollTo(0,0)
    }, [])

    

  return (
    <div className='products'>
      <div className='grid grid-filter-column'>
        
        <div className="left">
          <div>
              <FilterSection/>
          </div>
        </div>

      <section className="right">
        {/* <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        /> */}
        <div className="sort-filter">
          <Sort/>
        </div>

        {/* list */}
        <div className="main-product">
          <List/>

        </div>

      </section>
      </div>
    </div>
  )
}

export default Products