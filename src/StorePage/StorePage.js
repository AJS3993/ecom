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
          company: "hooli",
          icon:"hooli",
          iconColor:"red-text",
          price: "4999",
          pic: "https://i.imgur.com/umRhB0d.jpg?1",
          type: "Athletic",
          comments:1,
          rating:4,
          favorite: 'notFav',
          score: 1,
          color: 'Blue'
        },
        {
          text: "Jumpers",
          company: "ns8",
          icon:"ns8",
          iconColor:"green-text",
          price: "3999",
          pic: "https://i.imgur.com/i7Qmotr.jpg?1",
          type: "Athletic",
          comments:3,
          rating:2,
          favorite: 'notFav',
          score: 1,
          color: 'Black'
        },
        {
          text: "Loafers",
          company: "ns8",
          icon:"ns8",
          iconColor:"green-text",
          price: "2999",
          pic: "https://i.imgur.com/OdHbxd7.jpg?1",
          type: "Casual",
          comments:1,
          rating:3,
          favorite: 'notFav',
          score: 1,
          color: 'Blue'
        }, {
          text: "Walkers",
          company: "hooli",
          icon:"hooli",
          iconColor:"red-text",
          price: "2999",
          pic: "https://i.imgur.com/uRcgXtJ.jpg?1",
          type: "Sandals",
          comments:0,
          rating:3,
          favorite: 'notFav',
          score: 1,
          color: 'Brown'
        },
        {
          text: "Runners",
          company: "hooli",
          icon:"hooli",
          iconColor:"red-text",
          price: "2500",
          pic: "https://i.imgur.com/R61ZmFW.jpg?1",
          type: "Athletic",
          comments:0,
          rating:2,
          favorite: 'notFav',
          score: 1,
          color: 'Blue'
        },
        {
          text: "Sneakers",
          company: "hooli",
          icon:"hooli",
          iconColor:"red-text",
          price: "2900",
          pic: "https://i.imgur.com/aMlSAVq.jpg?1",
          type: "Athletic",
          comments:1,
          rating:2,
          favorite: 'notFav',
          score: 1,
          color: 'Red'
        },
        {
          text: "Slippies",
          company: "supple",
          icon:"supple",
          iconColor:"blue-text",
          price: "3599",
          pic: "https://i.imgur.com/V97G2Rs.jpg?1",
          type: "Slippers",
          comments:0,
          rating:4,
          favorite: 'notFav',
          score: 1,
          color: 'Grey'
        },
        {
          text: "Ultra",
          company: "hooli",
          icon:"hooli",
          iconColor:"red-text",
          price: "4399",
          pic: "https://i.imgur.com/XrGclx5.jpg?1",
          type: "Casual",
          comments:3,
          rating:4,
          favorite: 'fav',
          score: 1,
          color: 'Green'
        },
        {
          text: "Strappers",
          company: "ns8",
          icon:"ns8",
          iconColor:"green-text",
          price: "2995",
          pic: "https://i.imgur.com/cGWsYaG.jpg?1",
          type: "Sandals",
          comments:1,
          rating:2,
          favorite: 'notFav',
          score: 1,
          color: 'Black'
        },
        {
          text: "Slips",
          company: "supple",
          icon:"supple",
          iconColor:"blue-text",
          price: "1949",
          pic: "https://i.imgur.com/GV5uplu.jpg?1",
          type: "Slippers",
          comments:3,
          rating:5,
          favorite: 'notFav',
          score: 1,
          color: 'Green'
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
      
      hooliFilter:false,
      ns8Filter:false,
      suppleFilter:false,
      
      BrownFilter:false,
      BlueFilter:false,
      BlackFilter:false,
      GreyFilter:false,
      GreenFilter:false
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
          <MDBCol md="2" className='mr-4'>
            <div className="font-weight-bold mt-4 newC mb-n2 py-0 pr-4">
              
                <MDBContainer className="p-0 pb-2 white-text font-weight-light">
                

                  {/* <div className="d-flex justify-content-center mt-3 ">
                    <MDBBtn className=" z-depth-0 m-0 py-2 px-2 showAllBut white-text "
                    >
                      Show All
                    </MDBBtn>
                  </div> */}

                  <MDBSideNavNav className="p-2 my-0 ">
                    <MDBSideNavCat name=" &nbsp;&nbsp;&nbsp;Type " className='p-1 rounded' disabled>
                      

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
<br/>
                  <MDBSideNavNav className="p-2 m-0 sid2">
                    <MDBSideNavCat name="&nbsp;&nbsp;&nbsp;Brand " className='p-1 rounded'  disabled>
                      <MDBInput
                        label="hooli"
                        type="checkbox"
                        id="hooli"
                        onChange={()=> {
                          
                          if (!this.state.hooliFilter){
                            this.state.items.map((item)=> {
                              if (item.company === 'hooli'){item.score++}
                              console.log(this.state.hooliFilter)
                            })
                          this.setState({hooliFilter:true})
                          }
                        
                          if (this.state.hooliFilter===true){
                           this.state.items.map((item)=> {
                            if (item.company === 'hooli'){item.score--}
                            
                          })
                          this.setState({hooliFilter: false})
                          }}
                        }
                        checked={this.state.hooliFilter}
                      ></MDBInput>

                      <MDBInput
                        label="ns8"
                        type="checkbox"
                        id="ns8"
                        onChange={()=> {
                          
                          if (!this.state.ns8Filter){
                            this.state.items.map((item)=> {
                              if (item.company === 'ns8'){item.score++}
                            })
                          this.setState({ns8Filter:true})
                          }
                        
                          if (this.state.ns8Filter===true){
                           this.state.items.map((item)=> {
                            if (item.company === 'ns8'){item.score--}
                            
                          })
                          this.setState({ns8Filter: false})
                          }}
                        }
                        checked={this.state.ns8Filter}
                      ></MDBInput>
                       <MDBInput
                        label="supple"
                        type="checkbox"
                        id="supple"
                        onChange={()=> {
                          
                          if (!this.state.suppleFilter){
                            this.state.items.map((item)=> {
                              if (item.company === 'supple'){item.score++}
                              console.log(this.state.suppleFilter)
                            })
                          this.setState({suppleFilter:true})
                          }
                        
                          if (this.state.suppleFilter===true){
                           this.state.items.map((item)=> {
                            if (item.company === 'supple'){item.score--}
                            
                          })
                          this.setState({suppleFilter: false})
                          }}
                        }
                        checked={this.state.suppleFilter}
                      ></MDBInput>
                    </MDBSideNavCat>
                  </MDBSideNavNav>
                  <br/>
                  <MDBSideNavNav className="p-2 m-0 sid2">
                    <MDBSideNavCat name="&nbsp;&nbsp;&nbsp;Color " className='p-1 rounded'   disabled>
                     
                    <MDBInput
                        label="🟤 Brown"
                        type="checkbox"
                        id="Brown"
                        onChange={()=> {
                          
                          if (!this.state.BrownFilter){
                            this.state.items.map((item)=> {
                              if (item.color === 'Brown'){item.score++}
                              console.log(this.state.BrownFilter)
                            })
                          this.setState({BrownFilter:true})
                          }
                        
                          if (this.state.BrownFilter===true){
                           this.state.items.map((item)=> {
                            if (item.color === 'Brown'){item.score--}
                            
                          })
                          this.setState({BrownFilter: false})
                          }}
                        }
                        checked={this.state.BrownFilter}
                      ></MDBInput>

<MDBInput
                        label="🔵 Blue"
                        type="checkbox"
                        id="Blue"
                        onChange={()=> {
                          
                          if (!this.state.BlueFilter){
                            this.state.items.map((item)=> {
                              if (item.color === 'Blue'){item.score++}
                              console.log(this.state.BlueFilter)
                            })
                          this.setState({BlueFilter:true})
                          }
                        
                          if (this.state.BlueFilter===true){
                           this.state.items.map((item)=> {
                            if (item.color === 'Blue'){item.score--}
                            
                          })
                          this.setState({BlueFilter: false})
                          }}
                        }
                        checked={this.state.BlueFilter}
                      ></MDBInput>

<MDBInput
                        label="⚫ Black"
                        type="checkbox"
                        id="Black"
                        onChange={()=> {
                          
                          if (!this.state.BlackFilter){
                            this.state.items.map((item)=> {
                              if (item.color === 'Black'){item.score++}
                              console.log(this.state.BlackFilter)
                            })
                          this.setState({BlackFilter:true})
                          }
                        
                          if (this.state.BlackFilter===true){
                           this.state.items.map((item)=> {
                            if (item.color === 'Black'){item.score--}
                            
                          })
                          this.setState({BlackFilter: false})
                          }}
                        }
                        checked={this.state.BlackFilter}
                      ></MDBInput>

<MDBInput
                        label="⚪ Grey"
                        type="checkbox"
                        id="Grey"
                        onChange={()=> {
                          
                          if (!this.state.GreyFilter){
                            this.state.items.map((item)=> {
                              if (item.color === 'Grey'){item.score++}
                              console.log(this.state.GreyFilter)
                            })
                          this.setState({GreyFilter:true})
                          }
                        
                          if (this.state.GreyFilter===true){
                           this.state.items.map((item)=> {
                            if (item.color === 'Grey'){item.score--}
                            
                          })
                          this.setState({GreyFilter: false})
                          }}
                        }
                        checked={this.state.GreyFilter}
                      ></MDBInput>


<MDBInput
                        label="🟢 Green"
                        type="checkbox"
                        id="Green"
                        onChange={()=> {
                          
                          if (!this.state.GreenFilter){
                            this.state.items.map((item)=> {
                              if (item.color === 'Green'){item.score++}
                              console.log(this.state.GreenFilter)
                            })
                          this.setState({GreenFilter:true})
                          }
                        
                          if (this.state.GreenFilter===true){
                           this.state.items.map((item)=> {
                            if (item.color === 'Green'){item.score--}
                            
                          })
                          this.setState({GreenFilter: false})
                          }}
                        }
                        checked={this.state.GreenFilter}
                      ></MDBInput>

                    </MDBSideNavCat>
                  </MDBSideNavNav>

                </MDBContainer>
            
            </div>
          </MDBCol>

          <MDBCol md="10" className="mx-n5">
            <div className="d-flex align-content-around flex-wrap mt-4 mr-4 storeListBox">
              <div className="w-100">
                <h4 className="font-weight-bold d-flex justify-content-between titleM2 py-1 mx-5">
                  <h2 className="py-2 my-n1 white-text font-weight-light">
                    {/* <MDBIcon
                      icon="fire"
                      className="p-2 my-n3 white-text"
                    ></MDBIcon>
                    Walk like a king. */}
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

          {/* <MDBCol md="2" className="mt-5 mx-n5 px-0">
           <h1>&nbsp;</h1>
            <Cart
              products={this.state.products}
              items={this.state.items}
              deleteItem={this.deleteItem}
              addProduct={this.addProduct}
            /> */}


            {/* <Cart
              products={this.state.favorites}
              items={this.state.items}
              deleteItem={this.deleteItem}
              addProduct={this.addFav}
            /> */}
          
          
          {/* </MDBCol> */}
        
        
        </MDBRow>
     
     
      </div>
    );
  }
}

export default StorePage;
