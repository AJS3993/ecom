import React from 'react';
import StoreListItemsMin from './StoreListItemsMin/StoreListItemsMin';
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

      
      Topitems:[
        {text: "Zero-G",price:'#1',pic: 'https://i.imgur.com/umRhB0d.jpg?1'},
      {text: "Loafers",price:'#2',pic: 'https://i.imgur.com/i7Qmotr.jpg?1'},
      {text: "Runners",price:'#3',pic: 'https://i.imgur.com/R61ZmFW.jpg?1'}
      ],
      
        items:[
          {text: "Zero-G",price:'4999',pic: 'https://i.imgur.com/umRhB0d.jpg?1',discount:'15%'},
        {text: "Loafers",price:'3999',pic: 'https://i.imgur.com/i7Qmotr.jpg?1',discount:'20%'},
        {text: "Runners",price:'2500',pic: 'https://i.imgur.com/R61ZmFW.jpg?1',discount:'50%'},
        {text: "Sneaks",price:'2900',pic: 'https://i.imgur.com/aMlSAVq.jpg?1',discount:'10%'},
        {text: "Zero-G",price:'4999',pic: 'https://i.imgur.com/umRhB0d.jpg?1',discount:'25%'},
        {text: "Loafers",price:'3999',pic: 'https://i.imgur.com/i7Qmotr.jpg?1',discount:'30%'}
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
    <div className="App mdb-color darken-4">

     
      
     <MDBRow className=' mt-4'>

     <MDBCol md='2' className='ml-n3'>
         
     <MDBBtn className='p-1 font-weight-bold dLabel mb-n4 mt-n3 ml-n2'>Find The Perfect Gift!</MDBBtn>
               <div className='px-2 pb-2  z-depth-5 forBox mt-0 pt-1 mx-n2'>
                 <MDBRow className='mt-3 mr-0'>
                   <MDBCol md='12' className='pr-1 m-0'>
                     <MDBCard className='card-image forBoxHer m-1' style={{backgroundImage:"url('https://i.imgur.com/mK8jYFO.jpg')"}}>
                       <div className='text-white text-center d-flex align-items-center rgba-pink-light py-5'>
                         <div>
                           <MDBCardTitle className='mb-n5 py-0'>
                           <MDBBtn className=' pink darken-4 z-depth-5 forBut p-1'>For Her</MDBBtn>
                           </MDBCardTitle>
                         </div>
                       </div>
                     </MDBCard>
                   </MDBCol>
                   <MDBCol md='12' className='pr-1 m-0'>
                     <MDBCard className='card-image forBoxHim m-1' style={{backgroundImage:"url('https://i.imgur.com/WBVXvg2.jpg')"}}>
                       <div className='text-white text-center d-flex align-items-center rgba-blue-light py-5'>
                         <div>
                           <MDBCardTitle className='mb-n5 py-0'>
                             <MDBBtn className='blue darken-4  forBut p-1'>For Him</MDBBtn>
                           </MDBCardTitle>
                         </div>
                       </div>
                     </MDBCard>
                   </MDBCol>
            
             <MDBCol md='12' className='pr-1 m-0'>
               <MDBCard className='card-image forBoxThem m-1' style={{backgroundImage:"url('https://i.imgur.com/lk7Oq6M.jpg')"}}>
                 <div className='text-white text-center d-flex align-items-center rgba-orange-light py-5'>
                   <div>
                   <MDBCardTitle className='mb-n5 py-0'>
                             <MDBBtn className='orange darken-4 forBut p-1'>For Them</MDBBtn>
                           </MDBCardTitle>
                   </div>
                 </div>
               </MDBCard>
               
             </MDBCol>
           </MDBRow>
         </div>
     </MDBCol>
       
              <MDBCol md='3' className='px-3'> 
              <div className='pt-3 mt-2 mr-5'>
       {/* <span className='memBanner px-3 py-1 mdb-color mx-3 font-weight-bold'>Become A Member</span>  */}
    
        <MDBBtn disabled className='font-weight-bold mt-1 newB px-0 py-1 pb-2'>


            <MDBBtn className='float-left ml-n5 py-1 px-4 mdb-color  catLabelL mt-n5'>
            <MDBBtn  className='float-left py-1 px-3  mdb-color darken-4 catLabelL  z-depth-3 mb-n1'>
            <MDBBtn  className='float-left pb-2 px-3 mr-3 ml-n2  mdb-color lighten-2 catLabelL z-depth-5 mb-n1'>
            <MDBIcon icon='fire' size='2x' className='p-2 pt-3 orange-text'/>
            </MDBBtn>
            </MDBBtn>
            </MDBBtn>
        
           
            <MDBBtn className='float-right mr-n5 py-1 px-4 mdb-color  catLabelR font-weight-bold mt-n5'>
            <MDBBtn className='float-right py-1 px-3  mdb-color darken-4 catLabelR font-weight-bold  z-depth-3 mb-n1'>
            <MDBBtn className='float-right pb-2 px-3 mr-n2 ml-3  mdb-color lighten-2 catLabelR font-weight-bold z-depth-5 mb-n1'>
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
        <MDBRow className='mdb-color darken-2 pt-2 mt-n5 mb-n3 px-3 cardOfferRow'>
          <MDBCol md="3">
            <MDBIcon icon="truck" size="lg" className="red-text" />
            <p className="font-weight-light white-text cardOffer mb-n1">Free Shipping</p>
           
          </MDBCol>
          <MDBCol md="3">
            <MDBIcon icon="hand-holding-usd" size="lg" className="cyan-text" />
            <p className="font-weight-light white-text cardOffer">Low Cost</p>
           
          </MDBCol>
          <MDBCol md="3">
            <MDBIcon icon="undo-alt" size="lg" className="orange-text" />
            <p className="font-weight-light white-text cardOffer">Free Returns</p>
        
          </MDBCol>
          <MDBCol md="3">
            <MDBIcon icon="shoe-prints" size="lg" className="green-text" />
            <p className="font-weight-light white-text cardOffer">Lots of Shoes</p>


          </MDBCol>
        </MDBRow>
            
            </MDBBtn>
            
  
            </div>
           
       

          

      </MDBCol>

     
      
      <MDBCol md='5' className='pl-0'>

      <MDBCol id='midCol' md='12' className='p-0 ml-5 saleBox mt-4'> 
          <div className='d-flex align-content-around flex-wrap mt-n2'>
            <div className='w-100 pl-5 mb-n1'>
              <MDBBtn disabled className='font-weight-bold mt-n5 newA mb-n2 px-3 py-0'>Hot Sales! <MDBBtn className='pt-2 px-3 my-n2 mr-n3 catLabel font-weight-bold'><MDBIcon icon='fire' size='2x' className='orange-text'/></MDBBtn></MDBBtn>
            </div>
            <ListItems products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
          </div>
        </MDBCol>
                   
       
        </MDBCol>

        

    
        <MDBCol md='2' className='pl-5'>   
        <div>
              <MDBBtn disabled className=' newA p-0 text-nowrap mt-n4'>Top Sellers! </MDBBtn>
            </div>
<div className='d-flex align-content-around flex-wrap  mdb-color darken-4 mt-n5 pt-5 p-2 bestBox'>
           
            <StoreListItemsMin products={this.state.products} items={this.state.Topitems} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
          </div></MDBCol>

      </MDBRow>
      

       
    </div>
  );
 }
}


export default App;
