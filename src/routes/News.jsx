// API KEY (marketaux - Finance News): 9cMPFNNDa0hmlvpRyLyf8sPU01pdB3HtScUqhytl
// API LINK (marketaux - Fetch link for NYSE data):  
// API TEST LINK (Free) - Cat Facts: https://catfact.ninja/facts?max_length=30&limit=10

// REACT:
import {React, useState, useEffect, Link} from 'react'

// CSS: 
import styles from '../css/News.module.css'

// HOME:
export default function News() {
  //State:
  const [nyseData, setNyseData] = useState([])
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

  console.log('State Data:', nyseData)

  return (
    <>
      <div className={styles.mainBox}>
        {/* {isLoading ? <h1>loading...</h1> : <h1>{nyseData.data[0].fact}</h1>} */}
        <div className={styles.secondaryBox}>
          <h1>Market</h1>
          {isLoading ? <h1>loading...</h1> :
          <div className={styles.stockMarketBox}>
            {nyseData.map((x, i) => { 
              return (
                <div key={i} className={styles.stockMarketCards}>
                  <h2>{x.title}</h2>
                  <img src={x.image_url}></img>
                  <h3>{x.description}</h3>
                  <a href={x.url} target={'_blank'} ><h4>Full Article</h4></a>
                </div>
              )
            })}
          </div>}
        </div>
        {/* {isLoading ? <h1>loading...</h1> : <h1>{nyseData.data[0].fact}</h1>} */}
        <div className={styles.secondaryBox}>
          <h1>Crypto</h1>
          {isLoading ? <h1>loading...</h1> :
          <div className={styles.stockMarketBox}>
            {nyseData.map((x, i) => { 
              return (
                <div key={i} className={styles.stockMarketCards}>
                  <h2>{x.title}</h2>
                  <img src={x.image_url}></img>
                  <h3>{x.description}</h3>
                  <a href={x.url} target={'_blank'} ><h4>Full Article</h4></a>
                </div>
              )
            })}
          </div>}
        </div>
        {/* {isLoading ? <h1>loading...</h1> : <h1>{nyseData.data[0].fact}</h1>} */}
        <div className={styles.secondaryBox}>
          <h1>Real Estate</h1>
          {isLoading ? <h1>loading...</h1> :
          <div className={styles.stockMarketBox}>
            {nyseData.map((x, i) => { 
              return (
                <div key={i} className={styles.stockMarketCards}>
                  <h2>{x.title}</h2>
                  <img src={x.image_url}></img>
                  <h3>{x.description}</h3>
                  <a href={x.url} target={'_blank'} ><h4>Full Article</h4></a>
                </div>
              )
            })}
          </div>}
        </div>
      </div>
    </>
  )
}

