import React, { useEffect } from 'react'
import { FaCheck } from 'react-icons/fa';
import { useFilterContext } from '../../context/filterContext'
import "./FilterSection.css"

const FilterSection = () => {

  

  const{
    filters:{text, category,color}, 
    updateFilterValue,
    all_products,
  } = useFilterContext();
  // console.log('category',category)



 // Extract all category names
 const categories = all_products.map((product) => product.category.name);

 // Get unique category names
 const categoryOnlyData = ["all", ...new Set(categories)];
 console.log('category name',categoryOnlyData);


 const colors = all_products.flatMap((product) => product.color.map((color) => color.name));
const uniqueColors = ["all", ...new Set(colors)];
  return (
    <section className='filterWrapper'>
      <div className="filter-search">
        <form onSubmit={(e) =>e.preventDefault()}>
          <input 
              id="searchBar"
              type="text" 
              name="text" 
              value={text} 
              onChange={updateFilterValue}
              placeholder="Search Items"
              />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {/* loop for category */}

          {categoryOnlyData.map((curElem,index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category" //api name
                  value={curElem} //current category elemet data
                  onClick={updateFilterValue}
                  >
                  {/*  passing category options name of the current element */}
                  {curElem}  
                  {category === curElem ? <div className="active-category" /> : null}

                </button>
            );
          })}

        </div>
      </div>

      {/* COLORS */}

      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {uniqueColors.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={updateFilterValue}>
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* FilterSection */}
    </section>
  )
}

export default FilterSection