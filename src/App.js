import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './Components/Coin';




const App = () => {
  const[coins, Setcoins] = useState([])
  const [search, Setsearch] = useState('');

  const handleChange = (e) =>{
    Setsearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
     axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
     )
     .then(res => {
      Setcoins(res.data);
      console.log(res.data)
     })
     .catch(error => console.log(error))
  })
  return (
    <div className='coin-app  '>
      <div className='coin-search'>
        <div className='flex flex-col items-center justify-center mx-auto my-5'>
        <h1 className='text-4xl text-center py-5'>Search a currency</h1>
        <form>
          <input type="text" placeholder='Search' className='p-2 border rounded-md items-center mx-auto' onChange={handleChange} />
        </form>
        </div>
        <div>
            {
              filteredCoins.map((coin) => (
                <Coin 
                key={coin.id}
                 name={coin.name} 
                 image={coin.image}
                 symbol={coin.symbol}
                 marketcap={coin.market_cap}
                 price={coin.price}
                 priceChange={coin.price_change_percentage_24h}
                 volume={coin.total_volume}
                 />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default App