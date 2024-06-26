import { useEffect,useState } from "react";
function useCurrencyInfo(currency){
    const [data,setData]=useState({})//defaultemty obj
    useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/${currency}.json`)
   //fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_cMRUYyjOY9ERsAuTiYv2GAp4Bes4Sqamw0DTh0Rk&base_currency=${currency}`)
    .then((r)=>r.json())//converts r ie data to json form
    .then((r)=>
        setData(r[currency]))//data m currency store
        console.log(data);
    },[currency])//ab r jsn format m converted h
    return data
}
export default useCurrencyInfo;