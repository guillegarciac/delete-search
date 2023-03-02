import React, { useState } from 'react'

export default function AddProductForm({handleNewProduct}) {
  //we send the handleNewProduct as a prop form the Parent since AddProduct is a child.
  const initialState = {
    name: '',
    image: '',
    price: 0
  }
  const [newProduct, setNewProduct] = useState(initialState);

  const handleChange = (e) => {
    // ITERATION 4
    // Update the state according to the corresponding input
    console.log('Name of the input: ', e.target.name);
    console.log('Name of the value: ', e.target.value);
    //target es un objecte que ve amb l'event, therefore we use the function serNewProduct and ask to update the new value via
    setNewProduct(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // ITERATION 4
    // Sends the course info to the parent
    handleNewProduct(newProduct);
    // Restarts the newProduct state to its initial value
    setNewProduct(initialState);
  }

  return (
    <div className="form_container">
    {/* here the onSubmit event executes the function that should then be passed to the Parent */}
      <form onSubmit={handleSubmit}>
        <label>Product name</label>
        <input type="text" name="name" value={newProduct.name} onChange={handleChange} required />
        <label>Product image</label>
        <input type="text" name="image" required value={newProduct.image} onChange={handleChange} />
        <label>Product price</label>
        <input type="number" name="price" required value={newProduct.price} onChange={handleChange} />
        <button type="submit" className="btn">Create</button>
      </form>
    </div>
  )
}
