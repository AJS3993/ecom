import React from 'react';
import {MDBIcon,MDBCard,MDBCol,MDBCardText,MDBCardBody,MDBCardFooter, MDBCardImage,MDBBtn} from 'mdbreact';
import {formatPrice,getFunName,person} from '../helpers';
import './ListItems.css'

function ListItems(props){
  
  // Items for sale
  const items = props.items;
  const listItems = items.map(item =>
   {
  return <MDBCol md='3' className='m-0 '>
    
    <MDBCard cascade key={item.text} className='z-depth-5 cardie mt-4 mb-3 mx-n1'>
      

      {/* Card Title */}
      <span className='d-flex flex-row-reverse orange darken-1 cardieTop'>
   <MDBBtn className='py-0 px-1 catLabel my-0 font-weight-bold mr-0'>&nbsp;&nbsp;<MDBIcon icon='fire'></MDBIcon>&nbsp; {item.company}</MDBBtn>
        <h4 className='mx-auto font-weight-bold mb-0'>{item.text}</h4>
      </span>
      

      {/* Card Image */}
      <MDBCardImage src={item.pic} className='w-100'/>
      

      {/* Price Button */}
      <MDBBtn tag='a' action rounded
            className='ml-auto mr-2 mb-3 mt-n5 py-1 px-2 floater z-depth-5'
            onClick={() => {props.addProduct(item)}}
      >
        <span className='pric font-weight-bold'> {formatPrice(item.price)}</span>
      </MDBBtn>


      {/* Card Text */}
      <MDBCardBody cascade className='p-0'>
        <MDBCardText className='p-2 font-weight-bold black-text mdb-color lighten-5 mt-n2 cardieText'>{getFunName()} {getFunName()} {getFunName()}</MDBCardText>
      </MDBCardBody>


      {/* Card Footer */}

      {/* <div className=' mdb-color lighten-3 text-center pt-1'>
        <ul className='list-unstyled list-inline font-small d-flex justify-content-around mb-0 p-1'>
           */}

          {/* Comments */}
          {/* <li className='list-inline-item pr-2'>
            <a href='#!' className='comments'>
              <MDBIcon far icon='comments' className='mr-1' />
                  0
            </a>
          </li> */}


          {/* Rating */}
          {/* <li className='list-inline-item mr-n2'>
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
      </div> */}
       
    
    </MDBCard>
  </MDBCol>})
    
return <>
 {listItems}
</>;
  }

  export default ListItems;