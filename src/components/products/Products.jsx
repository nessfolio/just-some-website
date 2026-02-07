import React from 'react'
import './Products.css'

const Products = () => {
    
    const products = [
        {
            id: 1,
            title: 'Ноутбук UltraBook',
            price: 95000,
            description: 'Мощный ноутбук для работы и игр.',
            imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
        },
        {
            id: 2,
            title: 'Носки спортивные',
            price: 300,
            description: 'Дышащие материалы, упаковка 3 пары.',
            imageUrl: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&q=80',
        },
        {
            id: 3,
            title: 'Шторы льняные',
            price: 4200,
            description: 'Натуральный лен, цвет серый.',
            imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&q=80',
        },
        {
            id: 4,
            title: 'Кроссовки беговые',
            price: 7800,
            description: 'Отличная амортизация для бега.',
            imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
        }
    ];

  return (
    <div>
        <div className="products">
            <h1>Товары:</h1>

            {products.map((products, key) => (
                <div key={key} className='product'>

                    <img src={products.imageUrl} alt={products.title} />
                    <p>{products.title}</p>
                    <p>{products.description}</p>
                    <p>{products.price} KGS</p>
                    

                    <button>написать</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products