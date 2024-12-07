import { WeatherContext } from '@/store/weather-context'
import React, { useContext, useEffect, useState } from 'react'
import {getSunsetDateTime} from "@/utils/getSunsetDateTime";

function WeatherComponent() {
    const [dateTime, setDateTime] = useState({date: "", time: ""
    })
    const {state} = useContext(WeatherContext);
    const {weatherData} = state;


useEffect(()=>{
   if(weatherData && weatherData.sys.sunset){
    let dateTimeOpt = getSunsetDateTime(weatherData.sys.sunset, weatherData.sys.country);

    setDateTime(dateTimeOpt)
   }

},[weatherData])

    return (
        <div id='weather-component'
            style={{
                backgroundImage: 'url(/images/thunder.jpg)',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
            className=' px-5 rounded-md py-8 bg-[#00BFFF] text-white'>
            <div className="component-wrapper flex justify-between items-end pt-20">
                <div className="weather-info flex flex-col items-start">
                    <span>{weatherData && weatherData.weather[0].main}</span>
                    <h3 className='text-[70px] p-0 font-extralight'>{weatherData && parseFloat(weatherData.main.temp).toFixed(1)}°</h3>
                    <p className='text-lg'>{weatherData && weatherData.name}</p>
                </div>
                <div className="time-and-day flex flex-col items-end">
                    <span className='text-xl font-semibold'>{dateTime.time}</span>
                    <p className='font-thin text-lg '>Sunset Time, {dateTime.date}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherComponent