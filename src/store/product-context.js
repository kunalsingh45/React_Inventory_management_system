import React, { useState, useEffect } from 'react';
import { getData } from '../ApiConfig/Axios';

const ProductContext = React.createContext({
  products:[]
});

export const ProductContextProvider = (props) => {
    const [products,setProducts] = useState([]);
    
    useEffect( ()=>{
        const func = async ()=>{
            let products= await getData();
            setProducts((prevState)=>{
                return products
            })
        }

        func();        
    },[])

  return (
    <ProductContext.Provider
      value={{
        products: products
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
