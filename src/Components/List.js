import React from 'react'
import Listsub from './Listsub'
import ListSubSecondary from './ListSubSecondary'
//import ExchangeSum from './ExchangeSum';


export default function List({initialCurrency, exchange, finalCurrency,change,changeSecondary}) {

  
 let picture1 =  initialCurrency?initialCurrency:'loading';
 let pic1 = picture1.slice(0,-1);
  let k= `https://www.countryflagicons.com/FLAT/32/${pic1}.png`;

  
  let picture2 =  finalCurrency?finalCurrency:'loading';
  let pic2 = picture2.slice(0,-1);
   let o = `https://www.countryflagicons.com/FLAT/32/${pic2}.png`;
 
  return (
    <div className='tableDesign'>
    <div className='table1'>
        <div className='tableHead'>Converting {!change? <img src={k} alt='flag'/>:<img src={o} alt='flag' />} {!change?initialCurrency:finalCurrency} to {!change? <img src={o} alt='flag'/>:<img src={k} alt='flag' />}{ !change?finalCurrency:initialCurrency}</div>
        {changeSecondary&&<Listsub  initialCurrency={initialCurrency} finalCurrency={finalCurrency} exchange={exchange} change={change} />}
        {change && <ListSubSecondary initialCurrency={initialCurrency} finalCurrency={finalCurrency} exchange={exchange} change={change}/>}       
    </div>
    <div className='table1'>
        <div className='tableHead'>Converting  {!change? <img src={o} alt='flag'/>:<img src={k} alt='flag' />}{!change?finalCurrency:initialCurrency} to {!change? <img src={k} alt='flag'/>:<img src={o} alt='flag' />}  { !change?initialCurrency:finalCurrency}</div>
        {change&&<Listsub  initialCurrency={initialCurrency} finalCurrency={finalCurrency} exchange={exchange} change={change} />}
        {changeSecondary && <ListSubSecondary initialCurrency={initialCurrency} finalCurrency={finalCurrency} exchange={exchange} change={change}/>} 
     </div> 
    </div>
  )
}
