import React from 'react';
import {MDBCol,MDBRow,MDBIcon} from 'mdbreact';
import './Cart.css';
import {formatPrice} from '../helpers';

function Cart(props){

  // Products in the cart
  var sum = 0
  const products = props.products;
  const listProducts = products.map(product =>
    {
 
      return <div key={product.text}>
        <hr className='hr-light'/>
        <span>{product.text}</span>
        <span key={product.text} className='float-right mr-3'>{formatPrice(product.price)}</span>
        <p className='invisible'>{ sum += parseInt(product.price)}</p>
      </div>
     })
      
    return <div>
      <MDBRow>
        <MDBCol>
          <div className='p-2 white-text'>
          <MDBIcon className='white-text mt-2 text-right w-100 pr-4' size='lg' icon="shopping-cart" />
            <br/>
          {listProducts} 
          <hr className='hr-light'/>
          <span className='font-weight-bold white-text'>total:</span>
          <span className='font-weight-bold float-right mr-3 white-text'>{formatPrice(sum)}</span>
          </div>
        </MDBCol>
     
      </MDBRow>
    </div>;
    }
  
    export default Cart;