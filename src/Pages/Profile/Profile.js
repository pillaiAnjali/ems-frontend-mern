import React from 'react'
import { Card,Row } from 'react-bootstrap'
import './Profile.css'
function Profile() {
  return (
    <>
      <div className='container'>
        <Card className='shadow col-lg-6 mx-auto m-5'>
            <Card.Body>
              <Row>
                  <div className='col'>
                    <div className='profile_img d-flex justify-content-center'>
                      <img src="user.png" className='m-3 rounded' width={"200px"} height={"200px"} />
                    </div>
                  </div>
              </Row>
              <div className='text-center mt-3 d-flex flex-column'>
                  <h6>Max Miller</h6>
                  <h7><i className='fa-solid fa-envelope text-primary'></i>  <span>millermax@gmail.com</span></h7>
                  <h7><i className='fa-solid fa-mobile text-primary'></i>  <span>9765434268</span></h7>
                  <h7><i className='fa-solid fa-venus-mars text-primary'></i>  <span>Male</span></h7>
                  <h7><i className='fa-solid fa-location-dot text-primary'></i> <span>Brooklyn</span></h7>
                  <h7><i className='fa-solid fa-chart-line text-primary'></i> <span>Active</span></h7>
              </div>

            </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Profile