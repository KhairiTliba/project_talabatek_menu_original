import React, { useEffect, useState  } from 'react'
import { Navbar , Products , Categorys } from '../Components/index'
import './pagesStyle.css'
import confing from '../firebase/confing'



  const HomePage = () => {
    const [categorys , setCategorys] = useState([])
    const [products , setProducts] = useState([])

    const [select , setSelect] = useState()
  
    const editSelect = (categoryId) => {
      setSelect(categoryId)
    }
  

  

    const loadData = async () => {
      // get Categories :
      const resCategories = await confing.getCategories()
      setCategorys(resCategories)
      
      // get Products :
      const resProducts = await confing.getProducts()
      setProducts(resProducts)
      if(resCategories.length != 0){
        setSelect(resCategories[0].id)
      }
      
    }
  
    useEffect(() => {
      loadData()
    },[])


  return (
    <div className='Home_Page'>
        <Navbar />
        <Categorys categorys={categorys} editSelect={editSelect} />
        <Products products={products} select={select} />
    </div >
  )
}

export default HomePage