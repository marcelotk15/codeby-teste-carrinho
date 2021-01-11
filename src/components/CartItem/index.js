import React from 'react'

import { Item } from './syle'

export default function CardItem(props) {
  const { item } = props

  return (
    <>
      <Item>
        <div className='item-photo'>
          <img src={item.imageUrl} alt={item.name} />
        </div>

        <div className="item-description">
          <div className="item-name">{item.name}</div>
          
          <div className="price">R$ { item.price.toString().replace(/([0-9]{2})$/g, ",$1") }</div>
          <div className="selling-price">R$ { (item.sellingPrice.toString().length === 2) && 0}{ item.sellingPrice.toString().replace(/([0-9]{2})$/g, ",$1") }</div>
        </div>
      </Item>
    </>
  )
}