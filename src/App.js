import React from 'react';
import ListItems from './ListItems/ListItems';
import { MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardImage,MDBCardBody,MDBCardText,MDBCardFooter,MDBTooltip, MDBCarousel,MDBCarouselItem,MDBCarouselInner, MDBBadge } from "mdbreact";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
      products:[],
      
      currentProduct:{
        text:'',
        price:''
      },
      
        items:[
          {text: "Nike",price:'4999',pic: 'https://i.imgur.com/umRhB0d.jpg?1'},
        {text: "Adidas",price:'3999',pic: 'https://i.imgur.com/i7Qmotr.jpg?1'},
        {text: "Runners",price:'2500',pic: 'https://i.imgur.com/R61ZmFW.jpg?1'},
        {text: "Sneakers",price:'2900',pic: 'https://i.imgur.com/aMlSAVq.jpg?1'},
        {text: "Sketchers",price:'4900',pic: 'https://i.imgur.com/q7CzVUK.jpg?1'},
        {text: "Jumpers",price:'4300',pic: 'https://i.imgur.com/XrGclx5.jpg?1'},
        {text: "Slippers",price:'3599',pic: 'https://i.imgur.com/V97G2Rs.jpg?1'},
      ],
      
        currentItem:{
        text:'',
        price:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handlePriceInput = this.handlePriceInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    // this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      if(newItem.price !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        price:''
      }
    })
    }}
    e.target.reset();
  }

