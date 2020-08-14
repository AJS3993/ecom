import React from 'react';
import {MDBIcon,MDBCard} from 'mdbreact';

function ListItems(props){
  // Items for sale
  const items = props.items;
  const listItems = items.map(item =>
   {
    return <MDBCard className='red'>
      <div className="list" key={item.text}>
        <h3>
          
          {item.text}
          {item.price}
          
          <span>
            <MDBIcon className="faicons" onClick={() => {props.deleteItem(item.text)}} icon="trash" />
          </span>

          <span>
            <MDBIcon className="faicons" onClick={() => {props.addProduct(item)}} icon="plus" />
          </span>
       
        </h3>
      </div>
    </MDBCard>})
    
return <div>
 {listItems}
</div>;
  }

  export default ListItems;