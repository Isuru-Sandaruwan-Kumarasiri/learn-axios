
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // const [data,setData]=useState();
  // axios
  // .get('https://api.restful-api.dev/objects')
  // .then((response)=>{
  //   setData(response.data[0].name);
  // })
  // .catch((error)=>{
  //   console.log(error)
  // })
const [deviceName,setDeviceName]=useState('');
const [deviceYear,setDeviceYear]=useState('');
const [devicePrice,setDevicePrice]=useState('');
//get url
const url='https://api.restful-api.dev/objects';

//add object
const url_2='https://api.restful-api.dev/objects';

//put 
const url_3='https://api.restful-api.dev/objects/ff8081818c01d7ae018c9a79c90d3834';

// useEffect(()=>{
//    const fetchData=async ()=>{
//     try {
//       const result=await axios.get(url)
//       const needData=result.data[2];
 
//       setDeviceName(needData.name);
//       setDeviceColor(needData.data.color);
//       setDeviceCapacity(needData.data['capacity GB']);//keywise accesed because space have betwenn variable
 
//     } catch (error) {
//       console.log(error);
//     }
//    }
//    fetchData();
// },[])
    
const handleSubmit= async(event)=>{
  event.preventDefault();//avoid refesh page before data loading
    try {
       const submitData={
         name:deviceName,
         data:{
          year:deviceYear,
          price:devicePrice,
         }
       } ;
       //const response=await axios.post(url_2,submitData);//post request
       const response=await axios.put(url_3,submitData);//update request
       console.log(response);
    } catch (error) {
      console.log(error);
    }
}


  return (
    // <div className='background'>
    //   <div className='device'>{deviceName}</div>
    //   <div className='device-color'>{deviceColor}</div>
    //   <div className='device-capcity'>{deviceCapacity}</div>
    // </div>
    <div className='background'>
      <form action='' onSubmit={handleSubmit}>
          <p>Submit Your Device</p>
          <div>Device Name</div>
          <input 
            type="text" 
            name='deviceName' 
            placeholder='Enter Device Name'
            value={deviceName}
            onChange={(inputDeviceName)=>{
              setDeviceName(inputDeviceName.target.value);
            }}
            
           />
           <div>Device Year</div>
          <input 
            type="text" 
            name='deviceYear' 
            placeholder='Enter Device year'
            value={deviceYear}
            onChange={(inputDeviceYear)=>{
              setDeviceYear(inputDeviceYear.target.value);
            }}
            
           />
           <div>Device Price</div>
          <input 
            type="text" 
            name='deviceYear' 
            placeholder='Enter Device year'
            value={devicePrice}
            onChange={(inputDevicePrice)=>{
              setDevicePrice(inputDevicePrice.target.value)
            }}
            
           />
           <br />
           <button type='submit'>Submit your Device</button>
           
      </form>

    </div>
  );
}

export default App;
