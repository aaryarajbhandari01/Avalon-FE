import React from 'react'
import { useFilterContext } from '../../context/filterContext'
import './Sort.css'

const Sort = () => {

  const {filter_products, sorting} = useFilterContext();
  
  return (
    <section className='sortWrapper'>

      <div className="products-data">
        <p>{`${filter_products.length} Products Available `}</p>
      </div>

      <div className="sort-selection">
        <form action="#">
          <label htmlFor='sort'></label>
          <select 
          name="sort" 
          id="sort" 
          className='sort-selection--style' 
          onClick={sorting} //using context and reducer
          > 
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled ></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled ></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled ></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </section>
  )
}

export default Sort