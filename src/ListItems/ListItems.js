import React from 'react';
import {
    MDBIcon,
    MDBCard,
    MDBCol,
    MDBRow
  } from 'mdbreact';



function ListItems(props){

   
        const products = props.products;
        
        const listProducts = products.map(product =>
            {
    return <p key={product.text}>{product.text}</p>
            })
    



    const items = props.items;
    const listItems = items.map(item =>
   {
       return <MDBCol md='4'> <MDBCard className='red'> <div className="list" key={item.text}>
     <p>
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
       
     </p>
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