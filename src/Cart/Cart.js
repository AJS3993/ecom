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
    return <div className='py-1' key={product.text}>
            <span className='ml-1 font-weight-bold'>{product.text}</span>
            <span key={product.text} className='float-right mr-3 font-weight-bold'>{formatPrice(product.price)}</span>
            <hr className='hr-dark m-0'/>
            <p className='invisible m-0 p-0'>{ sum += parseInt(product.price)}</p>
            </div>
     })
      
    return <div>
      <MDBRow>
        <MDBCol>
          <div className=' cartie z-depth-4'>
            <h5 className='p-1 mdb-color darken-3 w-100 font-weight-bold cartTitle mt-3'>
              Cart
              <MDBIcon className='float-right pr-3 mt-1' size='md' icon="shopping-cart" />
            </h5>
            {listProducts} 
            <h5 className='mdb-color darken-3 w-100 cartTitle mt-1 mb-0 pt-1 mb-1 p-2 total'>
              <span>Total:</span>
              <span className='float-right'>{formatPrice(sum)}</span>
            </h5>
          </div>
        </MDBCol>
      </MDBRow>
    </div>;
    }
  
    export default Cart;