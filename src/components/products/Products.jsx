import React from 'react'
import './Products.css'
import products from '../../API/products.json'

const Products = () => {

  return (
    <div>
        <div className="products">
            <h1>Товары:</h1>

            {products.map((product) => (
                <div key={product.id} className='product'>

                    <img src={product.image} alt='изображения нет' />
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>{product.price} KGS</p>
                    

                    <button>написать</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products