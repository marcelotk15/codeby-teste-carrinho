import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InputMask from "react-input-mask"

import API from '../../services/api'
import CartItem from '../../components/CartItem'

const sunTotal = (products) => {
  return products?.reduce((t, { sellingPrice }) => ({ sellingPrice: t.sellingPrice + sellingPrice })).sellingPrice
}

export default function Cart() {
  const { cart } = useParams()
  const freeDeliveryPrice = 1000
  const [products, setProducts] = useState()
  const [total, setTotal] = useState()
  const [isLoading, setIsLoading] = useState(false) 
  const [cep, setCep] = useState()
  const [cepEnabled, setCepEnabled] = useState(true)
  const [deliveryPrice, setDeliveryPrice] = useState(0)
  const [freeDelivery, setFreeDelivery] = useState(false)

  useEffect(() => {
    const products = API(cart)

    setProducts(products.items)

    setTotal(sunTotal(products.items))
  }, [cart])

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const cepHandle = (e) => {
    e.preventDefault()

    const newCep = e.target.value

    setCep(newCep)
    
    if ((new RegExp(/[0-9]{5}-[0-9]{3}/)).test(newCep) && total > freeDeliveryPrice) {
      setCepEnabled(false)
      setDeliveryPrice(0)
      setFreeDelivery(true)
    } else if ((new RegExp(/[0-9]{5}-[0-9]{3}/)).test(newCep)) {
      setCepEnabled(false)
      setDeliveryPrice(1000)
    }
  }

  const handleRemoveProduct = (itemId) => {
    const newProducts = products?.filter(product => (product.id !== itemId))

    setProducts(newProducts)

    if (newProducts.length <= 0) return setTotal(0)

    const newTotal = sunTotal(newProducts)

    setTotal(newTotal)

    if (!cepEnabled && newTotal <= freeDeliveryPrice) {
      setDeliveryPrice(1000)
      setFreeDelivery(false)
    }
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
            { products?.length <= 0 && <p>Carrinho vazio</p>}
            { products?.length >= 1 && products?.map(item => (
              <CartItem key={item.id} item={item} handleRemoveProduct={handleRemoveProduct}  />
            ))}
          </div>

          <div className="card-total">
            <div className="delivery">
              <p>Frete</p>

              <div>
                <div className="input-group">
                  <InputMask mask="99999-999" placeholder="CEP" value={cep} onChange={(event) => cepHandle(event)} disabled={!cepEnabled} />
                </div>

                {(deliveryPrice > 0) &&
                  <p className="delivery-price">Motoboy: <span>R$ { deliveryPrice.toString().replace(/([0-9]{2})$/g, ",$1") }</span></p>
                }
              </div>
            </div>

            <div className="price">
              <span>Total</span>
              <span>R$ { !total ? '0,00' : (total + deliveryPrice).toString().replace(/([0-9]{2})$/g, ",$1") }</span>
            </div>
           
            {(freeDelivery) &&
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