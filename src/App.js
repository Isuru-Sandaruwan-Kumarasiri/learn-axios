
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data,setData]=useState();
  axios
  .get('https://api.restful-api.dev/objects')
  .then((response)=>{
    setData(response.data[0].name);
  })
  .catch((error)=>{
    console.log(error)
  })
  return (
    <div className='background'>
      <div className='from-title'>{data}</div>
    </div>
  );
}

export default App;
