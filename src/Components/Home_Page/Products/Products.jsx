import React , {useEffect, useState} from 'react'
import imgCard from "../../../images/imgCard.jpeg"
import './styles.css'
import {Product} from '../../index'

const Products = ({products , select}) => {

  return (
    <div className='Products'>
        {
            products.filter((product) => product.categoryId === select).map((product) => {
                return (<Product key={product.id} product={product} />)
            })
        }
        

    </div>
    
    
  )
}

export default Products