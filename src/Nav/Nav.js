
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBBtn,MDBNavbar, MDBNavbarNav, MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle } from "mdbreact";
import Cart from '../Cart/Cart';
import App from '../App';
import StorePage from '../StorePage/StorePage';
import './Nav.css'

class DoubleNavigationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStateA: false,
      breakWidth: 1300,
      windowWidth: 0,
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

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth
    })

  handleToggleClickA = () => {
    this.setState({
      toggleStateA: !this.state.toggleStateA
    });
  };

  render() {
    

    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };

    return (
      <Router>
        <div className="fixed-sn mdb-color">
          
          <section id='topNav'>
            <MDBNavbar dark expand='md' fixed='top' className='rgba-black-strong py-0 navie'>
              <MDBNavbarNav left>
                
                <h5 className='orange-text'><MDBIcon icon='fire' size='lg' className='orange-text'/>&nbsp;&nbsp;Bring power to your steps</h5>
              </MDBNavbarNav>
              <MDBNavbarNav right style={specialCaseNavbarStyles}>
                <MDBNavItem>
                  <MDBDropdown className='p-2'>
                    <MDBDropdownToggle id='tn' className='accBut p-1 border' nav caret>
                      <MDBIcon icon="user" className="d-inline-inline" />{" "}
                      <div className="d-none d-md-inline accButt">Account</div>
                     </MDBDropdownToggle>
                    <MDBDropdownMenu right className='border border-dark'>
                      <MDBDropdownItem className='font-weight-bold' href="#!">Orders</MDBDropdownItem>
                      <MDBDropdownItem className='font-weight-bold' href="#!">Account Info</MDBDropdownItem>
                      <hr className='hr-dark'/>
                      <MDBDropdownItem className='font-weight-bold' href="#!">Sign out</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBDropdown className='ml-3 p-2'>
                    <MDBDropdownToggle id='tn' className='mdb-color border accBut p-1' nav caret>
                      <MDBIcon icon="shopping-cart" className="d-inline-inline" />{" "}
                      <div className="d-none d-md-inline cartButt">Cart</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right className='border border-dark p-0'>
                      <MDBDropdownItem className='font-weight-bold p-0' href="#!">
                        <Cart products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
                      </MDBDropdownItem>
                      <MDBDropdownItem className='p-0'>
                        <MDBBtn className='checkout w-100 addBut font-weight-bold m-0'>Check Out <MDBIcon icon="angle-double-right" /></MDBBtn>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBNavbar>
          </section>
 
          <section id='home'>
            <MDBView>
              <MDBMask
              className='d-flex justify-content-center align-items-center'
              overlay='black-light'>
                <MDBContainer className='w-100 d-flex justify-content-center align-items-center'>
                  <MDBRow >
                    <MDBCol md='12' className='w-100'>
                      
                      <span className='orange-text font-weight-bold logo p-1 px-3 text-center w-75 d-flex justify-content-center align-items-center mb-n3 mt-4'> 
                      <MDBIcon icon='fire' className='orange-text mdb-color darken-3 logofire px-2 py-1 mb-2 mx-2'/>
                  Ember</span>
                      
                      <span className='font-weight-bold logo2 d-flex flex-row-reverse mb-n3 mt-2 mdb-color darken-2 w-75'>
                        Footwear & More &nbsp;</span>
                        </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBMask>
            </MDBView>
          </section>

          <section id='bottomNav'>
            <div className='w-100 text-center rgba-black-strong'>
              <div id='st' className='rounded font-weight-bold py-1 text-center'>
                <MDBBtn className='py-2 px-4 mx-3 z-depth-0 navBut' outline color='' >MEN</MDBBtn>
                <MDBBtn className='py-2 px-4 mx-3 z-depth-0 navBut' outline color='' >WOMEN</MDBBtn>
                <MDBBtn className='py-2 px-4 mx-3 z-depth-0 navBut' outline color='' >KIDS</MDBBtn>
              </div>
            </div> 
          </section>

          <section><App/></section>

          <section><StorePage/></section>
 
 </div>
</Router>
    );
  }
}

export default DoubleNavigationPage;