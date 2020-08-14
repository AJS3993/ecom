import React from 'react';
import ListItems from './ListItems/ListItems';
import Cart from './Cart/Cart';
import {MDBCol,MDBRow} from 'mdbreact';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
      products:[],
      
      currentProduct:{
        text:'',
        price:''
      },
      
        items:[{text: "abc",price:'8'}],
      
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
      <header>
        <MDBRow>
          
          <MDBCol md='2'> 
            <form id="to-do-form" onSubmit={this.addItem}>
              <input type="text" name='text' placeholder="Name"  onChange={this.handleTextInput}></input>
              <input type="text" name='price' placeholder="Price" onChange={this.handlePriceInput}></input>
              <button type="submit">Add</button>
            </form>
          </MDBCol>
          
          <MDBCol md='8'>
            <MDBRow> 
              <ListItems products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
            </MDBRow>
          </MDBCol>
   
          <MDBCol md='2'> 
            <Cart products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
          </MDBCol>
  
        </MDBRow>

      </header>
    </div>
  );
 }
}


export default App;
