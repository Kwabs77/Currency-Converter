import Exchange from './Exchange';
import { useEffect, useState } from "react";
import List from './List';
let start = 'USD'
const base_url = `https://v6.exchangerate-api.com/v6/3f91e8e2268781ffe449b74b/latest/${start}`;

export default function ExchangeSum() {
   

  
const [money, setMoney] = useState([]);
let [initialCurrency, setInitialCurrency] = useState();
const [finalCurrency, setFinalCurrency] = useState();
const [exchange,SetExchange] = useState()
const [amount, setAmount] = useState(1);
const [amountFromInitial, setAmountFromInitial] = useState(true);
const [change, setChange] =useState(false)
const [changeSecondary, setChangeSecondary] =useState(true)
const [c,setC] =useState(true)
//const [b,setB] = useState(false);
 let toAmount,fromAmount;
const handleSwap=()=>{
      setChange(!change)
      setChangeSecondary(!changeSecondary)
     setC(false)
}

if (amountFromInitial){
    fromAmount =amount
    toAmount = (amount *exchange).toFixed(4);
    if(change ){
     fromAmount=amount
      toAmount=(amount/exchange).toFixed(4)
    }
   
} else{
    toAmount= amount;
    fromAmount = (amount/exchange).toFixed(4)
    if(change){
      toAmount = amount;
      fromAmount=(amount*exchange).toFixed(4)
    }
}


const currencySwap =(e)=>{
    if (!change){
      setInitialCurrency(e.target.value)
    }
    else{
      setFinalCurrency(e.target.value)
    }

}


const currencySwap2 =(e)=>{
  if (!change){
    setFinalCurrency(e.target.value)
  }
  else{
    setInitialCurrency(e.target.value)
  }

}


 useEffect(()=>{
  fetch(base_url)
    .then(res => res.json())
        .then(data=> {
          const ghanaCedis = Object.keys(data.conversion_rates)[50]
          setMoney([ ...Object.keys(data.conversion_rates)])
          setInitialCurrency(data.base_code)
          //data.base_code,
          setFinalCurrency(ghanaCedis)
          SetExchange(data.conversion_rates[ghanaCedis]);

        })
 },[])
 function handleFromAmount(e){
  //setC(true)
  setAmount(e.target.value);
  setAmountFromInitial(true);
 

 }

 function handleToAmount(e){
  //setC(false)
  setC(true)
  setAmount(e.target.value);
  setAmountFromInitial(false);
 
 }
 function handleToAmount2(e){
  setAmount(e.target.value);
  setAmountFromInitial(false);
  toAmount =fromAmount*exchange

 }
 start = initialCurrency;
//8015b49b2b0cd9155546af28
//fef17d6a05a2ea04dc773aa3

 //in use 3f91e8e2268781ffe449b74b
 useEffect(() => {
  if( initialCurrency != null &&  finalCurrency !=null){
      fetch(`https://v6.exchangerate-api.com/v6/3f91e8e2268781ffe449b74b/latest/${start}`)
        .then(res=> res.json())
        .then(data =>SetExchange(data.conversion_rates[finalCurrency]))        
        console.log(exchange);
  }
 },[initialCurrency, finalCurrency])

  return (
    <>
    
    <div className='rate'>
    <div className='converter'> Currency Converter</div>
    <div className='border'>
       <div className='first'>
       <div className='text'> 1<span className='color'> {!change?initialCurrency:finalCurrency}</span> is equivalent to <span className='color'>{!change?finalCurrency:initialCurrency}</span> {!change?exchange:(1/exchange).toFixed(4)}</div>    
      <Exchange  money = {money} selectedCurrency={ !change? initialCurrency: finalCurrency} onCurrencyChange={currencySwap}  
      amount ={fromAmount} amountOnChange={handleFromAmount}/>
      <br/>
      </div>
      <h1 onClick={handleSwap} className='center'style={{cursor:'pointer'}}> <span className='color'>&#8595;&#8593;</span></h1>
      <div className='end'>
      <Exchange money ={money}  selectedCurrency={ !change? finalCurrency :initialCurrency} onCurrencyChange={currencySwap2}      
       amount ={toAmount} amountOnChange={handleToAmount}/><br/> 
      </div>
      </div>
   </div >    
      <List initialCurrency={initialCurrency} toAmount={toAmount} finalCurrency={finalCurrency} exchange={exchange} change={change} changeSecondary={changeSecondary}/>   
   
      </>
    )
}
