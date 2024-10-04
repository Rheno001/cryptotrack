import React from 'react'
import { useEffect } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historicalData}) => {

const [data, setData] = useState([["Date", "Prices"]])

useEffect(()=>{
    let dataCopy = ["Date", "Prices"]

},[historicalData])

  return (
    <div></div>
  )
}

export default LineChart