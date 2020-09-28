
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MDBBtn,MDBNavbar, MDBNavbarNav, MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBFooter} from "mdbreact";
import App from '../App';
import StorePage from '../StorePage/StorePage';
import StorePageWomen from '../StorePageWomen/StorePageWomen';
import StorePageKids from '../StorePageKids/StorePageKids';
import StorePageBoys from '../StorePageBoys/StorePageBoys';
import PV2 from '../ProfilePage/v2'
import './Nav.css'

class DoubleNavigationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStateA: true,
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

 

  render() {
    

    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };

    return (
      <Router>

        <div className="fixed-sn w-100">
          
          
          {/* Navbar Start */}
          <section id='topNav'>
            
            {/* Top Left */}
            <MDBNavbar dark expand='md' fixed='top' className='rgba-black-strong py-0 navie'>
              <MDBNavbarNav left>
                <Link to='/'>
                  <h5 className='orange-text'><MDBIcon icon='fire' size='lg' className='orange-text'/>&nbsp;&nbsp;Bring power to your steps</h5>
                </Link>  
              </MDBNavbarNav>
              
              <MDBNavbarNav right style={specialCaseNavbarStyles}>
                
     
              <MDBNavItem>
              <Link className='white-text favLink'>  <MDBIcon icon="heart" className="d-inline-inline pt-3 px-1" />{" "}
                       <div className="d-none d-md-inline cartButt font-weight-light pr-5">Favorites</div></Link>
                   
                </MDBNavItem>


               {/* Cart Button */}
               <MDBNavItem>
               <Link className='white-text favLink'> <MDBIcon icon="shopping-cart" className="d-inline-inline pt-3 px-1" />{" "}
                   <div className="d-none d-md-inline cartButt font-weight-light pr-3">Cart</div></Link>   
                   
                </MDBNavItem>


                <MDBNavItem>
                  <MDBDropdown className='p-2 px-4'>
                    <MDBDropdownToggle id='tn' className='accBut p-1' nav caret>
                      <div className="d-none d-md-inline accButt font-weight-light">My Account</div>
                     </MDBDropdownToggle>
                    <MDBDropdownMenu right className='border border-dark'>
                      <Link to='/profile' className='p-0'><MDBDropdownItem className='font-weight-bold'>Account Info</MDBDropdownItem></Link>
                      <hr className='hr-dark'/>
                      <MDBDropdownItem className='font-weight-bold' href="#!">Sign out</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>




              </MDBNavbarNav>
            </MDBNavbar>
          </section>
 
          
          {/* Image with Logo */}
          <section id='home'>
            <MDBView>
              <MDBMask
              className='d-flex justify-content-center align-items-center'
              overlay='blue-light'>
                <MDBContainer className='d-flex justify-content-center align-items-center'>
                  <MDBRow >
                    <MDBCol className='w-100'>
                      <div className=' mt-4'>
                      <span className='white-text font-weight-bold logo p-1 px-3 text-center d-flex justify-content-center align-items-center mb-n3 z-depth-5'> 
                        <MDBIcon icon='fire' className='white-text pr-3 py-2 mb-2'/>
                        Ember
                      </span>
                      {/* <span className='font-weight-bold logo2 d-flex flex-row-reverse mt-1 mx-4'>
                        Footwear & More &nbsp;
                      </span> */}
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBMask>
            </MDBView>
          </section>



          <section id='bottomNav'>
            <div className='text-center rgba-black-strong'>
              <div id='st' className='rounded font-weight-bold py-1 text-left d-flex justify-content-around'>
                <Link to='/store' className=' z-depth-0 navBut white-text font-weight-light'>MEN</Link>
                <Link to='/women' className=' z-depth-0 navBut white-text font-weight-light'>WOMEN</Link>
                <Link to='/boys' className=' z-depth-0 navBut white-text font-weight-light'>BOYS</Link>
                <Link to='/kids' className=' z-depth-0 navBut white-text font-weight-light'>GIRLS</Link>
              </div>
            </div> 
          </section>

<section> 
          <Switch>
          <Route path='/profile' component={PV2} />
          <Route path='/kids' component={StorePageKids} />
          <Route path='/boys' component={StorePageBoys} />
<Route path='/women' component={StorePageWomen} />
<Route path='/store' component={StorePage} />
<Route path='/' component={App} />         
 </Switch>
 

 </section>
 <MDBFooter className='pt-4 mt-4 text-center text-md-left black footBoi'>
          <MDBContainer>
            <MDBRow className='mt-3'>
              <MDBCol
                size='12'
                md='3'
                lg='4'
                xl='3'
                className='offset-xl-1 col-12 mb-4'
              >
                <h6 className='text-uppercase font-weight-bold mb-4'>
                  Ember Footwear
                </h6>
                <p>
                A shopping platform bringing stylish people together. Not just a fashion statement, but a POWER MOVE. Thats why we focus on Value and quality as much as we do selection.
                </p>
              </MDBCol>

              <hr className='w-100 clearfix d-md-none' />

              <MDBCol size='12' md='2' className='offset-xl-1 mb-4'>
                <h6 className='text-uppercase font-weight-bold mb-4'>
                  Products
                </h6>
                <p>
                  <a href='#!'>Ember Footwear</a>
                </p>
                <p>
                  <a href='#!'>Apparel by Ember</a>
                </p>
                <p>
                  <a href='#!'>Ember Jr.</a>
                </p>
                <p>
                  <a href='#!'>Spark Shoe Repair</a>
                </p>
              </MDBCol>

              <hr className='w-100 clearfix d-md-none' />

              <MDBCol size='12' md='3' lg='2' className='mb-4'>
                <h6 className='text-uppercase font-weight-bold mb-4'>
                  Useful links
                </h6>
                <p>
                  <a href='#!'>Your Account</a>
                </p>
                <p>
                  <a href='#!'>Become an Affiliate</a>
                </p>
                <p>
                  <a href='#!'>Shipping Rates</a>
                </p>
                <p>
                  <a href='#!'>Help</a>
                </p>
              </MDBCol>

              <hr className='w-100 clearfix d-md-none' />

              <MDBCol size='12' md='4' lg='3'>
                <h6 className='text-uppercase font-weight-bold mb-4'>
                  Contact
                </h6>
                <p>
                  <i className='fa fa-home mr-3' /> New York, NY 10012, US
                </p>
                <p>
                  <i className='fa fa-envelope mr-3' /> info@EmberFM.com
                </p>
                <p>
                  <i className='fa fa-phone mr-3' /> + 01 234 567 88
                </p>
                <p>
                  <i className='fa fa-print mr-3' /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow className='mt-3 d-flex align-items-center'>
              <MDBCol size='12' md='5'>
                <p className='text-left grey-text'>
                  © 2020 Copyright: <strong> EmberFootwear.com</strong>
                 
                </p>
              </MDBCol>

             
            </MDBRow>
          </MDBContainer>
        </MDBFooter>
 
 </div>

</Router>
    );
  }
}

export default DoubleNavigationPage;