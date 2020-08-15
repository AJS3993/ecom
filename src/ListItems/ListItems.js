import React from 'react';
import {MDBIcon,MDBCard,MDBCol,MDBCardText,MDBCardBody,MDBCardFooter, MDBCardImage,MDBBtn} from 'mdbreact';
import {formatPrice,getFunName,person} from '../helpers';
import './ListItems.css'

function ListItems(props){
  // Items for sale
  const items = props.items;
  const listItems = items.map(item =>
   {
  return <MDBCol md='4' className='m-0 '>
    <MDBCard cascade key={item.text} className='z-depth-5 cardie m-0'>
    <span className='text-right'>
            <MDBBtn color='red' className='px-2 py-0 m-1 rounded' onClick={() => {props.deleteItem(item.text)}}>
            X
            </MDBBtn>
          </span>
      <h4 className='p-1 mt-n4 ml-1'>{person()}</h4>
     
      <MDBCardImage src={item.pic} className='w-100'/>
    
      <MDBBtn
            tag='a'
            className='ml-auto mr-2 mb-1 py-2 px-3 floater z-depth-5'
            action
            rounded
            onClick={() => {props.addProduct(item)}}
          >
             <span className='pric font-weight-bold'><MDBIcon icon='cart-plus'></MDBIcon> {formatPrice(item.price)}</span>
          </MDBBtn>
          <MDBCardBody cascade className='p-0'>
          <h3 className='mdb-color white-text'> {item.text}</h3>
   <MDBCardText className='p-2'>{getFunName()}</MDBCardText>
          
         
          
         
          
            </MDBCardBody>

            <div className='rounded-bottom mdb-color lighten-3 text-center pt-1 border'>
            <ul className='list-unstyled list-inline font-small d-flex justify-content-around mb-0 p-1'>
              
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