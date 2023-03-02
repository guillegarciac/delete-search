import React from 'react'

export default function SearchInput({handleSearch}) {
  //handleSearch sent as prop from the parent
  
  const handleChange = (e) => {
    // here we execute handleSearch from the App.js
    handleSearch(e.target.value)
    //and sends e.target.value
  }
  return (
    <div>
      <input type="text" placeholder="search..." onChange={handleChange} />
      {/* here the onChange event executes the function that should then be passed to the Parent */}
    </div>
  )
}