// API KEY (marketaux): 9cMPFNNDa0hmlvpRyLyf8sPU01pdB3HtScUqhytl
// API KEY (cyrptopanic): c9e9aaa5978350bc96299915d63c9647e10e2a89
// API TEST LINK (Free) - Cat Facts: https://catfact.ninja/facts?max_length=30&limit=10

// REACT:
import {React, useState, useEffect, Link} from 'react'

// CSS: 
import styles from '../css/News.module.css'

// HOME:
export default function News() {
  //State:
  const [nyseData, setNyseData] = useState([])
  const [cryptoData, setCryptoData] = useState([])
  const [realEstateData, setRealEstateData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetched: (finance)
  useEffect(() => {
    fetch(`https://api.marketaux.com/v1/news/all?exchanges=NYSE&filter_entities=true&limit=10&published_after=2022-10-25T18:44&api_token=9cMPFNNDa0hmlvpRyLyf8sPU01pdB3HtScUqhytl`)
    .then(res => res.json())
    .then(data => {
      setNyseData(data.data) // Tip: set data to an array if you want to use map method in return statement.
      setIsLoading(false)
    });
   // .catch(error => console.error('data not loaded', error)) ••• issue with this line.
  }, [])
  console.log('Market Fetched Data:', nyseData)

  // // Fetched: (crypto)
  useEffect(() => {
    fetch(`http://cryptopanic.com/api/v1/posts/?auth_token=c9e9aaa5978350bc96299915d63c9647e10e2a89`)
    .then(res => console.log("RESSSINN: ", res.text()))
    .then(data => {
      console.log('TEST: ', data);
      setCryptoData(data.data) // Tip: set data to an array if you want to use map method in return statement.
      setIsLoading(false)
    })
    .catch(error => console.log('data not loaded', error))
  }, [])
  console.log('Crypto Fetched Data:', cryptoData)

  // Fetched: (real estate) ••• Consider new api link
  useEffect(() => {
    fetch(`https://api.marketaux.com/v1/news/all?industries=Real Estate&filter_entities=true&limit=10&published_after=2022-11-01T18:45&api_token=9cMPFNNDa0hmlvpRyLyf8sPU01pdB3HtScUqhytl`)
    .then(res => res.json())
    .then(data => {
      setRealEstateData(data.data) // Tip: set data to an array if you want to use map method in return statement.
      setIsLoading(false)
    });
    // .catch(error => console.error('data not loaded', error)) ••• issue with this line.
  }, [])
  console.log('Real Estate Fetched Data:', realEstateData)

  return (
    <>
      <div className={styles.mainBox}>
        {/* {isLoading ? <h1>loading...</h1> : <h1>{nyseData.data[0].fact}</h1>} */}
        <div className={styles.secondaryBox}>
          <h1>Market</h1>
          {isLoading ? <></> :
          <div className={styles.stockMarketBox}> 
            {nyseData.map((x, i) => { 
              return (
                <div key={i} className={styles.stockMarketCards}>
                  <h2>{x.title}</h2>
                  <img src={x.image_url}></img>
                  <p>{x.description}</p>
                  <div>
                    <a href={x.url} target={'_blank'} ><h4>Read More</h4></a>
                  </div>
                </div>
              )
            })}
          </div>}
        </div>
        {/* {isLoading ? <h1>loading...</h1> : <h1>{nyseData.data[0].fact}</h1>} */}
        <div className={styles.secondaryBox}>
          <h1>Crypto</h1>
          {isLoading ? <></> :
          <div className={styles.stockMarketBox}>
            {cryptoData.map((x, i) => { 
              return (
                <div key={i} className={styles.stockMarketCards}>
                  <h2>{x.title}</h2>
                  <img src={x.image_url}></img>
                  <p>{x.description}</p>
                  <a href={x.url} target={'_blank'} ><h4>Read More</h4></a>
                </div>
              )
            })}
          </div>}
        </div>
        {/* {isLoading ? <h1>loading...</h1> : <h1>{nyseData.data[0].fact}</h1>} */}
        <div className={styles.secondaryBox}>
          <h1>Real Estate</h1>
          {isLoading ? <></> :
          <div className={styles.stockMarketBox}>
            {realEstateData.map((x, i) => { 
              return (
                <div key={i} className={styles.stockMarketCards}>
                  <h2>{x.title}</h2>
                  <img src={x.image_url}></img>
                  <p>{x.description}</p>
                  <a href={x.url} target={'_blank'} ><h4>Read More</h4></a>
                </div>
              )
            })}
          </div>}
        </div>
      </div>
    </>
  )
}

/* ADD:
- automatically convert foreign articles to english 
- if no photo attached to article replace with something else
- THOUGHT: if article holds key words, change photo to custom photo using photoshop? 
*/

/* QUESTIONS:
*/