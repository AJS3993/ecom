import React from "react";
import './StorePage.css';
import { MDBRow, MDBCol,MDBBtn,MDBIcon } from "mdbreact";
import ListItems from '../ListItems/ListItems';

class StorePage extends React.Component {

  constructor(props){
    super(props);
    this.state = {

      items:[
        {text: "Nike",price:'4999',pic: 'https://i.imgur.com/umRhB0d.jpg?1'},
      {text: "Adidas",price:'3999',pic: 'https://i.imgur.com/i7Qmotr.jpg?1'},
      {text: "Runners",price:'2500',pic: 'https://i.imgur.com/R61ZmFW.jpg?1'},
      {text: "Sneakers",price:'2900',pic: 'https://i.imgur.com/aMlSAVq.jpg?1'},
      {text: "Sketchers",price:'4900',pic: 'https://i.imgur.com/q7CzVUK.jpg?1'},
      {text: "Slippers",price:'3599',pic: 'https://i.imgur.com/V97G2Rs.jpg?1'},
    ]

  }
}

    render() {
        return (
            <div className='w-100'>
                <MDBRow className='w-100'>

                    <MDBCol md='2' className='w-100 mx-0 px-0'>
                    <MDBBtn disabled className='font-weight-bold mt-4 newC mb-n2 px-5 py-0'>
              <MDBBtn className='pt-2 px-3 mt-n2 mb-n4 ml-n4 catLabelLB font-weight-bold mdb-color darken-3'>
                
                <MDBIcon icon='fire' size='2x' className='white-text mt-2'/>
                <span className='white-text mt-1 ml-2'>Shop</span>

                
                
                </MDBBtn>
                <br/> <br/>
                <div className='w-100 mdb-color darken-3'>
                <span className='mdb-color darken-3'>Men</span>
                </div>
                <br/>
                
                </MDBBtn>
                    </MDBCol>

                    <MDBCol md='10' className='mx-0'>
        
          <div className='d-flex align-content-around flex-wrap mt-n2'>
            <div className='w-100 pl-5 mb-2'>
              
             
            </div>
            <ListItems products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
          </div>
        </MDBCol>
                        
                   

                </MDBRow>

            </div>
        )

    }

}

export default StorePage