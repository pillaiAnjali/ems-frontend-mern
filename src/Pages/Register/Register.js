import React from 'react'
import './Register.css'
import {Button, Card,Form,Row} from 'react-bootstrap'
import Select from 'react-select'

function Register() {

  const option = [
    {value:'Active', label:'Active'},
    {value:'AcInactivetive', label:'Inactive'}
  ]

  return (
    <>
      <div className='container mt-5'>
        <h2 className='text-center mt-3'>Register Employee Details</h2>
        <Card>
          <div className='text-center'>
            <img src="user.png" className='m-3 rounded' width={"70px"} height={"70px"} />
          </div>

          <Form>
            <Row>
              <Form.Group className="m-3 col-lg-6" controlId="formBasicfname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="fname" placeholder="First Name" />
              </Form.Group>

              <Form.Group className="m-3 col-lg-6" controlId="formBasiclname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lname" placeholder="Last Name" />
              </Form.Group>

              <Form.Group className="m-3 col-lg-6" controlId="formBasicmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="m-3 col-lg-6"   controlId="formBasicmobile">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" name="mobile" placeholder="Mobile Number" />
              </Form.Group>

              <Form.Group className="m-3 col-lg-6"   controlId="formBasicgender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Check // prettier-ignore
                  type={'radio'}
                  name={'gender'}
                  label={'Male'}
                  value={'Male'}
                  />
                  <Form.Check // prettier-ignore
                  type={'radio'}
                  name={'gender'}
                  label={'Female'}
                  value={'Female'}
                  />
              </Form.Group>

              <Form.Group className="m-3 col-lg-6"  controlId="formBasicstatus">
                  <Form.Label>Employee Status</Form.Label>
                  <Form.Control type="text" name="status" placeholder="Select Empoylee status" />
                  <Select options={option}></Select>
              </Form.Group> 

              <Form.Group className="m-3 col-lg-6"   controlId="formBasicmobile">
                  <Form.Label>Choose profile picture</Form.Label>
                  <Form.Control type="file" name="user_profile" />
              </Form.Group>
              <Button className='mt-3' variant='primary'>Submit</Button>
            </Row>
          </Form>
        </Card>
      </div>
    </>
    
  )
}

export default Register