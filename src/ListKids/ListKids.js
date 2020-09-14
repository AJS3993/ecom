import React from "react";
import {
  MDBCard,
  MDBCol,
  MDBView,
  MDBMask,
  MDBCardImage,
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBIcon

} from "mdbreact";
import { formatPrice, getFunName  } from "../helpers";
import "./ListKids.css";

function ListItems(props) {
  // Items for sale
  const items = props.items;
  const ListItems = items.map((item) => {
    if (item.score>0){
    return (
      <MDBCol sm="6" md="3" lg="3" className="p-2 colo">
        <MDBCard cascade key={item.text} className="z-depth-5 cardie">
          {/* Card Title */}
          <span className="d-flex flex-row-reverse orange darken-1 cardieTop text-nowrap">
            <MDBBtn className="py-0 px-1 catLabel my-0 font-weight-bold mr-0 text-nowrap">
              {" "}
              &nbsp;{item.type}
            </MDBBtn>
           
    <h5 className="mx-auto mb-0"><b>{item.company}</b> {item.text}</h5>
          </span>
          <MDBView>
            {/* Card Image */}

            <MDBCardImage src={item.pic} className="w-100" />

            <MDBMask>
              {/* Price Button */}
              <MDBBtn
                tag="a"
                action
                rounded
                className="mr-auto mb-n5 mt-n1 py-1 px-2 floater z-depth-5"
                onClick={() => {
                  props.addProduct(item);
                }}
              >
                <span className="pric font-weight-bold">
                  {" "}
                  {formatPrice(item.price)}
                </span>
              </MDBBtn>
            </MDBMask>
          </MDBView>

          {/* Card Text */}

          <MDBCardBody cascade className='p-0'>
        <MDBCardText className='p-2 font-weight-bold black-text mdb-color lighten-4 mt-n2 cardieText'>{getFunName()}</MDBCardText>
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
      </MDBCol>
    );
  }});

  return <>{ListItems}</>;
}

export default ListItems;
