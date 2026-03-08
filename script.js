const Search=async()=>{
    let CityName=document.getElementById('inputCity').value

    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=5b4bee0ba241d092159faf007e166080&units=metric`)
        if(response.status==404){
            alert('invalid city name')
        }
        console.log(response);
        const res=await response.json()
        console.log(res);
        
        
    }
    catch(err){
        console.log(err);
        
    }
}