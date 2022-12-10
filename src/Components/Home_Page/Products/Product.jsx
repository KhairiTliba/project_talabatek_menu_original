import React , {useState} from 'react'
import './styles.css'

const Product = ({product}) => {

    const [check , setCheck] = useState(false)
    return (

    <div className='card'>
        <img src={product.imgSrc} alt='' />
        <div className='right'>
            <h1 className='title'>{product.name}</h1>
            <h2 className='dscp'>{product.price} DA</h2>
            {
                check ? <div className='plus_And_munis'>
                <button style={{"backgroundColor" : "#3498DB70" , "color" : "white"}}>-</button>
                <h1>01</h1>
                <button style={{"backgroundColor" : "#C0392B70" , "color" : "white"}}>+</button>
            </div> : <div className='add_to_cart'>
                <button style={{"backgroundColor" : "#17A589" , "color" : "white"}}>ADD TO CART</button>
            </div>
            }
            
            
        </div>
    </div>
  )
}

export default Product