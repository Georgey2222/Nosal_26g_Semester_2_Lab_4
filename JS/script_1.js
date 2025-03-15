const width =document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
gorizontal_size=(width*0.85)/120;
vertical_size=(height*0.85)/80;
document.documentElement.style.setProperty('--size',`${Math.min(gorizontal_size,vertical_size,10)}px`);
const apiKey = '990610c7381315107d38ed74';  
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
var usd=41.42,eur=45.21,chf=47.05,gbp=53.61,pln=10.77;
function fetchExchangeRates() 
{
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            usd=Number(data.conversion_rates.UAH).toFixed(2);
            document.querySelector('option[value="1"]').textContent = `USD / ${usd}`;
            eur=(Number(data.conversion_rates.UAH)/Number(data.conversion_rates.EUR)).toFixed(2);
            document.querySelector('option[value="2"]').textContent = `EUR / ${eur}`;
            gbp=(Number(data.conversion_rates.UAH)/Number(data.conversion_rates.GBP)).toFixed(2);
            document.querySelector('option[value="3"]').textContent = `GBP / ${gbp}`;
            chf=(Number(data.conversion_rates.UAH)/Number(data.conversion_rates.CHF)).toFixed(2);
            document.querySelector('option[value="4"]').textContent = `CHF / ${chf}`;
            pln=(Number(data.conversion_rates.UAH)/Number(data.conversion_rates.PLN)).toFixed(2);
            document.querySelector('option[value="5"]').textContent = `PLN / ${pln}`;
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
        });
}
fetchExchangeRates();
const calc_res=document.getElementById("calc");
calc_res.addEventListener("click",function()
{
    let a =Number(document.getElementById("cost_uah").value);
    let b =Number(document.getElementById("currency").value);
    if(Number.isNaN(a)||a=="")
    {
     alert("Введіть коректні дані");
    }
    else
    {
    let values=[0,usd,eur,gbp,chf,pln];
    document.getElementById("result").value=(a/values[b]).toFixed(2);
    }
})
const btn_clear=document.getElementById("but_clear");
btn_clear.addEventListener("click",function(){
    document.getElementById("cost_uah").value="";
    document.getElementById("result").value="";
})
