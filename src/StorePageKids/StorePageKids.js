import React from "react";
import './StorePageKids.css';
import { MDBIcon, MDBCol, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
import ListItems from '../ListItems/ListItems';
import Cart from '../Cart/Cart';


class StorePage extends React.Component {

  
  
  constructor(props){
    super(props);
    this.state = {
      
      products:[],
      
      currentProduct:{
        text:'',
        price:''
      },
      
        items:[
          {text: "Zero-G",company:"Nike",price:'4999',pic: 'https://i.imgur.com/jyivLBX.jpg',type:'Athletic'},
        {text: "Sneakers",company:"Adidas",price:'2900',pic: 'https://i.imgur.com/vzfFhJh.jpg',type:'Athletic'},
        {text: "GoodFit",company:"Nike",price:'4900',pic: 'https://i.imgur.com/0lEn7iX.jpg',type:'Casual'}
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


    render() {
        return (
            <div className='mdb-color'>
                <MDBRow>

                    <MDBCol md='1' className=''>
                    {/* <div className='font-weight-bold mt-4 newC mb-n2 p-0 pr-3'>
              
            
                <Router>
               
                <MDBContainer className='sid p-0 pb-2 mdb-color darken-4 border font-weight-light'>
        <h4 className=' mdb-color darken-4 white-text bby py-2'>
          <MDBIcon icon='eye' className=' px-2 white-text'></MDBIcon>
            Show</h4>
            
            <div className='d-flex justify-content-center mt-3'>
          
          <MDBBtn className='mdb-color darken-1 z-depth-0 m-0 py-2 px-2'>Show All</MDBBtn>
        
          </div>
            <MDBSideNavNav className='p-2 my-0 mdb-color darken-4 sid1'>
              
              
              <MDBSideNavCat
                name="Type "
                id="sid1"
                icon="chevron-right"
              >

                <MDBInput label='Casual' type='checkbox' id='casual'></MDBInput>
                
                <MDBInput label='Athletic' type='checkbox' id='athletic'></MDBInput>
                </MDBSideNavCat>

              </MDBSideNavNav>


              <MDBSideNavNav className='p-2 m-0 mdb-color darken-4 sid2'>
          

              <MDBSideNavCat
                name="Brand "
                id="sid2"
                icon="chevron-right"
              >
                <MDBInput label='Nike' type='checkbox' id='Nike'></MDBInput>
                
                <MDBInput label='Adidas' type='checkbox' id='Adidas'></MDBInput>
               
              </MDBSideNavCat>
              
              
             
            </MDBSideNavNav>



            

            <MDBSideNavNav className='p-2 m-0 mb-1 mdb-color darken-4 sid3'>
              
          
              
              <MDBSideNavCat 
              name="Color " 
              id="sid3" 
              icon="chevron-right"
              >
                <MDBInput label='Red' type='checkbox' id='Red'></MDBInput>
                
                <MDBInput label='Blue' type='checkbox' id='Blue'></MDBInput>
                </MDBSideNavCat>
              
            </MDBSideNavNav>

        </MDBContainer>
      </Router>
                
                </div> */}
                    </MDBCol>

                    <MDBCol md='10' className='ml-n5'>

     
        
          <div className='d-flex align-content-around flex-wrap mt-4 mr-4 storeListBox'>
          
          <div className='w-100'>
            
          <h4 className='font-weight-bold deep-orange-text d-flex justify-content-between titleM2 py-1 mx-5'>
      <h2 className='py-2 my-n1 deep-orange-text font-weight-light'>
        <MDBIcon icon='fire' className='p-2 my-n3 deep-orange-text'></MDBIcon>
        
        Built for fun</h2>
       <MDBBtn className='py-1 px-2 m-0 mt-n2 DeptLabel font-weight-bold white' disabled>&nbsp;&nbsp;Girls Shoes</MDBBtn>
</h4>
           
            </div>

          
           
        
           
            <ListItems products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
          </div>
        </MDBCol>
                        
                   <MDBCol md='2' className='mt-4 pr-4 mx-n5'>
                   <Cart products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
      
                   </MDBCol>

                </MDBRow>
                

            </div>
        )

    }

}

export default StorePage