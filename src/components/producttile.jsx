import React from "react";
export default function productTile(addCount,product) {
    return (
      <div className="row" key={product.id}>
        <div className="col-3">
          <div className="my-list">
            <img src={product.image} className="img" width="100%" height="100%"/>
            <h3>{product.title}</h3>
            <span>{product.price} </span>
            <a href="#" className="btn btn-info" onClick={() => { addCount() }
            }>Add To Cart</a>
          </div>
        </div>
      </div>
      
    )
  }