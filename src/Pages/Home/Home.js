import React from 'react'
import './Home.css'
import {Form,Button,Table} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import HomeTable from '../../Components/HomeTable/HomeTable'

function Home() {

  const navigate = useNavigate()

  const adduser = ()=>{
    navigate('/register')
  }

  return (
    <>
    <div className='contaner m-5'>
    <div className="first_div">
      <div className='search_Add d-flex justify-content-between'>
        <div className='search col-lg-4'>
          <Form className='d-flex'>
          <Form.Control type="text" placeholder="search" className='me-2' />
          <Button variant="info">Search</Button>
          </Form>
          
        </div>
          <div className='add_btn'>
          <Button onClick={adduser} variant="info"> <i className='fa-solid fa-user-plus'></i> Add</Button>
        </div>
        </div>
       <div>
      </div>
    </div>

    <div className='second_div'>
      {/* table */}
     <HomeTable/>
    </div>
    </div>
    </>
  )
}

export default Home