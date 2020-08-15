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
 
      return <div className='my-0 py-1' key={product.text}>
        
        <span className='ml-1'>{product.text}</span>
        <span key={product.text} className='float-right mr-3'>{formatPrice(product.price)}</span>
        <hr className='hr-dark m-0'/>
        <p className='invisible m-0 p-0'>{ sum += parseInt(product.price)}</p>
      </div>
     })
      
    return <div>
      <MDBRow>
        <MDBCol>
          <div className=' cartie z-depth-4'>
          <h5 className='p-2 mdb-color w-100 font-weight-bold cartTitle mt-3'>Cart<MDBIcon className='float-right pr-4 mt-1 mdb-color' size='lg' icon="shopping-cart" /></h5>
          
          {listProducts} 
          <h5 className='p-2 mdb-color w-100 font-weight-bold cartTitle mt-3'><span className='font-weight-bold p-2'>total:</span>
          <span className='font-weight-bold float-right mr-3'>{formatPrice(sum)}</span></h5>
          </div>
        </MDBCol>
     
      </MDBRow>
    </div>;
    }
  
    export default Cart;