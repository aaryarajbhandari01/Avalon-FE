import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import "./Wishlist.css";


function Wishlist() {
  const [products, setProducts] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/product/wishlist/',
    
           
            {
              headers: {
                Authorization: `Bearer ${userInfo.token}`,
              },
            }
          );
        
        setProducts(response.data);
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
   

    <div className='wishlist'>
    <h2>My Wishlist</h2>
    <div className='wishlistProduct'>
        {
            products.map((currElem) => {
                return <ProductCard key={currElem.id} {...currElem}/>
            })
         }
         </div>
    </div>
    </>
  );
}



export default Wishlist;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';





// function Wishlist() {
//   const [products, setProducts] = useState([]);
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;
  

//   useEffect(() => {

//    async function fetchProducts() {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/product/wishlist/',
    
           
//             {
//               headers: {
//                 Authorization: `Bearer ${userInfo.token}`,
//               },
//             }
//           );
        
//         setProducts(response.data);
        
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>My Wishlistt</h1>
//       <ul>
//         {products.map((product) => (
           
//           <li key={product.id}>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <img src={product.images[0]?.image} alt={product.name} />
//             <h3>Price: ${product.price}</h3>
//             <h3>Colors: {product.color.map((c) => c.name).join(', ')}</h3>
//             <h3>Sizes: {product.size.map((s) => s.name).join(', ')}</h3>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Wishlist;

// ---------------------

