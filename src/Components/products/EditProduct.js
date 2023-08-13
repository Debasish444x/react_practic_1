import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function EditProduct() {
  const navigate = useNavigate();

  const { id } = useParams()

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [validationError,setValidationError] = useState({ error: '', msg: '' })

  useEffect(()=>{
    fetchProduct()
  },[])

  const fetchProduct = async () => {
    // await axios.get(`http://localhost/newApp/api/product/${id}`).then(({data})=>{
    //   const { title, description } = data.product
    //   setName(title)
    //   setPrice(description)
    // }).catch(({response:{data}})=>{
    //   Swal.fire({
    //     text:data.message,
    //     icon:"error"
    //   })
    // })
    // 
    const token = localStorage.getItem("token");
    axios
    .request({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      url: `http://localhost/newApp/api/product/${id}`,
    })
    .then((response) => {
      console.log(response.data);
      setName(response.data.name)
      setPrice(response.data.price)

    }).catch(({response})=>{
      console.log(response);
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      
    })
  }

  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)

    // 
    const token = localStorage.getItem("token");
    axios
    .request({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      url: `http://localhost/newApp/api/updateProduct/${id}`,
      data: formData,
    })
    .then((response) => {
      console.log(response.data);
      if(response.data.status===422){
        console.log("422 error")
        setValidationError({error:response.data.error,
            price:response.data.response.price
        })
      
      }
      if(response.data.status===201){
        Swal.fire({
          icon:"success",
          text:response.data.message
        })
        navigate("/dashboard")
      }
      else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    }).catch(({response})=>{
      console.log(response);
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      
    })
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Update Product</h4>
              <hr />
              <div className="form-wrapper">
                {
                  Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {
                              Object.entries(validationError).map(([key, value])=>(
                                <li key={key}>{value}</li>   
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
                <Form onSubmit={updateProduct}>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={name} onChange={(event)=>{
                              setName(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} value={price} onChange={(event)=>{
                              setPrice(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Update
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}