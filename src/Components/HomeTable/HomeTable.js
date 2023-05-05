import React from 'react'
import'./HomeTable.css'
import {Card, Row,Table,Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function HomeTable() {
  return (
    <div className='container mt-5'>
        <Row>
            <div className='col'>
                <Card className='shadow'>
                    <Table className="align-items-center" responsive="sm">
                        <thead className='thead-dark'>
                            <tr className='table-info'>
                                <th>ID</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>Profile</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Max Miller</td>
                                <td>millermax@yahoo.com</td>
                                <td>M</td>
                                <td>
                                <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                     Active
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item>Active</Dropdown.Item>
                                <Dropdown.Item>Inactive</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                                </td>
                                    
                                <td>
                                <img src="user.png" className='rounded' width={"70px"} height={"70px"} />
                                </td>

                                <td>
                                <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic1">
                                     <i className='fa-solid fa-ellipsis-vertical fs-4'></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link className='text-decoration-none'>
                                        <i className='fa-solid fa-eye text-success me-2'></i>
                                        <span className='text-dark'>View</span>
                                    </Link>
                                </Dropdown.Item>
                                
                                <Dropdown.Item>
                                    <Link className='text-decoration-none'>
                                        <i className='fa-solid fa-pen text-primary me-2'></i>
                                        <span className='text-dark'>Edit</span>
                                    </Link>
                                </Dropdown.Item>

                                <Dropdown.Item>
                                    <div>
                                        <i className='fa-solid fa-trash text-danger me-2'></i>
                                        <span className='text-dark'>Delete</span>
                                    </div>
                                </Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </div>
        </Row>
    </div>
  )
}

export default HomeTable;