import React, { Component } from 'react'
import './body.css'
import Product from "./product.js"

export class body extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="container">
                <div className="banner">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/001/828/988/small_2x/shopping-sale-banner-design-template-on-purple-background-free-vector.jpg" alt=""  />
               </div>
                
                <div className="row">
                <Product 
                title="Handbag"
                price="4500"
                img="https://www.fabindia.com/ccstore/v1/images/?source=/file/v4234230530669790300/products/10563447BR.f.100519.jpg"
                />
                <Product 
                title="Headphone"
                price="2000"
                img="https://images-na.ssl-images-amazon.com/images/I/71s9FMKzr%2BL._SL1500_.jpg"
                />
                <Product 
                title="Wristwatch for Men"
                price="6999"
                img="https://cdn.shopclues.com/images1/thumbnails/78359/280/1/133763919-78359205-1600277947.jpg"
                />
                </div>

                <div className="row">
                <Product 
                title="Shoe"
                price="2799"
                img="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619487269-tr3mmst080-shoe-angle-global-mens-tree-runner-mist-white-b11537e4-5c45-4443-a1dd-c70c31779715-png-1619487255.jpg"
                />
                <Product title="Casual Shirt for Men"
                price="1299"
                img="https://beisat.com/284509-large_default/formal-shirt-business-men-solid-color-long-sleeve-casual-shirt-men-s-.jpg"
                />
                <Product title="Living room Chair"
                price="10000"
                img="https://images2.imgix.net/p4dbimg/523/images/a3000200-sw-p1-ko.jpg?trim=color&trimcolor=FFFFFF&trimtol=5&w=1024&h=768&fm=pjpg&auto=format"
                />
                

                <Product title="Tea Table"
                price="6000"
                img="https://images-na.ssl-images-amazon.com/images/I/81suf2zzBVL._SX425_.jpg"
                />


                </div>
                <div className="row">
                <Product
                title="TV Set"
                price="25999"
                img="https://s1.poorvikamobile.com/image/data/AAAAA/realme/Realme%20LED%20TV/Realme%20HD%20Ready%20Smart%20Android%20LED%20TV/108cm%2043%20inch/Realme-108cm-43-inch-HD-Ready-Smart-Android-LED-TV-1.jpg"
                />
                <Product
                title="Sofa"
                price="17999"
                img="https://www.lookinggoodfurniture.com/wp-content/uploads/2020/11/6-4-555x278.jpg"
                />
                </div>
                <div className="banner">
                <img className="banimg" src="https://www.shinco.in/wp-content/uploads/2020/10/Website-Banner-2.png" alt=""  />

               </div>
               <div className="row">
                <Product 
                title="Handbag"
                price="4500"
                img="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619487269-tr3mmst080-shoe-angle-global-mens-tree-runner-mist-white-b11537e4-5c45-4443-a1dd-c70c31779715-png-1619487255.jpg"
                />
                <Product title="Handbag"
                price="4500"
                img="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619487269-tr3mmst080-shoe-angle-global-mens-tree-runner-mist-white-b11537e4-5c45-4443-a1dd-c70c31779715-png-1619487255.jpg"
                />
                <Product />
                <Product />
                </div>
                <div className="row">
                <Product 
                title="Handbag"
                price="4500"
                img="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619487269-tr3mmst080-shoe-angle-global-mens-tree-runner-mist-white-b11537e4-5c45-4443-a1dd-c70c31779715-png-1619487255.jpg"
                />
                <Product title="Handbag"
                price="4500"
                img="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619487269-tr3mmst080-shoe-angle-global-mens-tree-runner-mist-white-b11537e4-5c45-4443-a1dd-c70c31779715-png-1619487255.jpg"
                />
                <Product />
                <Product />
                </div>
               
            </div>
        )
    }
}

export default body
