import React from 'react'
import { useFetch } from '../fetchApi/useFetch';
import "./advice.css";

export default function Advice() {



  const url = "https://api.adviceslip.com/advice";
  const {Data,loading , fetchApi} = useFetch(url);



  return (
    <div className='advice-box'>
        <p>{loading?"loading...":Data}</p>
        <button onClick={fetchApi}>Refresh</button>
    </div>
  )
}
