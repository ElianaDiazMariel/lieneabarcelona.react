import React, { useEffect, useState } from 'react'
import { products } from './data/products'
import ItemCard from './ItemCard'

const ItemList = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    getProducts().then( response => {
      console.log( response );
      setItems( response )
    })
  }, [])
  
  const getProducts = () => {
    return new Promise( resolve => {
      setTimeout(() => {
        resolve( products )
      }, 1000);
    })
  }

  return (
    <>
    <br>
    </br>
    <h1 className="text-center font-bold">
       MUEBLES INDUSTRIALES
    </h1>
    <br>
    </br>
    <h3 className='text-center font-bold'>MESAS</h3>
    <br>
    </br>
    <div className='grid grid-cols-4 gap-4'>
      { items.map( i => <ItemCard key={i.id} {...i}/> ) }
    </div>
      </>
  )
}

export default ItemList