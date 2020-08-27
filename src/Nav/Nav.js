
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBBtn, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBSideNavItem, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBContainer } from "mdbreact";
import App from '../App';
import './Nav.css'

class DoubleNavigationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStateA: false,
      breakWidth: 1300,
      windowWidth: 0
    };
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
    });

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

    const mainStyle = {
      margin: "0 6%",
      paddingTop: "5.5rem",
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
    };

    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };

    return (
      <Router>
        <div className="fixed-sn navie">
          <MDBSideNav
          className='border border-double z-depth-3 sidey'
            triggerOpening={this.state.toggleStateA}
            breakWidth={this.state.breakWidth}
            mask="strong"
            fixed
          >
             <div className='text-center my-n4 border'>
                 
                 <MDBIcon className='mt-2 mb-n5 orange-text logo' size='9x' fab icon="ember" />
       
                 <p id='st' className='white font-weight-bold my-n4'>- SHOE STORE -</p>

            </div>

            <br/>  <br/>
            <li>
              <ul className="social">
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="facebook-f soc" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="pinterest soc" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="google-plus-g soc" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="twitter soc" />
                  </a>
                </li>
              </ul>
            </li>
            
            <MDBSideNavNav >
              <MDBSideNavCat
              className='cats'
                name="Departments"
                id="submit-blog-cat"
                icon="chevron-right"
              >
                <MDBSideNavItem className='subcat'>Mens</MDBSideNavItem>
                <MDBSideNavItem className='subcat'>Womens</MDBSideNavItem>
                <MDBSideNavItem className='subcat'>Kids</MDBSideNavItem>
              </MDBSideNavCat>
              
              <MDBSideNavCat
              className='cats'
                name="Collections"
                id="submit-blog-cat"
                icon="chevron-right"
              >
                <MDBSideNavItem className='subcat'>Mens</MDBSideNavItem>
                <MDBSideNavItem className='subcat'>Womens</MDBSideNavItem>
                <MDBSideNavItem className='subcat'>Kids</MDBSideNavItem>
              </MDBSideNavCat>
              
              <MDBSideNavCat
              className='cats'
                name="Specials"
                id="submit-blog-cat"
                icon="chevron-right"
              >
                <MDBSideNavItem className='subcat'>Mens</MDBSideNavItem>
                <MDBSideNavItem className='subcat'>Womens</MDBSideNavItem>
                <MDBSideNavItem className='subcat'>Kids</MDBSideNavItem>
              </MDBSideNavCat>

              
              
            </MDBSideNavNav>
          </MDBSideNav>
          
          <MDBNavbar className='mdb-color' id='top' style={navStyle} double expand="md">
            <MDBNavbarNav left>
              <MDBNavItem>
                <div
                  onClick={this.handleToggleClickA}
                  key="sideNavToggleA"
                  style={{
                    lineHeight: "32px",
                    marginRight: "1em",
                    verticalAlign: "middle"
                  }}
                >
                  <MDBIcon icon="bars" color="white" size="2x" />
                </div>
              </MDBNavItem>
              <MDBNavItem id='tn' className="d-none d-md-inline" style={{ paddingTop: 5 }}>
              <MDBIcon icon="shoe-prints" />
              </MDBNavItem>

              <MDBNavItem className="d-none d-md-inline" style={{ paddingTop: 5 }}>
 
              </MDBNavItem>
              
            </MDBNavbarNav>
            <MDBNavbarNav right style={specialCaseNavbarStyles}>
              <MDBNavItem active>
                <MDBNavLink to="#!" id='tn2'>
                  <div className="d-none d-md-inline">- Contact -</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink id='tn2' to="#!">
                 
                  <div className="d-none d-md-inline mx-4">- Support -</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!" id='tn'>
                   </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown className='orange'>
                  <MDBDropdownToggle id='tn' className='mdb-color border accBut' nav caret>
                  <MDBIcon icon="user" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Account</div>
               
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right className='border border-dark'>
                    <MDBDropdownItem className='font-weight-bold' href="#!">Orders</MDBDropdownItem>
                    
                    <MDBDropdownItem className='font-weight-bold' href="#!">Account Info</MDBDropdownItem>
                    <hr className='hr-dark'/>
                    <MDBDropdownItem className='font-weight-bold' href="#!">Sign out</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
     
       
            

<App/>





       
  
        </div>
      </Router>
    );
  }
}

export default DoubleNavigationPage;