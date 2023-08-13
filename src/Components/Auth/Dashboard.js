import React, { useState, useEffect } from "react";
import { Header } from "../Layouts/Header";
import { Footer } from "../Layouts/Footer";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    // console.log(222222);
    axios
      .request({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `http://localhost/newApp/api/products`,
      })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
  };

  return (
    <>
      <Header />
      Dashboard
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link className='btn btn-primary mb-2 float-end' to={"/product/create"}>
                    Create Product
                </Link>
          </div>
          <div className="col-12">
            <div className="card card-body">
              <div className="table-responsive">
                <table className="table table-bordered mb-0 text-center">
                  <thead>
                    <tr>
                      <th>Sl.</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length > 0 &&
                      products.map((row, key) => (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>{row.name}</td>
                          <td>{row.price}</td>

                          <td>
                            <Link to={`/product/edit/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    {/* <Button variant="danger" onClick={()=>deleteProduct(row.id)}>
                                                        Delete
                                                    </Button> */}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Dashboard;
