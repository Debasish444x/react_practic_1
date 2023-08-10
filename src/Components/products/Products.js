import React from 'react'

export const Products = () => {
  return (
    <div className='container sm'>

<table class="table" style={{ border: '1px solid'}}>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
  
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
     
    </tr>
    <tr>
      <th>3</th>
      <td >Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}
