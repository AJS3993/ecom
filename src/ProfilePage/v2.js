import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBView,
  MDBCardBody,
  MDBInput,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBTreeview,
  MDBTreeviewList,
  MDBTreeviewItem
} from 'mdbreact';

import './v2.css';

const PV2 = () => {
  return (
    <div id='profile-v2' className='pt-2 rgba-white-slight mb-n4'>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol lg='3' className='mb-4' >
          <MDBContainer header='Animated'>
        <MDBCol md='4'>
          <MDBTreeview
            theme='animated'
            className=' w-20 border border-0'
            getValue={value => console.log(value)}
          >
            
            <h4 className=' ml-n3 mb-3 blue-text'> &nbsp;<MDBIcon icon="user" /> John Smith</h4>
            
            <MDBTreeviewList className='py-2' icon='shopping-bag' title='Orders'>
              <MDBTreeviewList className='py-2' icon='calendar' title='9/24/2020 5:15' far>
                <MDBTreeviewItem className='py-2' icon='box-open' title='Nike Sneakers' />
         
              </MDBTreeviewList>
            </MDBTreeviewList>
            <MDBTreeviewList className='py-2' icon='heart' title='Favorites' far>
              <MDBTreeviewItem className='py-2' icon='heart' title='Adidas Slippers' />
              <MDBTreeviewItem className='py-2' icon='heart' title='Nike Runners' />
            </MDBTreeviewList>
            <MDBTreeviewList className='py-2' icon='undo' title='Returns'>
            <MDBTreeviewItem className='py-2' icon='box-open' title='Nike Sneakers' />
            </MDBTreeviewList>
           
            <MDBTreeviewList className='py-2 mb-2' fab icon='cc-visa' title='Payment'>
            <MDBTreeviewItem className='py-2' fab icon='cc-visa' title='Visa 1234' />
            <MDBTreeviewItem className='py-2' icon='plus' title='Add' />
              </MDBTreeviewList>
    
            <MDBTreeviewItem className='py-2' icon='sign-out-alt' title='Sign Out' />
          </MDBTreeview>
        </MDBCol>
      </MDBContainer>
          </MDBCol>
          <MDBCol lg='8' className='mt-4 mb-4'>
            <MDBCard narrow>
              <MDBCardBody className='text-center'>
                <MDBRow>
                <MDBCol md='6'>
                    <MDBInput type='text' label='Username' value='ShoeBuyer16'/>
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBInput type='text' label='Membership' value='Basic'/>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput type='text' label='First name' value='John'/>
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBInput type='text' label='Last name' value='Smith'/>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput type='text' label='Email address' value='JS123@gmail.com'/>
                  </MDBCol>
                  <MDBCol md='6'>
                   <MDBRow>
                   <MDBCol md='6'>
                     <MDBInput type='text' label='Payment' value='Visa ending in 1234' />
                     </MDBCol>
                     <MDBCol md='6'>
                     <MDBBtn color='mdb-color' type='submit' rounded>
                      Edit Payment
                    </MDBBtn>
                     </MDBCol>
                    
                    </MDBRow> 
                  </MDBCol>
                </MDBRow>
                <MDBRow>

                  <MDBCol md='4'>
                    <MDBInput type='text' label='Zip Code' value='79912'/>
                  </MDBCol>

                  <MDBCol md='4'>
                    <MDBInput type='text' label='State' value='Texarcana'/>
                  </MDBCol>


                  <MDBCol md='4'>
                    <MDBInput type='text' label='Street Address' value='742 Evergreen Terrace'/>
                  </MDBCol>

                </MDBRow>
                <MDBRow>
                  <MDBCol md='12' className='text-center'>
                  <MDBBtn color='mdb-color' type='submit' rounded>
                      Update Account
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        <MDBCol lg='1'></MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default PV2;
