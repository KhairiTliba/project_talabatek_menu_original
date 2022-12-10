import {collectionCategory , collectionProducts} from './firebase'
import {getDocs} from 'firebase/firestore'
import React from 'react';


let confing = {
    //get Categories :
     async getCategories () {
        let data;
        const result = await getDocs(collectionCategory);
        data = result.docs.map((category) => (
            {
                iconSrc : category.data().iconSrc,
                name : category.data().name,
                id : category.id
              }
          ))

        return data

	}
,
    //get Categories :
    async getProducts () {
        let data;
        const result = await getDocs(collectionProducts);
        data = result.docs.map((product) => (
            {
                imgSrc : product.data().imgSrc,
                name : product.data().name,
                categoryId : product.data().categoryId,
                price : product.data().price,
                id : product.id
              }
          ))

        return data

	}
}
export default confing ;