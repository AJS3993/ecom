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
      
        items:[{text: "abc",price:'8',pic: 'https://previews.123rf.com/images/pretoperola/pretoperola1201/pretoperola120100029/11936982-vintage-red-shoes-on-white-background.jpg'}],
      
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
    <div className="App">
        <MDBRow>
          
          <MDBCol md='2'> 
            <form id="to-do-form" onSubmit={this.addItem} className='border p-2 grey'>
            <br/>
              <input type="text" name='text' placeholder="Name"  onChange={this.handleTextInput}/>
              <br/>  <br/>
              <input type="number" name='price' placeholder="Price" onChange={this.handlePriceInput}/>
              <br/>  <br/>
              <button type="submit">Add</button>
            </form>
          </MDBCol>

          <MDBCol md='1'></MDBCol>
          
          <MDBCol md='8' className='d-flex border p-3 mdb-color lighten-2 p-2'> 
              <ListItems products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
          </MDBCol>
   
          <MDBCol md='2' className='d-block'>
            
            <Cart products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
          <MDBBtn className='green p-2 float-right'>Check Out <MDBIcon icon="angle-double-right" /></MDBBtn>
          </MDBCol>
  
        </MDBRow>

 
    </div>
  );
 }
}


export default App;
