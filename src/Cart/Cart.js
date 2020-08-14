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
        <hr/>
        <span>{product.text}</span>
        <span key={product.text} className='float-right mr-3'>{formatPrice(product.price)}</span>
        <p className='invisible'>{ sum += parseInt(product.price)}</p>
      </div>
     })
      
    return <div>
      <MDBRow>
        <MDBCol>{listProducts} 
          <hr/>
          <span className='font-weight-bold'>total:</span>
          <span className='font-weight-bold float-right mr-3'>{formatPrice(sum)}</span>
        </MDBCol>
     
      </MDBRow>
    </div>;
    }
  
    export default Cart;