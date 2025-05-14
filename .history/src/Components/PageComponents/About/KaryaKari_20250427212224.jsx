import React from 'react';

import '../CSS/KaryaKari.css';



const Mandali = () =>{

  return(
    <div className='Karyakari-Container'>

    <h2 className='Karyakari-heading'> <span>कार्यकारी </span> मंडळ</h2>

    <div className="Karyakri-table">
  <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th>Sr No</th>
        <th>Name</th>
        <th>Position</th>
        <th>Department</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {Array.from({ length: 12 }, (_, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>John Doe {index + 1}</td>
          <td>Manager</td>
          <td>Sales</td>
          <td>City {index + 1}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>





    </div>
  )

}

export default Mandali;