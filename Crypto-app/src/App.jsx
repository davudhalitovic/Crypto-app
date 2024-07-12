import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Container, Titles } from './Components/cryptos.styled.js'
import { Checkbox } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';




function App() {

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    setData(response.data)
    console.log(response.data)
  }
  useEffect(() => {
    getData()
  }, [])


  return (
    <>
     <Container>
      <h1>Top 10 List</h1>
      <Titles>
        <h3>Rank</h3>
        <h3>Name</h3>
        <h3>Price</h3>
        <h3>24hVolume</h3>
        <h3>Market Cap</h3>
        <div></div>
        <div></div>
      </Titles>
      {data ? data.map((item) => {
        return (
          <div className='cryptoCard' key={item.id}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <h1>{item.market_cap_rank}</h1>
              <img src={item.image} alt="" />
              </div>
            <div><h2>{item.name}</h2></div>
            <div><h2>${parseFloat(item.current_price).toFixed(2)}</h2></div>
            <div><h2>${parseFloat(item.total_volume).toFixed(2)}</h2></div>
            <div><h2>${parseFloat(item.market_cap).toFixed(2)}</h2></div>
            <div><Checkbox /></div>
            <div><CalculateIcon /></div>
          </div> 
        )
      }) : null}
     </Container>
    </>
  )
}

export default App
