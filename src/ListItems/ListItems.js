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
    <MDBCard cascade key={item.text} className='z-depth-5 cardie mb-3 pt-4'>
    <span className='text-left ml-n2 mt-n2 '>
            <MDBBtn className='w-20 px-2 py-1 mt-n4 xbut z-depth-0 font-weight-bold' onClick={() => {props.deleteItem(item.text)}}>
            X
            </MDBBtn>
          </span>
     
     <span className='d-flex flex-row-reverse mt-1'>
     <MDBBtn className='w-100 catLabel p-0 mb-3 mt-n5 mdb-color font-weight-bold ml-4 mr-n1'>{person()}</MDBBtn>
 
     </span>
     
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
   <MDBCardText className='p-2 font-weight-bold black-text'>{getFunName()}</MDBCardText>
          
         
          
         
          
            </MDBCardBody>

            <div className='rounded-bottom mdb-color lighten-3 text-center pt-1 border'>
            <ul className='list-unstyled list-inline font-small d-flex justify-content-around mb-0 p-1'>
              
              <li className='list-inline-item pr-2'>
                <a href='#!' className='comments'>
                  <MDBIcon far icon='comments' className='mr-1' />
                  0
                </a>
              </li>

         
              
              <li className='list-inline-item mr-n2'>
                <a href='#!' className='stars'>
                  3.6/5 <MDBIcon icon="star" />
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