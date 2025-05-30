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
import '../CSS/KaryaKari.css';
import { fetchLocations } from '../../../utils/';

const Mandali = () => {
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [districtList, setDistrictList] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const data = [
    { sr: 1, name: 'प्रल्हाद पार्टे', position: 'अध्यक्ष', department: 'जकातवाडी', location: 'सातारा', country: 'India', state: 'Maharashtra', city: 'Satara', district: 'Satara' },
    { sr: 2, name: 'रमेश देशमुख', position: 'उपाध्यक्ष', department: 'कोरेगाव', location: 'सातारा', country: 'India', state: 'Maharashtra', city: 'Satara', district: 'Koregaon' },
  ];

  const filteredData = data.filter(item =>
    (!selectedCountry || item.country === selectedCountry) &&
    (!selectedState || item.state === selectedState) &&
    (!selectedCity || item.city === selectedCity) &&
    (!selectedDistrict || item.district === selectedDistrict)
  );

  useEffect(() => {
    (async () => {
      const countries = await fetchLocations('world', 'country');
      setCountryList(countries);
    })();
  }, []);

  const handleCountryChange = async (value) => {
    setSelectedCountry(value);
    setSelectedState('');
    setSelectedCity('');
    setSelectedDistrict('');
    const states = await fetchLocations(`${value}`, 'state');
    setStateList(states);
    setCityList([]);
    setDistrictList([]);
  };

  const handleStateChange = async (value) => {
    setSelectedState(value);
    setSelectedCity('');
    setSelectedDistrict('');
    const cities = await fetchLocations(`${value}, ${selectedCountry}`, 'city');
    setCityList(cities);
    setDistrictList([]);
  };

  const handleCityChange = async (value) => {
    setSelectedCity(value);
    setSelectedDistrict('');
    const districts = await fetchLocations(`${value}, ${selectedState}`, 'county');
    setDistrictList(districts);
  };

  return (
    <div className='Karyakari-Container'>
      <h2 className='Karyakari-heading'><span>कार्यकारी </span>मंडळ</h2>

      {/* Dropdown Filters */}
      <div className="filters" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <select onChange={(e) => handleCountryChange(e.target.value)} value={selectedCountry}>
          <option value="">Select Country</option>
          {countryList.map((c, i) => <option key={i} value={c}>{c}</option>)}
        </select>

        <select onChange={(e) => handleStateChange(e.target.value)} value={selectedState} disabled={!selectedCountry}>
          <option value="">Select State</option>
          {stateList.map((s, i) => <option key={i} value={s}>{s}</option>)}
        </select>

        <select onChange={(e) => handleCityChange(e.target.value)} value={selectedCity} disabled={!selectedState}>
          <option value="">Select City</option>
          {cityList.map((c, i) => <option key={i} value={c}>{c}</option>)}
        </select>

        <select onChange={(e) => setSelectedDistrict(e.target.value)} value={selectedDistrict} disabled={!selectedCity}>
          <option value="">Select District</option>
          {districtList.map((d, i) => <option key={i} value={d}>{d}</option>)}
        </select>
      </div>

      {/* Table */}
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
