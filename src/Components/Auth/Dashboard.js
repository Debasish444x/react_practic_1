import React from 'react';
import { Header } from '../Layouts/Header';
import { Footer } from '../Layouts/Footer';
import axios from 'axios';

function Dashboard()
{
    const token=localStorage.getItem("token");
    console.log(token);
    // console.log(222222);
        axios.request({
            headers: {
              Authorization: `Bearer ${token}`
            },
            method: "GET",
            url: `http://127.0.0.1:8000/api/products`
          }).then(response => {
            console.log(response.data);
          });
    return(
        <>
    <Header/>

        Dashboard
    <Footer/>

        </>
    );
}
export default Dashboard;
