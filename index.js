function getData()
{
    const city=search.value;
   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1e6c153e74msh9716ecdb1fb3ba6p1c7db0jsn853fb5b7dc29',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response=>response.json())
.then(res=>{
    console.log(res);
    temp.innerHTML=res.temp;
    ws.innerHTML=res.wind_speed;
    hmdty.innerHTML=res.humidity;
})
.catch(err=> console.log(err));
}