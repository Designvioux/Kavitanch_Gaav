// import React from 'react';

// import '../CSS/KaryaKari.css';



// const Mandali = () =>{

//   return(
//     <div className='Karyakari-Container'>

//     <h2 className='Karyakari-heading'> <span>कार्यकारी </span> मंडळ</h2>

//     <div className="Karyakri-table">
//   <table border="0" cellPadding="10" cellSpacing="0" style={{ width: '80%', borderCollapse: 'collapse' }}>
//     <thead>
//       <tr>
//         <th>Sr No</th>
//         <th>Name</th>
//         <th>Position</th>
//         <th>Department</th>
//         <th>Location</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>१</td>
//         <td>प्रल्हाद पार्टे </td>
//         <td>सातारा</td>
//         <td>जकातवाडी</td>
//         <td>अध्यक्ष</td>
//       </tr>
//       <tr>
//         <td>२</td>
//         <td>प्रल्हाद पार्टे </td>
//         <td>सातारा</td>
//         <td>जकातवाडी</td>
//         <td>अध्यक्ष</td>
//       </tr>
//       <tr>
//         <td>३</td>
//         <td>प्रल्हाद पार्टे </td>
//         <td>सातारा</td>
//         <td>जकातवाडी</td>
//         <td>अध्यक्ष</td>
//       </tr>
//       <tr>
//         <td>४</td>
//         <td>प्रल्हाद पार्टे </td>
//         <td>सातारा</td>
//         <td>जकातवाडी</td>
//         <td>अध्यक्ष</td>
//       </tr>
//       <tr>
//         <td>५</td>
//         <td>प्रल्हाद पार्टे </td>
//         <td>सातारा</td>
//         <td>जकातवाडी</td>
//         <td>अध्यक्ष</td>
//       </tr>
//       <tr>
//         <td>६</td>
//         <td>प्रल्हाद पार्टे </td>
//         <td>सातारा</td>
//         <td>जकातवाडी</td>
//         <td>अध्यक्ष</td>
//       </tr>
//       <tr>
//         <td>७</td>
//         <td>प्रल्हाद पार्टे </td>
//         <td>सातारा</td>
//         <td>जकातवाडी</td>
//         <td>अध्यक्ष</td>
//       </tr>
//       <tr>
//         <td>८</td>
//         <td>प्रल्हाद पार्टे </td>
//         <td>सातारा</td>
//         <td>जकातवाडी</td>
//         <td>अध्यक्ष</td>
//       </tr>
//       <tr>
//         <td>९</td>
//         <td>प्रल्हाद पार्टे </td>
//         <td>सातारा</td>
//         <td>जकातवाडी</td>
//         <td>अध्यक्ष</td>
//       </tr>
//       <tr>
//         <td>१०</td>
//         <td>प्रल्हाद पार्टे </td>
//         <td>सातारा</td>
//         <td>जकातवाडी</td>
//         <td>अध्यक्ष</td>
//       </tr>
//       <tr>
//         <td>११</td>
//         <td>प्रल्हाद पार्टे </td>
//         <td>सातारा</td>
//         <td>जकातवाडी</td>
//         <td>अध्यक्ष</td>
//       </tr>
      
//     </tbody>
//   </table>
// </div>






//     </div>
//   )

// }

// export default Mandali;










import React, { useEffect, useState } from 'react';
import { getCountries, getStates, getCities } from '../../'; // import API functions
import '../CSS/KaryaKari.css';

const Mandali = () => {
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const [data] = useState([
    { sr: 1, name: 'प्रल्हाद पार्टे', position: 'अध्यक्ष', department: 'जकातवाडी', location: 'सातारा', country: 'IN', state: 'MH', city: 'Satara' },
    { sr: 2, name: 'रमेश देशमुख', position: 'सचिव', department: 'कोरेगाव', location: 'सातारा', country: 'IN', state: 'MH', city: 'Karad' },
    // Add more rows
  ]);

  const filteredData = data.filter(item =>
    (!country || item.country === country) &&
    (!state || item.state === state) &&
    (!city || item.city === city)
  );

  useEffect(() => {
    getCountries().then(res => setCountryList(res.data)).catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (country) {
      getStates(country).then(res => setStateList(res.data)).catch(err => console.error(err));
    } else {
      setStateList([]);
    }
    setState('');
    setCity('');
    setCityList([]);
  }, [country]);

  useEffect(() => {
    if (country && state) {
      getCities(country, state).then(res => setCityList(res.data)).catch(err => console.error(err));
    } else {
      setCityList([]);
    }
    setCity('');
  }, [state]);

  return (
    <div className='Karyakari-Container'>
      <h2 className='Karyakari-heading'><span>कार्यकारी </span> मंडळ</h2>

      <div className="filters" style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <select onChange={(e) => setCountry(e.target.value)} value={country}>
          <option value="">Select Country</option>
          {countryList.map((c) => (
            <option key={c.iso2} value={c.iso2}>{c.name}</option>
          ))}
        </select>

        <select onChange={(e) => setState(e.target.value)} value={state}>
          <option value="">Select State</option>
          {stateList.map((s) => (
            <option key={s.iso2} value={s.iso2}>{s.name}</option>
          ))}
        </select>

        <select onChange={(e) => setCity(e.target.value)} value={city}>
          <option value="">Select City</option>
          {cityList.map((c) => (
            <option key={c.name} value={c.name}>{c.name}</option>
          ))}
        </select>
      </div>

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
            {filteredData.length > 0 ? (
              filteredData.map((member) => (
                <tr key={member.sr}>
                  <td>{member.sr}</td>
                  <td>{member.name}</td>
                  <td>{member.position}</td>
                  <td>{member.department}</td>
                  <td>{member.location}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="5">No data found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mandali;
