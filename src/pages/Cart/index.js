import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import API from '../../services/api'
import CartItem from '../../components/CartItem'

export default function Cart() {
  const { cart } = useParams()
  const freeDelivery = 1000
  const [products, setProducts] = useState()
  const [total, setTotal] = useState()
  const [isLoading, setIsLoading] = useState(false) 

  useEffect(() => {
    const products = API(cart)

    setProducts(products)

    setTotal(products?.items.reduce((t, { sellingPrice }) => ({ sellingPrice: t.sellingPrice + sellingPrice })).sellingPrice)
  }, [cart])

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }
  
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <p>
              Meu carrinho
            </p>
          </div>

          <div className="card-body">
            {products?.items.map(item => (
              <CartItem key={item.key} item={item} />
            ))}
          </div>

          <div className="card-total">
            <div className="price">
              <span>Total</span>
              <span>R$ { !total ? '-' : total.toString().replace(/([0-9]{2})$/g, ",$1") }</span>
            </div>
           
            {(total > freeDelivery) &&
              <div className="free-delivery">
                Parabéns, sua compra tem frete grátis !
              </div>
            }
            
          </div>

          <div className="card-footer">
            <button onClick={() => { onSubmit() }}>
              {isLoading ? "Finalizando..." : "Finalizar compra"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}