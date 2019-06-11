import React from 'react';

const ItemCard = (props) => {
  return (
    <div className="item-card">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default ItemCard;