import React from 'react'
import { Link } from 'react-router-dom'
import world from '../images/world.png'
export default function About() {
  return (
    <div className='about' id='about'>
        <div className='aboutText'>
        <h1>About</h1>
        <div className='aboutMessage'>ExRate is a web application built in 2022 to help solve the complains of many individuals world wide on convert currencies
            from one country to the other. An exchange rate is the rate at which one currency is exchanged for another. 
            It’s also regarded as the value of one country’s currency
             against the currency of another country. A weak currency gets you a relatively smaller return against a country with 
             a stronger currency. The  Currency API used was provided by <span id='currency'><a href='https://www.exchangerate-api.com/docs/standard-requests' target='_blank'>Exchange Rate API</a></span>. The project was partnered and sponsored by 
            <span id='amali'> <a href='https://www.amalitech.org' target='_blank' >Amalitech Ghana</a></span>.   
        </div>
        </div>
        <div  className='aboutImage' >
            <img src={world}   alt='world'/>
        </div>

    </div>
  )
}
