import React from "react";
import './StorePageWomen.css';
import { MDBIcon, MDBCol, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn,MDBInput } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreListItems from '../StoreListItems/StoreListItems';
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
          {text: "Zero-G",company:"Lush",price:'4999',pic: 'https://i.imgur.com/9Zejkpb.jpg',type:'Athletic',score:1, comments:3, rating:3.5},
        {text: "Jumpers",company:"Solebox",price:'3999',pic: 'https://i.imgur.com/61CvihV.jpg',type:'Athletic',score:1, comments:3, rating:3.5},
        {text: "Runners",company:"Lush",price:'2500',pic: 'https://i.imgur.com/WT9i2VB.jpg',type:'Athletic',score:1, comments:3, rating:3.5},
        {text: "Sneakers",company:"Solebox",price:'2900',pic: 'https://i.imgur.com/mK8jYFO.jpg',type:'Athletic',score:1, comments:3, rating:3.5},
        {text: "Slippers",company:"Lush",price:'3599',pic: 'https://i.imgur.com/EpFpqpY.jpg',type:'Casual',score:1, comments:3, rating:3.5},
        {text: "Ultra",company:"Lush",price:'4399',pic: 'https://i.imgur.com/gndpMnb.jpg',type:'Casual',score:1, comments:3, rating:3.5}
      ],
      itemsShowing: [],
      currentItem: {
        text: "",
        price: "",
      },
      favorites: [],
      CasualFilter:true,
      AthleticFilter:true,
      SandalsFilter:true,
      SlippersFilter:true,
      LushFilter:false,
      SoleboxFilter:false
    };
    this.addItem = this.addItem.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handlePriceInput = this.handlePriceInput.bind(this);
    this.addFav = this.addFav.bind(this);
    // this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      if (newItem.price !== "") {
        const items = [...this.state.items, newItem];
        this.setState({
          items: items,
          currentItem: {
            text: "",
            price: "",
          },
        });
      }
    }
    e.target.reset();
  }

  addProduct(e) {
    this.setState((prevState) => ({
      products: [...prevState.products, { text: e.text, price: e.price }],
    }));
  }

  addFav(e) {
    this.setState((prevState) => ({
      favorites: [...prevState.favorites, { text: e.text, price: e.price }],
    }));
  }

  handleTextInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        price: this.state.currentItem.price,
      },
    });
  }

  handlePriceInput(e) {
    this.setState({
      currentItem: {
        price: e.target.value,
        text: this.state.currentItem.text,
      },
    });
  }




    render() {
        return (
            <div>
                <MDBRow>

                <MDBCol md="2">
            <div className="font-weight-bold mt-4 newC mb-n2 py-0 pr-4">
              <Router>
                <MDBContainer className="sid p-0 pb-2 sideBoi white-text font-weight-light">
                  <h4 className="bby py-2">
                    <MDBIcon icon="eye" className=" px-2"></MDBIcon>
                    Show
                  </h4>


                  <MDBSideNavNav className="p-2 my-0 sid1">
                    <MDBSideNavCat name="Type " id="sid1" icon="chevron-right">
                      <MDBInput
                        label="Casual"
                        type="checkbox"
                        id="Casual"
                        onChange={()=> {
                          
                          if (!this.state.CasualFilter){
                            this.state.items.map((item)=> {
                              if (item.type === 'Casual'){item.score++}
                              console.log(this.state.CasualFilter)
                            })
                          this.setState({CasualFilter:true})
                          console.log(this.state.CasualFilter)
                          }
                        
                          if (this.state.CasualFilter===true){
                           this.state.items.map((item)=> {
                            if (item.type === 'Casual'){item.score--}
                            
                          })
                          this.setState({CasualFilter: false})
                          console.log(this.state.CasualFilter)
                        }
                        
                        }}
                        checked={this.state.CasualFilter}
                      ></MDBInput>

                      <MDBInput
                        label="Athletic"
                        type="checkbox"
                        id="Athletic"
                        onChange={()=> {
                          
                          if (!this.state.AthleticFilter){
                            this.state.items.map((item)=> {
                              if (item.type === 'Athletic'){item.score++}
                              console.log(this.state.AthleticFilter)
                            })
                          this.setState({AthleticFilter:true})
                          console.log(this.state.AthleticFilter)
                          }
                        
                          if (this.state.AthleticFilter===true){
                           this.state.items.map((item)=> {
                            if (item.type === 'Athletic'){item.score--}
                            
                          })
                          this.setState({AthleticFilter: false})
                          }}
                        }
                        checked={this.state.AthleticFilter}
                
                      ></MDBInput>

                       
                    </MDBSideNavCat>
                  </MDBSideNavNav>

                  <MDBSideNavNav className="p-2 m-0 sid2">
                    <MDBSideNavCat name="Brand " id="sid2" icon="chevron-right">
                      <MDBInput
                        label="Lush"
                        type="checkbox"
                        id="Lush"
                        onChange={()=> {
                          
                          if (!this.state.LushFilter){
                            this.state.items.map((item)=> {
                              if (item.company === 'Lush'){item.score++}
                              console.log(this.state.LushFilter)
                            })
                          this.setState({LushFilter:true})
                          }
                        
                          if (this.state.LushFilter===true){
                           this.state.items.map((item)=> {
                            if (item.company === 'Lush'){item.score--}
                            
                          })
                          this.setState({LushFilter: false})
                          }}
                        }
                        checked={this.state.LushFilter}
                      ></MDBInput>

                      <MDBInput
                        label="Solebox"
                        type="checkbox"
                        id="Solebox"
                        onChange={()=> {
                          
                          if (!this.state.SoleboxFilter){
                            this.state.items.map((item)=> {
                              if (item.company === 'Solebox'){item.score++}
                            })
                          this.setState({SoleboxFilter:true})
                          }
                        
                          if (this.state.SoleboxFilter===true){
                           this.state.items.map((item)=> {
                            if (item.company === 'Solebox'){item.score--}
                            
                          })
                          this.setState({SoleboxFilter: false})
                          }}
                        }
                        checked={this.state.SoleboxFilter}
                      ></MDBInput>
                    </MDBSideNavCat>
                  </MDBSideNavNav>

                </MDBContainer>
              </Router>
            </div>
          </MDBCol>
               

                    <MDBCol md='9' className='ml-n5'>

     
        
          <div className='d-flex align-content-around flex-wrap mt-4 mr-4 storeListBoxW'>
          
          <div className='w-100'>
            
          <h4 className='d-flex justify-content-between titleM2W py-1 mx-5'>
      <h2 className='py-2 my-n1 white-text'>
        <MDBIcon icon='fire' className='p-2 my-n3'></MDBIcon>
        
        Life is too short for bad shoes</h2>
       <MDBBtn className='py-1 px-2 m-0 mt-n2 DeptLabelW font-weight-bold mdb-color darken-3' disabled>&nbsp;&nbsp;Womens Shoes</MDBBtn>
</h4>
           
            </div>

          

        
           
            <StoreListItems products={this.state.products} items={this.state.items} deleteItem={this.deleteItem} addProduct={this.addProduct}/>
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