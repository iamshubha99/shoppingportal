import React from 'react'
import "./product.css"

function product({title, img, price}) {
    return (
        <div className="product">
            <div className="ptitle">
                <p>{title}</p>
                <p className="pprice">
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={img} alt="" />
            <button>Add to Kart</button>
        </div>
    )
}

export default product
