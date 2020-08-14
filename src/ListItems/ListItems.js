import React from 'react';
import {
    MDBIcon,
    MDBCard,
    MDBCol,
    MDBRow,
    MDBCardImage
  } from 'mdbreact';



function ListItems(props){

   
// Products in the cart

        const products = props.products;
        
        const listProducts = products.map(product =>
            {
            return <div key={product.text}><span>{product.text}</span><span className='float-right mr-3'>{product.price}</span></div> 
            
            })
    

// Items for sale

    const items = props.items;
    const listItems = items.map(item =>
   {
       return <MDBCol md='4'> <MDBCard className='red'> <div className="list" key={item.text}>
     <h3>
   {item.text}
   {item.price}
        <span>
        <MDBIcon className="faicons" onClick={() => {
            props.deleteItem(item.text)
        }} icon="trash" />
        </span>

      <span>
        <MDBIcon className="faicons" onClick={() => {
            props.addProduct(item)
        }} icon="plus" />
        </span>
       
     </h3>
    </div>
    </MDBCard></MDBCol>})
    return <div>

<MDBRow>
    <MDBCol md='2'></MDBCol>

    <MDBCol md='8'><MDBRow> {listItems}</MDBRow></MDBCol>
    
    <MDBCol md='2'>{listProducts}</MDBCol>
        </MDBRow>
    
    </div>;
  }

  export default ListItems;