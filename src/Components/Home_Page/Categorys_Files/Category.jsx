import React from 'react'
import './styles.css'

const Category = ({category , editSelect}) => {
  return (
    <button className='category' onClick={() => editSelect(category.id) } >
        <div className='icon'>
            <div className='circle' />
            <img src={category.iconSrc} className='img' />
        </div>
        <h1>{category.name}</h1>
    </button>
  )
}

export default Category