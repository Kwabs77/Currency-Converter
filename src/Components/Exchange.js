import { useEffect,useState } from "react";

export default function Exchange({money,selectedCurrency,onCurrencyChange, amount,amountOnChange}) {
 

 let picture =  selectedCurrency?selectedCurrency:'loading';
 let pic = picture.slice(0,-1);
  let k= `https://www.countryflagicons.com/FLAT/64/${pic}.png`;

  
  return (
    <>
     <input className="value" type='number'  value={amount} onChange={amountOnChange}/>
     <img  className='image' src={k} alt='Flag'/>
     <select  className='options'value={selectedCurrency} onChange={onCurrencyChange}>
        {money.map(options=>(    
        <option value={options}>
          {options}</option>
  
        ))}
        </select>
    
    </>
  )
}
