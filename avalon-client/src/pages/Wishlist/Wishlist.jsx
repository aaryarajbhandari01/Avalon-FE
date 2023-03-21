import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import "./Wishlist.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Wishlist() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/product/wishlist/', {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        });

        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);


  
  

  const onDelete = async (productId) => {
    console.log('Deleting product with id', productId);
    try {
      await axios.delete(`http://127.0.0.1:8000/api/product/wishlist/${productId}/delete/`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      console.log('Product deleted from the back end');
      setProducts(products.filter((product) => product.id !== productId));
      setWishlist(wishlist.filter((product) => product.id !== productId));
    } catch (error) {
      console.error(error);
    }
  };

  // if (wishlist.length === 0){
  //   return   <div className='wishlist'>
  //               <div className='title'>
  //               <h2>My Wishlist</h2>
  //                   <Link to="/products">
  //                   <button>
  //                       <span>Continue Shopping</span>
  //                   </button>
  //                   </Link>
  //               </div>
              
  //               <div className='cartContainer'>
  //                 <div className='empty'>
  //                   <h3>No Item in Wishlist</h3>
  //                 </div>
  //             </div>
            
               
  //          </div>
  // }
  
  return (
    <>
      <div className='wishlist'>
        <h2>My Wishlist</h2>
        <div className='wishlistProduct'>
          {products.map((currElem) => (
            <>
             {/* <ProductCard key={currElem.id} {...currElem} />
            <button onClick={() => onDelete(currElem.id)}>Delete</button> */}
            <div className='wishlistItems'>
            <p className='removeWish'>
            <DeleteOutlineIcon  onClick={() => onDelete(currElem.id)}/>
            </p>

            <Link className='link' to={`/singleproduct/${currElem.id}`}>
            <div className='card'>
                <div className="image">
                    {/* {item.isNew && <span>New Season</span>}  */}
                    <span>{currElem.category?.name}</span> 
                    {/* <img src={{uri:props?.images[0]?.image}} alt={"name"} className="mainImg" /> */}
                    {/* <img src={img2} alt={name} className="secondImg" /> */}
                    <img src={ currElem.images[0]?.image} alt={"name"} className="secondImg" />
        
                </div>
               
                <h2>{currElem.name}</h2>
                <div className="prices">
                {/* <h3>NRs. {item.price}</h3> */}
                <h3>NRs. {currElem.price}</h3>
                </div> 
            </div>
            </Link>
            {/* <button > */}
             
            {/* </button> */}

            </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Wishlist;


