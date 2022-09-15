import React from 'react'

export default function Listsub({initialCurrency,finalCurrency,exchange,change}) {
  return (
   <>
   <table className='designingTable'>
        <thead>
        <tr> 
           <th>{initialCurrency}</th>
            <th>{finalCurrency}</th>
         </tr>
         </thead>
         
         <tbody>

         <tr> 
           <td>1 {initialCurrency}</td>
            <td>{(exchange)} {finalCurrency}</td>
         </tr>
         <tr> 
           <td>5 {initialCurrency}</td>
            <td>{(exchange *5).toFixed(4)} {finalCurrency}</td>
         </tr>
         <tr> 
           <td>10 {initialCurrency}</td>
            <td>{(exchange *10).toFixed(4)} {finalCurrency}</td>
         </tr>
         <tr> 
           <td>25 {initialCurrency}</td>
            <td>{(exchange *25).toFixed(4)} {finalCurrency}</td>
         </tr>

         <tr> 
           <td>50 {initialCurrency}</td>
            <td>{(exchange *50).toFixed(4)} {finalCurrency}</td>
         </tr>
         <tr> 
           <td>100 {initialCurrency}</td>
            <td>{(exchange *100).toFixed(4)} {finalCurrency}</td>
         </tr>
         <tr> 
           <td>1,000 {initialCurrency}</td>
            <td>{(exchange *1000).toFixed(4)} {finalCurrency}</td>
         </tr>
         <tr> 
           <td>5,000 {initialCurrency}</td>
            <td>{(exchange *5000).toFixed(4)} {finalCurrency}</td>
         </tr>
         <tr> 
           <td>10,000 {initialCurrency}</td>
            <td>{(exchange *10000).toFixed(4)} {finalCurrency}</td>
         </tr>
         <tr> 
           <td>50,000 {initialCurrency}</td>
            <td>{(exchange *50000).toFixed(4)} {finalCurrency}</td>
         </tr>
         </tbody>
     
    </table>
   </>
  )
}
