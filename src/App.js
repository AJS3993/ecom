import React from 'react';
import ListItems from './ListItems/ListItems';
import Cart from './Cart/Cart';
import {MDBCol,MDBRow,MDBIcon,MDBBtn} from 'mdbreact';

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

  // setUpdate(text,key){
  //   console.log("items:"+this.state.items);
  //   const items = this.state.items;
  //   items.map(item=>{      
  //     if(item.key===key){
  //       console.log(item.key +"    "+key)
  //       item.text= text;
  //     }
  //   })
  //   this.setState({
  //     items: items
  //   })
  // }

 render(){
  return (
    <div className="App w-100">
      
        <MDBRow className='w-100 mt-4'>
          
    
            {/* <form id="to-do-form" onSubmit={this.addItem} className='border p-2 grey'>
            <br/>
              <input type="text" name='text' placeholder="Name"  onChange={this.handleTextInput}/>
              <br/>  <br/>
              <input type="number" name='price' placeholder="Price" onChange={this.handlePriceInput}/>
              <br/>  <br/>
              <button type="submit">Add</button>
            </form> */}


       


          
          <MDBCol id='midCol' md='12' className='p-0'> 
          <div className='d-flex align-content-around flex-wrap mt-n3'>

<div className='w-100 pl-5'><MDBBtn rounded className=' darken-2 mdb-color-text font-weight-bold mt-n2 newA mb-n3'>On Sale!</MDBBtn>
</div>
     
          
         
              <ListItems products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
              </div>
          </MDBCol>
          

          {/* <MDBCol md='1' className='mx-n5'></MDBCol>
          
   
          <MDBCol md='2' className='d-block'>
            
            <Cart products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
          <MDBBtn rounded className='addBut pric addBut font-weight-bold p-1 float-right'>Check Out <MDBIcon icon="angle-double-right" /></MDBBtn>
          <br/> <br/> <br/>
          <div className='mrForm'>
            <h4 className='mdb-color white-text font-weight-bold addit py-2 mt-3'>Add Product</h4>
          <form id="to-do-form" onSubmit={this.addItem}>
            <br/>
              <input className='w-75 ml-3' type="text" name='text' placeholder="Name"  onChange={this.handleTextInput}/>
              <br/>  <br/>
              <input className='w-75 ml-3' type="number" name='price' placeholder="Price" onChange={this.handlePriceInput}/>
              <br/>  <br/> 
              <MDBBtn rounded type="submit" className='pric addBut font-weight-bold p-2 float-right mt-n3'>Add It!</MDBBtn>
           
            </form>
            </div>
          </MDBCol> */}
  
        </MDBRow>

 
    </div>
  );
 }
}


export default App;
