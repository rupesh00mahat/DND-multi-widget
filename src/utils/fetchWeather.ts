export const fetchWeather = async () =>{
  let data =  await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=f3776047ead711ab4f0e8c88af6e8e0a') // api for the get request
    .then(response => response.json())
    .then(data => {return(data)});
    return data;
}