import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;

  .item-photo {
    width: 7rem;
    height: 7rem;
    border: 1px solid #c4c4c4;
    text-align: center;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .item-description {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    justify-content: space-evenly;
    .item-name {
      font-weight: 900;
      font-size: 0.8rem;
    }

    .price {
      font-size: 0.8rem;
      color: #A8AEC8;
      text-decoration: line-through
    }

    .selling-price {
      margin-top: -1rem
    }
  }
`