import React from 'react'
import { useEffect } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historicalData}) => {

const [data, setData] = useState([["Date", "Prices"]])

useEffect(()=>{
    let dataCopy = ["Date", "Prices"]
    if(historicalData.prices){
      historicalData.prices.map((item)=>{
        dataCopy.push([`${new Date(item[0])}`])
      })
    }

},[historicalData])

  return (
    <div></div>
  )
}

export default LineChart