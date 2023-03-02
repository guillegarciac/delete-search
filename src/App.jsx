import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import AddProduct from './components/AddProduct'
import ProductCard from './components/ProductCard'
import SearchInput from './components/SearchInput';

function App() {
  const [products, setProducts] = useState(productData);
  //creates a searchValue state
  const [searchValue, setValue] = useState("");

  // creates function handleDelete on App.js
  // the function receives a unique id when called
  // the function filters the prpdocuts array to update the state with those that won't be deleted.
  const handleDelete = (id) => {
    const deleteProducts = [...products].filter(product => product._id !== id)
    setProducts(deleteProducts)
  }
  
  //creates a function that will recieve a string value as a parameter and will update the searchValue state with said value
  const handleSearch = (str) => {
    setValue(str)
  }

  //creates a function that will receive an object containing the new product info and adds an id to it
  //then updates the products state with this new added product.
  const handleNewProduct = (product) => {
    const newProductId = {...product, _id: products.length + 1}
    // here we get all the props from child (as a copy with ...product) and we add the new _id
    setProducts([...products, newProductId]);
  }

  return (
    <>
      <h1>My shopping cart</h1>
      <SearchInput handleSearch={handleSearch}/>
      {/* sends handleSearch to the SearchInput child via props above */}
      <div className="cart">
        <AddProduct handleNewProduct={handleNewProduct}/>
        {products
        //filters products indluing searchValue in their name
          .filter(product => product.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
          .map(product => {
            return <ProductCard product={product} key={product._id} handleDelete={handleDelete} />
             //sends handleDelete to the ProductCard child via props above
          })}
      </div>
    </>
  );
}

export default App;
