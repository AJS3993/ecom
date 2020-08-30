
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBBtn,MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle } from "mdbreact";
import ListItems from '../ListItems/ListItems';
import Cart from '../Cart/Cart';
import App from '../App';
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
    const navStyle = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
    };

    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };

    return (
      <Router>
        <div className="fixed-sn navie">
          

          <section id='topNav'>
       


          <MDBNavbar className='mdb-color darken-4 w-100 py-0' id='top'>
           
            <MDBNavbarNav left>
          

            <h5 className='white-text'>Free Shipping for Ember Members</h5>
           
            
            </MDBNavbarNav>
            
            <MDBNavbarNav left id='st2' style={specialCaseNavbarStyles}>
              

              
              <MDBNavItem active>
              <MDBNavLink className='font-weight-bold' to="#!">
                    <div id='topLink' className="d-none d-md-inline py-2 px-4 ml-5">Mens</div>
                </MDBNavLink>
              </MDBNavItem>
              
              <MDBNavItem>
                <MDBNavLink className='font-weight-bold' to="#!">
                  <div id='topLink' className="d-none d-md-inline py-2 px-4 ml-5">Womens</div>
                </MDBNavLink>
              </MDBNavItem>
            
              <MDBNavItem>
                <MDBNavLink className='font-weight-bold' to="#!">
                  <div id='topLink' className="d-none d-md-inline py-2 px-4 ml-5">Kids</div>
                </MDBNavLink>
              </MDBNavItem>
             

             </MDBNavbarNav>
              
            

            <MDBNavbarNav right style={specialCaseNavbarStyles}>
            

              <MDBNavItem>
                <MDBDropdown className='orange'>
                  <MDBDropdownToggle id='tn' className='mdb-color accBut p-1' nav caret>
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
                <MDBDropdown className='ml-4'>
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
              overlay='black-light'
            >
              <MDBContainer className='h-100 d-flex justify-content-center align-items-center'>
                <MDBRow>
                  <MDBCol md='12' className='mt-0 mx-auto text-center'>
                 
                 <span className='orange-text font-weight-bold logo p-1 px-3'>
                   
                 <MDBIcon icon='fire' size='sm' className='orange-text logofire px-2'/>
                    Ember </span>
                   {/* <p>
                   <span id='st' className='white font-weight-bold py-1'>&nbsp;&nbsp;- SHOE </span>
                   
                   <span id='st' className='font-weight-bold white py-1'> 
                   <MDBIcon icon='fire' size='sm' className=' white px-2'/>
                   </span>
                  
                    <span id='st' className='font-weight-bold white py-1'> STORE -&nbsp;&nbsp;</span>
                   
                   </p> */}
               
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </section>



          <section id='main'>    
            <div className="App w-100 px-0 mx-0">
              <MDBRow className='w-100'>
             
                <MDBCol id='midCol' md='12' className='p-3 mx-3 mt-n4'> 
                  <div className='d-flex align-content-around flex-wrap'>
                   
                    
                    <MDBRow className='mt-n3 w-100'>
      
      <MDBCol md='8' className='m-0 px-0'>

        <div className='px-3 forBox m-0'>
        
        <MDBRow className=''>

        <MDBCol md='6' className='m-0 p-0'>
        
        <MDBCard
        
          className='card-image'
          style={{
            backgroundImage:
              "url('https://i.imgur.com/6ow1bpB.jpg')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-blue-light py-5'>
            <div className='w-100 text-left'>
              <MDBCardTitle tag='h3' className='pt-2 pink darken-4 mb-5 px-4'>
                <strong>For Her</strong>
              </MDBCardTitle>
             
            </div>
          </div>
        </MDBCard>

        </MDBCol>


        <MDBCol md='6' className='m-0 p-0'>
   
      <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('https://i.imgur.com/6ow1bpB.jpg')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-blue-light py-5'>
            <div className='w-100 text-right'>
              <MDBCardTitle tag='h3' className='pt-2 blue darken-4 mb-5 px-4'>
                <strong>For Him</strong>
              </MDBCardTitle>
             
            </div>
          </div>
        </MDBCard>

</MDBCol>
        </MDBRow>

        <MDBRow>

<MDBCol md='12' className='m-0 p-0'>

        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('https://i.imgur.com/6ow1bpB.jpg')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-blue-light pt-5'>
            <div className='w-100'>
              <MDBCardTitle tag='h3' className='pt-2 orange darken-4 mt-5'>
                <strong>For Them</strong>
              </MDBCardTitle>
             
            </div>
          </div>
        </MDBCard>
        </MDBCol>
        </MDBRow>
        </div>
      </MDBCol>

      <MDBCol md='4' className='p-5'>
      
      <div className='text-center memberCard'>

          <p className='orange darken-3 font-weight-bold ctop'>Official Membership Card</p>

      <span className='orange-text font-weight-bold clogo'>
   
                   <MDBIcon icon='fire' size='sm' className='orange-text logofire px-2'/>
                      Ember </span>
                      <br/><br/>
                 <p id='st' className='white font-weight-bold my-n3'>- Member -</p>
                 <br/>

            </div>

      </MDBCol>


    </MDBRow> 
                    
                    
                    {/* <ListItems products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/> */}
                  </div>
                </MDBCol>
                
              </MDBRow>
            </div>
          </section>
{/* 
<section id='app'><App/></section> */}

        </div>
      </Router>
    );
  }
}

export default DoubleNavigationPage;