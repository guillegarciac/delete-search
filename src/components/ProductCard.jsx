import React from 'react'

//adds handle Delete as prop
export default function ProductCard({ product, handleDelete }) {
  //we send prodcut and handleDelete as props from the Parent

  const { name, price, image, _id } = product;

  const handleProductDelete = () => {
    // here we execute handleDelete from the App.js
    handleDelete(_id)
  }

  return (
    <div className="product_card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>Price: {price}$</p>
      {/* here the onClick event executes the function that should then be passed to the Parent */}
      <button className="btn_delete" onClick={handleProductDelete}>Delete</button>
    </div>
  )
}