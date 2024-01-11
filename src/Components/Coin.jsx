import React from 'react'

const Coin = ({name, image, symbol, price, volume,priceChange, marketcap}) => {
  return (
    <div className='container flex justify-center items-center'>
        <div className='coin-row flex justify-start items-center md:w-[900px] w-[800px] h-[80px] border-b-2 border-darkBlack gap-10 px-10 '>
            <div className='coin flex item-center pr-[24px]'>
                <img src={image} alt="crypto" className='w-[40px] h-[30px]' />
                <h3 className='font-bold text-[16px] w-[150px]'>{name}</h3>
                <p className='font-bold uppercase pr-10'>{symbol}</p>
            </div>
            <div className='coin-data flex space-x-12'>
                <p>{price}</p>
                <p>${volume.toLocaleString()}</p>
                {priceChange < 0 ? (<p className='text-red'>{priceChange.toFixed(2)}%</p>): (<p className='text-green'>{priceChange.toFixed(2)}%</p>)}
                <p className='coin-marketcap'>
                    Mkt Cap:${marketcap.toLocaleString()}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Coin