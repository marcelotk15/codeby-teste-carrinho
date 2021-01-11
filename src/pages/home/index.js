import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <p>Codeby</p>
          </div>

          <div className="card-body">
            <div className="home-links">
                <button><Link to="/pagar/acima" >Carrinho acima de $10,00</Link></button>
                <button><Link to="/pagar/abaixo" >Carrinho abaixo de $10,00</Link></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}