addProduct(e){
  this.setState(prevState => ({
    products: [...prevState.products, {text: e.text,price: e.price}]
  }))
}

  handleTextInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        price: this.state.currentItem.price
      }
    })
  }

  handlePriceInput(e){
    this.setState({
      currentItem:{
        price: e.target.value,
        text: this.state.currentItem.text
      }
    })
  }
 
  

  deleteItem(text){
   
    const filteredItems= this.state.items.filter(item =>
      item.text!==text);
    this.setState({
      items: filteredItems
    })

  }


 render(){
  return (
    <div className="App w-100">


      
     <MDBRow className='mx-2 mt-4'>
       
              <MDBCol md='5' className='px-1'> 
              <div className='px-5 pt-3 mt-2'>
       <span className='memBanner px-3 py-1 mdb-color mx-3 font-weight-bold'>Become A Member</span> 
    
        <MDBBtn disabled className='font-weight-bold mt-1 newB px-0 py-2 pb-2'>


            <MDBBtn className='float-left mx-n5 py-2 px-3 mdb-color darken-4 catLabelL font-weight-bold mt-n5'>
            <MDBBtn className='float-left py-2 px-3  mdb-color darken-2 catLabelL font-weight-bold  z-depth-3 mb-3'>
            <MDBBtn className='float-left py-2 px-3 ml-n2  mdb-color catLabelL font-weight-bold z-depth-5 mb-3'>
            <MDBIcon icon='fire' size='2x' className='p-2 pt-3 orange-text'/>
            </MDBBtn>
            </MDBBtn>
            </MDBBtn>
        
           
            <MDBBtn className='float-right mr-n5 py-2 px-3 mdb-color darken-4 catLabelR font-weight-bold mt-n5'>
            <MDBBtn className='float-right py-2 px-3  mdb-color darken-2 catLabelR font-weight-bold  z-depth-3 mb-3'>
            <MDBBtn className='float-right py-2 px-3 mr-n2  mdb-color catLabelR font-weight-bold z-depth-5 mb-3'>
            <MDBIcon icon='fire' size='2x' className='p-2 pt-3 orange-text'/>
            </MDBBtn>
            </MDBBtn>
            </MDBBtn>


            <div className='memberCardBox'>
          <div className='text-center memberCard z-depth-5 mdb-color darken-3 m-n5'>
            <p className='orange darken-3 font-weight-bold ctop'>Official Shoe Addict</p>
            <span className='orange-text font-weight-bold clogo'>
              <MDBIcon icon='fire' size='md' className='orange-text px-2'/>
              Ember </span>
            
            <p id='st2' className='white font-weight-bold mb-1'>- Member -</p>
            <br/>
          </div>
          
        </div>
        <MDBRow className='mdb-color darken-4 py-2 mt-n4'>
          <MDBCol md="3">
            <MDBIcon icon="truck" size="2x" className="red-text" />
            <h6 className="font-weight-bold  white-text">Free Shipping</h6>
           
          </MDBCol>
          <MDBCol md="3">
            <MDBIcon icon="hand-holding-usd" size="2x" className="cyan-text" />
            <h6 className="font-weight-bold  white-text">Low Monthly Fee</h6>
           
          </MDBCol>
          <MDBCol md="3">
            <MDBIcon icon="undo-alt" size="2x" className="orange-text" />
            <h6 className="font-weight-bold  white-text">Free Returns</h6>
        
          </MDBCol>
          <MDBCol md="3">
            <MDBIcon icon="shoe-prints" size="2x" className="green-text" />
            <h6 className="font-weight-bold  white-text">Lots of Shoes</h6>
        
          </MDBCol>
        </MDBRow>
            
            </MDBBtn>
            

            <div className=''>
            <span className='memBannerBottom float-right px-3 py-1 mdb-color mx-3 font-weight-bold mt-n3'>Get The Card!</span> 
            </div>
  
  
            </div>
              <MDBBtn className=' ml-5 p-0 font-weight-bold dLabel mb-n4'>Find The Perfect Gift!</MDBBtn>
                <div className='px-4 pb-3 mx-0 z-depth-5 forBox mt-0 pt-1'>
                  <MDBRow className='mt-3 mr-0'>
                    <MDBCol md='6' className='px-2'>
                      <MDBCard className='card-image forBoxHer m-1' style={{backgroundImage:"url('https://i.imgur.com/mK8jYFO.jpg')"}}>
                        <div className='text-white text-center d-flex align-items-center rgba-pink-light py-5'>
                          <div className='w-100 text-left'>
                            <MDBCardTitle className='mt-n5 py-3'>
                            <MDBBtn className=' pink darken-4 mb-3 mt-2 z-depth-5 w-50 forBut p-1'>For Her</MDBBtn>
                            </MDBCardTitle>
                          </div>
                        </div>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md='6' className='px-2'>
                      <MDBCard className='card-image forBoxHim mb-n1 ml-2 mt-1' style={{backgroundImage:"url('https://i.imgur.com/WBVXvg2.jpg')"}}>
                        <div className='text-white text-center d-flex align-items-center rgba-blue-light py-5'>
                          <div className='w-100 text-right'>
                            <MDBCardTitle className='mb-n5 py-0'>
                              <MDBBtn className='blue darken-4 mt-5 mb-n4 w-50 float-right forBut p-1'>For Him</MDBBtn>
                            </MDBCardTitle>
                          </div>
                        </div>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                <MDBRow>
              <MDBCol md='12' className='pl-4 pr-5 mt-2'>
                <MDBCard className='card-image forBoxThem m-2' style={{backgroundImage:"url('https://i.imgur.com/lk7Oq6M.jpg')"}}>
                  <div className='text-white text-center d-flex align-items-center rgba-orange-light pt-5 py-5'>
                    <div className='w-100'>
                    <MDBCardTitle className='mb-n5 py-0 mx-5'>
                              <MDBBtn className='orange darken-4 mt-5 mb-3 w-75 forBut p-1 mx-5'>For Them</MDBBtn>
                            </MDBCardTitle>
                    </div>
                  </div>
                </MDBCard>
                
              </MDBCol>
            </MDBRow>
          </div>
     
      
          

      </MDBCol>
      <MDBCol md='7'>
                   
        <MDBCol id='midCol' md='12' className='p-0 saleBox mt-1'> 
          <div className='d-flex align-content-around flex-wrap mt-n2'>
            <div className='w-100 pl-5 mb-2'>
              <MDBBtn disabled className='font-weight-bold mt-n4 newA mb-n2 px-3 py-0'>Hot Sales! <MDBBtn className=' px-3 my-n2 mr-n3 catLabel font-weight-bold'><MDBIcon icon='fire' size='2x' className='white-text'/></MDBBtn></MDBBtn>
            </div>
            <ListItems products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
          </div>
        </MDBCol>
        </MDBCol>
    
      </MDBRow>
    </div>
  );
 }
}


export default App;
