/* eslint-disable no-unused-vars */
import React from 'react'

const Products = [
    {id: 1, name: "Prod 1", price: 1200},
    {id: 2, name: "Prod 2", price: 1100},
    {id: 3, name: "Prod 3", price: 500},
    {id: 4, name: "Prod 4", price: 6200},
    {id: 5, name: "Prod 5", price: 2200},
    {id: 6, name: "Prod 6", price: 1000},
    {id: 7, name: "Prod 7", price: 900},
    {id: 8, name: "Prod 8", price: 700},
    {id: 9, name: "Prod 9", price: 600},
]

const ProductList = () => {
  return (
    <div>
        <ul>
            {Products.map( (product) => {
                return <li>{product.name} - {product.price}</li>
            })}
        </ul>
    </div>
  )
}

export default ProductList