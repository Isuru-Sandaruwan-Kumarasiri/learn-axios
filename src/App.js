
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
const [deviceName,setDeviceName]=useState();
const [deviceColor,setDeviceColor]=useState();
const [deviceCapacity,setDeviceCapacity]=useState();

const url='https://api.restful-api.dev/objects';

useEffect(()=>{
   const fetchData=async ()=>{
    try {
      const result=await axios.get(url);
      const needData=result.data[2];
 
      setDeviceName(needData.name);
      setDeviceColor(needData.data.color);
      setDeviceCapacity(needData.data['capacity GB']);//keywise accesed because space have betwenn variable
 
    } catch (error) {
      console.log(error);
    }
   }
   fetchData();
},[])



  return (
    <div className='background'>
      <div className='device'>{deviceName}</div>
      <div className='device-color'>{deviceColor}</div>
      <div className='device-capcity'>{deviceCapacity}</div>
    </div>
  );
}

export default App;
