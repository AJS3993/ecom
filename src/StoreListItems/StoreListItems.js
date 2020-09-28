import React from "react";
import {
  MDBIcon,
  MDBCard,
  MDBCol,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRating
} from "mdbreact";
import { formatPrice } from "../helpers";
import "./StoreListItems.css";

function ListItems(props) {
  // Items for sale
  const items = props.items;

  const listItems = items.map((item) => {
    if (item.score>0){
      
    return (
      <MDBCol md="2" className="mx-2">
          
        <MDBCard
          cascade
          key={item.text}
          className="z-depth-5 cardie mt-4 mb-3 mx-n3"
          
        >
         
          {/* <MDBBtn color='red' className='px-2 py-0 m-1 rounded' onClick={() => {props.deleteItem(item.text)}}>
            X
            </MDBBtn> */}

          {/* Price Button */}
        
<div className='d-flex justify-content-between w-100'>

<span className='teeny'>{item.score}</span>
          <MDBBtn
            tag="a"
            action
            rounded
            className="mr-auto m-1 py-1 px-2 floaterM catLabelLL"
            onClick={() => {
              props.addProduct(item);
            }}
          >
            <span className="pricM font-weight-bold">
              {" "}
              <MDBIcon
                icon="shopping-cart"
                className="orange-text"
              ></MDBIcon> Add
            </span>
          </MDBBtn>
          <MDBIcon size='2x' fab icon={item.icon} className={item.iconColor} />&nbsp;&nbsp;&nbsp;


         {/* <MDBBtn className='favBut m-0 py-0 px-2'
          onClick={() => {
            props.addFav(item);
          }}
        >
         <span className={item.favorite}>
              <MDBIcon icon="heart" className='ml-1'/>
            </span>
         </MDBBtn> */}
</div>
        

          

          {/* Card Image */}
          <MDBCardImage src={item.pic} className="w-100" />
          
          <h4 className="font-weight-bold mdb-color darken-3 white-text d-flex justify-content-between titleM">
         
            <h4 className="p-0 pt-1 mr-n1 titleMa text-nowrap">
              &nbsp;<b>{item.company}</b>&nbsp;{item.text}
            </h4>
            
            <MDBBtn className="py-1 px-1 m-0 mt-n1 catLabelRRR font-weight-bold mdb-color lighten-3 text-nowrap">
              &nbsp;{formatPrice(item.price)}
            </MDBBtn>
          </h4>

          {/* Card Text */}
          <MDBCardBody cascade className="p-0">
            <MDBCardText className="p-2 font-weight-bold black-text mdb-color lighten-5 mt-n2 cText">
              <span className='font-weight-light'>Type: </span>{item.type} <hr className="my-1" /><span className='font-weight-light'>Brand: </span> {item.company} <hr className="my-1" /><span className='font-weight-light'>Color: </span>{item.color}
            </MDBCardText>
          </MDBCardBody>

          {/* Card Footer */}
          <div className=" mdb-color lighten-3 text-center cText">
            <ul className="list-unstyled list-inline font-small d-flex justify-content-around mb-0 pl-1">
              {/* Comments */}
              <li className="list-inline-item pr-2">
                <a href="#!" className="comments">
                  <MDBIcon far icon="heart" className="mr-1 pt-2 dark-grey-text" />
                </a>
              </li>

              {/* Rating */}
              
              <MDBRating 
              initialRating={2}
              fillColors={[
    'red-text',
    'orange-text',
    'yellow-text',
    'lime-text',
    'success-text'
  ]}
  iconSize='xs'/>
  
            </ul>
            
          </div>
        </MDBCard>
      </MDBCol>
    );
  }});

  return <>{listItems}</>;
}

export default ListItems;
