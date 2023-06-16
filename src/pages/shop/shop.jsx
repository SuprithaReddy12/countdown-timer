import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product';
import './shop.css';

function Shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Game Zone</h1>
        </div>
        <div className='products' id='product-flex'>
            {PRODUCTS.map((product , i) => (
                <Product data={product} key={i}/>
            ))}
        </div>
    </div>
  )
}

export default Shop
