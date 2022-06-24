import React from 'react'
import '../App.css'

const SearchBox = () => {
  return (
    <div class='input-group'>
      <div class='form-outline'>
        <input id='search-focus' type='search' class='form-control' />
      </div>
      <button type='button' class='btn btn-primary'>
        <i class='fas fa-search'></i>
      </button>
    </div>
  )
}

export default SearchBox
