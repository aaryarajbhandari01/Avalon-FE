import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import "./Wishlist.css";

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


  // const onDelete = async (productId) => {
  //   try {
  //     await axios.delete(`http://127.0.0.1:8000/api/product/wishlist/${productId}/delete/`, {
  //       headers: {
  //         Authorization: `Bearer ${userInfo.token}`,
  //       },
  //     });

  //     setProducts(products.filter((product) => product.id !== productId));
  //     setWishlist(wishlist.filter((product) => product.id !== productId));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
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
  
  return (
    <>
      <div className='wishlist'>
        <h2>My Wishlist</h2>
        <div className='wishlistProduct'>
          {products.map((currElem) => (
            <>
              <ProductCard key={currElem.id} {...currElem} />
              <button onClick={() => onDelete(currElem.id)}>Delete</button>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Wishlist;


