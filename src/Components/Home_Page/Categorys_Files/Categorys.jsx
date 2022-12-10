import React from 'react'
import {Category} from '../../index'
import './styles.css'

const Categorys = ({categorys , editSelect}) => {
  
  return (
        <div className='CATEGORYS'>
            <h1 className='title'>CATEGORYS</h1>
            <div className='categorys'> 
              {
                categorys.map((category) => {
                    return ( <Category key={category.id} category={category} editSelect={editSelect} /> )
                })
              }
            </div>
            <hr style={{"border" : "1px solid black"}} />
        </div>
  )
}

export default Categorys