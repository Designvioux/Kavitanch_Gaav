import React from 'react';

import '../CSS/KaryaKari.css';



const Mandali = () =>{

  return(
    <div className='Karyakari-Container'>

    <h2 className='Karyakari-heading'> <span>कार्यकारी </span> मंडळ</h2>

    <div className="Karyakri-table">
  <table border="0" cellPadding="10" cellSpacing="0" style={{ width: '80%', borderCollapse: 'collapse' }}>
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
      <tr>
        <td>1</td>
        <td>प्रल्हाद पार्टे </td>
        <td>Team Lead</td>
        <td>Marketing</td>
        <td>New York</td>
      </tr>
      <tr>
        <td>2</td>
        <td>प्रल्हाद पार्टे </td>
        <td>Developer</td>
        <td>IT</td>
        <td>Los Angeles</td>
      </tr>
      <tr>
        <td>3</td>
        <td>प्रल्हाद पार्टे </td>
        <td>Designer</td>
        <td>Creative</td>
        <td>Chicago</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Diana Brown</td>
        <td>HR Manager</td>
        <td>Human Resources</td>
        <td>Houston</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Edward Davis</td>
        <td>Accountant</td>
        <td>Finance</td>
        <td>Philadelphia</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Fiona Miller</td>
        <td>Researcher</td>
        <td>R&D</td>
        <td>Phoenix</td>
      </tr>
      <tr>
        <td>7</td>
        <td>George Wilson</td>
        <td>Consultant</td>
        <td>Business</td>
        <td>San Antonio</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Hannah Moore</td>
        <td>Product Manager</td>
        <td>Product</td>
        <td>San Diego</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Ian Taylor</td>
        <td>Support Specialist</td>
        <td>Customer Support</td>
        <td>Dallas</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Julia Anderson</td>
        <td>Engineer</td>
        <td>Technical</td>
        <td>San Jose</td>
      </tr>
      <tr>
        <td>11</td>
        <td>Kevin Thomas</td>
        <td>Trainer</td>
        <td>Training</td>
        <td>Austin</td>
      </tr>
      <tr>
        <td>12</td>
        <td>Laura Jackson</td>
        <td>Data Analyst</td>
        <td>Analytics</td>
        <td>Jacksonville</td>
      </tr>
    </tbody>
  </table>
</div>






    </div>
  )

}

export default Mandali;