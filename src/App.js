import React from 'react';
import ListItems from './ListItems/ListItems';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
      products:[],
      
      currentProduct:{
        text:'',
        price:'',
        key:''
      },
      
        items:[{key: 1597208784456, text: "abc",price:'8'}],
      
        currentItem:{
        text:'',
        price:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.handleInput = this.handleInput.bind(this);
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
        price:'',
        key:''
      }
    })
    }}
  }

addProduct(e){
  this.setState(prevState => ({
    products: [...prevState.products, {text: e.text,price: e.price}]
  }))
}

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
 
  

  deleteItem(key){
   
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
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
       
       
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" name='text' placeholder="Name"  onChange={this.handleInput}></input>
          <input type="number" name='price' placeholder="Price" value= {this.state.currentItem.price} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>

          <ListItems products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
        

        
      </header>
    </div>
  );
 }
}


export default App;
