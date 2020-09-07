import React from 'react';
import {MDBIcon,MDBCard,MDBCol,MDBCardText,MDBCardBody,MDBCardFooter, MDBCardImage,MDBBtn, MDBButtonFixedItem} from 'mdbreact';
import {formatPrice,getFunName,person} from '../helpers';
import './StoreListItems.css'

function ListItems(props){
  
  // Items for sale
  const items = props.items;


  const filteredItemsNike = items.filter(item => (item.company == 'Nike' ))
  
const filteredItemsAdidas = items.filter(item => (item.company == 'Adidas'))



  const listItems = items.map(item =>
   {
  return <MDBCol md='4' sm='6' lg='3' className='m-0 '>
    
    <MDBCard cascade key={item.text}className='z-depth-5 cardie mt-4 mb-3 mx-n2'>
      
    {/* <MDBBtn color='red' className='px-2 py-0 m-1 rounded' onClick={() => {props.deleteItem(item.text)}}>
            X
            </MDBBtn> */}

       
          {/* Price Button */}
 <MDBBtn tag='a' action rounded
            className='mr-auto m-1 py-1 px-2 floaterM catLabelLL'
            onClick={() => {props.addProduct(item)}}
      >
        <span className='pricM font-weight-bold'> <MDBIcon icon='shopping-cart' className='orange-text'></MDBIcon> Add</span>
      </MDBBtn>
 



      

      {/* Card Image */}
      <MDBCardImage src={item.pic} className='w-100'/>
      

     

<h4 className='font-weight-bold mdb-color darken-3 white-text d-flex justify-content-between titleM'>
   <h4 className='p-0 pt-1 mr-n1 titleMa'>&nbsp;<b>{item.company}</b>&nbsp;{item.text}</h4>
       <MDBBtn className='py-1 px-1 m-0 mt-n1 catLabelRRR font-weight-bold mdb-color lighten-3'>&nbsp;&nbsp;&nbsp;{formatPrice(item.price)}&nbsp;</MDBBtn>
</h4>

      {/* Card Text */}
      <MDBCardBody cascade className='p-0'>
        
        <MDBCardText className='p-2 font-weight-bold black-text mdb-color lighten-5 mt-n2 cText'>Type: {item.type} <hr className='my-1'/> {getFunName()}{getFunName()}</MDBCardText>
      </MDBCardBody>


      {/* Card Footer */}
      <div className=' mdb-color lighten-3 text-center pt-1'>
        <ul className='list-unstyled list-inline font-small d-flex justify-content-around mb-0 p-1'>
          

          {/* Comments */}
          <li className='list-inline-item pr-2'>
            <a href='#!' className='comments'>
              <MDBIcon far icon='comments' className='mr-1' />
                  0
            </a>
          </li>


          {/* Rating */}
          <li className='list-inline-item mr-n2'>
            <a href='#!' className='stars'>
              3.6/5 
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