import React from "react";
import "./StorePage.css";
import {
  MDBIcon,
  MDBCol,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import StoreListItems from "../StoreListItems/StoreListItems";
import Cart from "../Cart/Cart";

class StorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: {
        text: "",
        price: "",
      },
      items: [
        {
          text: "Zero-G",
          company: "Nike",
          price: "4999",
          pic: "https://i.imgur.com/umRhB0d.jpg?1",
          type: "Athletic",
          comments:1,
          rating:4.1,
          favorite: 'notFav',
          score: 1
        },
        {
          text: "Jumpers",
          company: "Adidas",
          price: "3999",
          pic: "https://i.imgur.com/i7Qmotr.jpg?1",
          type: "Athletic",
          comments:3,
          rating:2.3,
          favorite: 'notFav',
          score: 1
        },
        {
          text: "Loafers",
          company: "Adidas",
          price: "2999",
          pic: "https://i.imgur.com/OdHbxd7.jpg?1",
          type: "Casual",
          comments:1,
          rating:3.3,
          favorite: 'notFav',
          score: 1
        }, {
          text: "Walkers",
          company: "Nike",
          price: "2999",
          pic: "https://i.imgur.com/uRcgXtJ.jpg?1",
          type: "Sandals",
          comments:0,
          rating:3.8,
          favorite: 'notFav',
          score: 1
        },
        {
          text: "Runners",
          company: "Nike",
          price: "2500",
          pic: "https://i.imgur.com/R61ZmFW.jpg?1",
          type: "Athletic",
          comments:0,
          rating:2.8,
          favorite: 'notFav',
          score: 1
        },
        {
          text: "Sneakers",
          company: "Adidas",
          price: "2900",
          pic: "https://i.imgur.com/aMlSAVq.jpg?1",
          type: "Athletic",
          comments:1,
          rating:2.2,
          favorite: 'notFav',
          score: 1
        },
        {
          text: "Slippies",
          company: "Nike",
          price: "3599",
          pic: "https://i.imgur.com/V97G2Rs.jpg?1",
          type: "Slippers",
          comments:0,
          rating:3.9,
          favorite: 'notFav',
          score: 1
        },
        {
          text: "Ultra",
          company: "Nike",
          price: "4399",
          pic: "https://i.imgur.com/XrGclx5.jpg?1",
          type: "Casual",
          comments:3,
          rating:4.1,
          favorite: 'fav',
          score: 1
        },
        {
          text: "Strappers",
          company: "Adidas",
          price: "2995",
          pic: "https://i.imgur.com/cGWsYaG.jpg?1",
          type: "Sandals",
          comments:1,
          rating:2.7,
          favorite: 'notFav',
          score: 1
        },
        {
          text: "Slips",
          company: "Adidas",
          price: "1949",
          pic: "https://i.imgur.com/GV5uplu.jpg?1",
          type: "Slippers",
          comments:3,
          rating:4.8,
          favorite: 'notFav',
          score: 1
        },
        
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
      NikeFilter:false,
      AdidasFilter:false
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

                  {/* <div className="d-flex justify-content-center mt-3 ">
                    <MDBBtn className=" z-depth-0 m-0 py-2 px-2 showAllBut white-text "
                    >
                      Show All
                    </MDBBtn>
                  </div> */}

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

                        <MDBInput
                        label="Slippers"
                        type="checkbox"
                        id="Slippers"
                        onChange={()=> {
                          
                          if (!this.state.SlippersFilter){
                            this.state.items.map((item)=> {
                              if (item.type === 'Slippers'){item.score++}
                              console.log(this.state.SlippersFilter)
                            })
                          this.setState({SlippersFilter:true})
                          console.log(this.state.SlippersFilter)
                          }
                        
                          if (this.state.SlippersFilter===true){
                           this.state.items.map((item)=> {
                            if (item.type === 'Slippers'){item.score--}
                            
                          })
                          this.setState({SlippersFilter: false})
                          }}
                        }
                        checked={this.state.SlippersFilter}
                
                      ></MDBInput>

                        <MDBInput
                        label="Sandals"
                        type="checkbox"
                        id="Sandals"
                        onChange={()=> {
                          
                          if (!this.state.SandalsFilter){
                            this.state.items.map((item)=> {
                              if (item.type === 'Sandals'){item.score++}
                              console.log(this.state.SandalsFilter)
                            })
                          this.setState({SandalsFilter:true})
                          console.log(this.state.SandalsFilter)
                          }
                        
                          if (this.state.SandalsFilter===true){
                           this.state.items.map((item)=> {
                            if (item.type === 'Sandals'){item.score--}
                            
                          })
                          this.setState({SandalsFilter: false})
                          }}
                        }
                        checked={this.state.SandalsFilter}
                
                      ></MDBInput>
                    </MDBSideNavCat>
                  </MDBSideNavNav>

                  <MDBSideNavNav className="p-2 m-0 sid2">
                    <MDBSideNavCat name="Brand " id="sid2" icon="chevron-right">
                      <MDBInput
                        label="Nike"
                        type="checkbox"
                        id="Nike"
                        onChange={()=> {
                          
                          if (!this.state.NikeFilter){
                            this.state.items.map((item)=> {
                              if (item.company === 'Nike'){item.score++}
                              console.log(this.state.NikeFilter)
                            })
                          this.setState({NikeFilter:true})
                          }
                        
                          if (this.state.NikeFilter===true){
                           this.state.items.map((item)=> {
                            if (item.company === 'Nike'){item.score--}
                            
                          })
                          this.setState({NikeFilter: false})
                          }}
                        }
                        checked={this.state.NikeFilter}
                      ></MDBInput>

                      <MDBInput
                        label="Adidas"
                        type="checkbox"
                        id="Adidas"
                        onChange={()=> {
                          
                          if (!this.state.AdidasFilter){
                            this.state.items.map((item)=> {
                              if (item.company === 'Adidas'){item.score++}
                            })
                          this.setState({AdidasFilter:true})
                          }
                        
                          if (this.state.AdidasFilter===true){
                           this.state.items.map((item)=> {
                            if (item.company === 'Adidas'){item.score--}
                            
                          })
                          this.setState({AdidasFilter: false})
                          }}
                        }
                        checked={this.state.AdidasFilter}
                      ></MDBInput>
                    </MDBSideNavCat>
                  </MDBSideNavNav>

                </MDBContainer>
              </Router>
            </div>
          </MDBCol>

          <MDBCol md="9" className="ml-n5">
            <div className="d-flex align-content-around flex-wrap mt-4 mr-4 storeListBox">
              <div className="w-100">
                <h4 className="font-weight-bold deep-orange-text d-flex justify-content-between titleM2 py-1 mx-5">
                  <h2 className="py-2 my-n1 deep-orange-text font-weight-light">
                    <MDBIcon
                      icon="fire"
                      className="p-2 my-n3 deep-orange-text"
                    ></MDBIcon>
                    Walk like a king.
                  </h2>
                  <MDBBtn
                    className="py-1 px-2 m-0 mt-n2 DeptLabel font-weight-bold white"
                    disabled
                  >
                    &nbsp;&nbsp;Mens Shoes
                  </MDBBtn>
                </h4>
              </div>

              <StoreListItems
                products={this.state.products}
                items={this.state.items}
                addProduct={this.addProduct}
                addFav={this.addFav}
              />
            </div>
          </MDBCol>

          <MDBCol md="2" className="mt-4 pr-4 mx-n5">
            <Cart
              products={this.state.products}
              items={this.state.items}
              deleteItem={this.deleteItem}
              addProduct={this.addProduct}
            />
            {/* <Cart
              products={this.state.favorites}
              items={this.state.items}
              deleteItem={this.deleteItem}
              addProduct={this.addFav}
            /> */}
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default StorePage;
