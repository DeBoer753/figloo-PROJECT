// API KEY (marketaux - Finance News): 9cMPFNNDa0hmlvpRyLyf8sPU01pdB3HtScUqhytl
// API LINK (marketaux - Fetch link for NYSE data):  https://api.marketaux.com/v1/news/all?exchanges=NYSE&filter_entities=true&limit=10&published_after=2022-10-25T18:44&api_token=9cMPFNNDa0hmlvpRyLyf8sPU01pdB3HtScUqhytl

// REACT:
import {React, useState, useEffect} from 'react'

// HOME:
export default function News() {
  const [nyseData, setNyseData] = useState('')

  useEffect(() => {
    fetch(`https://catfact.ninja/facts?max_length=30&limit=10`) // Test: Cat API (replace with API LINK above when ready)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setNyseData(data)
  });
  }, [])
  
  // console.log(nyseData);
  // {nyseData.data[0].fact} 

  return (
    <>
      <div>
        <h1>{nyseData.to}</h1>
      </div>
    </>
  )
}
