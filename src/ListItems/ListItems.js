import React from 'react';
import {MDBIcon,MDBCard,MDBCol,MDBCardTitle,MDBCardBody,MDBCardFooter, MDBCardImage,MDBBtn} from 'mdbreact';
import {formatPrice} from '../helpers';

function ListItems(props){
  // Items for sale
  const items = props.items;
  const listItems = items.map(item =>
   {
  return <MDBCol md='4' className='m-0'>
    <MDBCard cascade key={item.text} className='mdb-color lighten-5 z-depth-5'>
      
      <MDBCardImage src={item.pic} className='w-100'/>
      <MDBBtn
            floating
            tag='a'
            className='ml-auto mr-4 lighten-3 mdb-coalor'
            action
          >
            <MDBIcon icon='chevron-right' className="mdb-color lighten-3"/>
          </MDBBtn>
          <MDBCardBody cascade>
          <MDBCardTitle> {item.text}</MDBCardTitle>
         
        

      
          
          <span>
            <MDBIcon className="faicons" onClick={() => {props.deleteItem(item.text)}} icon="trash" /> 
            
          </span>
          
          <span className='float-right font-weight-bold'>
            <span className='mr-3'>{formatPrice(item.price)}</span>
            <MDBBtn onClick={() => {props.addProduct(item)}} className='px-3 py-2 green m-0'><MDBIcon className="faicons"  icon="cart-plus" /></MDBBtn>
            </span>
            </MDBCardBody>

            <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
            <ul className='list-unstyled list-inline font-small d-flex justify-content-around'>
              
              <li className='list-inline-item pr-2'>
                <a href='#!' className='white-text'>
                  <MDBIcon far icon='comments' className='mr-1' />
                  12
                </a>
              </li>

         
              
              <li className='list-inline-item pr-2'>
                <a href='#!' className='white-text'>
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star-half-alt" />
                  <MDBIcon far icon="star" />
                </a>
              </li>
              
             
            </ul>
          </div>
       
    
    </MDBCard>
  </MDBCol>})
    
return <>
 {listItems}
</>;
  }

  export default ListItems;