import React from 'react';
import {MDBCol,MDBRow} from 'mdbreact';
import './Cart.css';
import {formatPrice} from '../helpers';

function Cart(props){

  // Products in the cart
  var sum = 0
  const products = props.products;
  const listProducts = products.map(product =>
    {
 
      return <div key={product.text}>
        <span>{product.text}</span>
        <span key={product.text} className='float-right mr-3'>{formatPrice(product.price)}</span>
        { sum += parseInt(product.price)}
      </div>
     })
      
    return <div>
      <MDBRow>
        <MDBCol>{listProducts} 
          <hr/>
          <span>total</span>
          <span className='float-right mr-3'>{sum}</span>
        </MDBCol>
     
      </MDBRow>
    </div>;
    }
  
    export default Cart;