import React from 'react'

export default function ListSubSecondary({initialCurrency,finalCurrency,exchange,change}) {
  return (
    <>
             <table className='designingTable'>
        <thead>
        <tr> 
    
            <th>  {finalCurrency}</th>
            <th>  {initialCurrency}</th>
         </tr>
         </thead>
         <tbody>
         <tr> 
           <td>1 {finalCurrency}</td>
            <td>{(1/exchange).toFixed(4)} {initialCurrency}</td>
         </tr>
         <tr> 
           <td>5 {finalCurrency}</td>
            <td>{(5/exchange).toFixed(4)} {initialCurrency}</td>
         </tr>
         <tr> 
           <td>10 {finalCurrency}</td>
            <td>{(10/exchange).toFixed(4)} {initialCurrency}</td>
         </tr>
         <tr> 
           <td>25 {finalCurrency}</td>
            <td>{(25/exchange).toFixed(4)} {initialCurrency}</td>
         </tr>

        
         <tr> 
           <td>50 {finalCurrency}</td>
            <td>{(50/exchange).toFixed(4)} {initialCurrency}</td>
         </tr>
         <tr> 
           <td>100 {finalCurrency}</td>
            <td>{(100/exchange).toFixed(4)} {initialCurrency}</td>
         </tr>
         <tr> 
           <td>1,000 {finalCurrency}</td>
            <td>{(1000/exchange).toFixed(4)} {initialCurrency}</td>
         </tr>
         <tr> 
           <td>5,000 {finalCurrency}</td>
            <td>{(5000/exchange).toFixed(4)} {initialCurrency}</td>
         </tr>
         <tr> 
           <td>10,000 {finalCurrency}</td>
            <td>{ (10000/exchange).toFixed(4) } {initialCurrency}</td>
         </tr>
         <tr> 
           <td>50,000 {finalCurrency}</td>
            <td>{(50000/exchange).toFixed(4) } {initialCurrency}</td>
         </tr>


         </tbody>      
    </table>
    
    </>
  )
}
