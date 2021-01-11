import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    background: #D1D8E5;
  }

  body, input, button, a {
    color: #000;
    font-family: 'Poppins', sans-serif;
  }

  .container {
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 2rem 0;
  }

  .home-links {
    display: flex;
    flex-direction: column;

    button {
      background-color: #3B74F2;
      color: #fff;
      font-weight: 600;
      font-size: 1.3rem;
      text-align: center;
      padding: 0.75rem 0;
      border-radius: 0.5rem;
      width: 100%;
      border: none;
      cursor: pointer;
      margin: 1rem 0;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    min-width: 25%;
    background-color: #fff;
    border-radius: .6rem;
    box-shadow: 0 1rem 3rem rgba(0,0,0,.175);
  }

  .card-header {
    text-align: center;
    padding: 1rem;
    border-bottom: 1px solid #c4c4c4;
    p {
      font-size: 1.5rem;
      font-weight: 900;
    }
  }

  .card-body {
    padding: 1rem;
    border-bottom: 1px solid #c4c4c4;
  }

  .card-total {
    padding: 1rem;
    border-bottom: 1px solid #c4c4c4;

    .price {
      display: flex;
      justify-content: space-between;
      font-weight: 900;
      font-size: 1.2rem
    }

    .free-delivery {
      background-color: #C7FFA6;
      color: #247A03;
      font-weight: 600;
      text-align: center;
      margin: 1rem 2rem;
      padding: 0.75rem 0;
      border-radius: 2rem;
    }
  }

  .card-footer {
    padding: 1rem;

    button {
      background-color: #3B74F2;
      color: #fff;
      font-weight: 600;
      font-size: 1.3rem;
      text-align: center;
      padding: 0.75rem 0;
      border-radius: 0.5rem;
      width: 100%;
      border: none;
      cursor: pointer;
    }
  }
`