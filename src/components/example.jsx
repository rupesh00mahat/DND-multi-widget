import React from 'react';

import WeatherContextProvider from '@/store/weather-context.tsx';
import WeatherComponent from './WeatherComponent.jsx';
import RandomQuote from './random-quote.tsx';

export default function Example() {
  

  return (
  <>
  
  <div className='p-2  font-mono  border-black grid gap-4'>
  <div className='shadow-2xl rounded-lg ' >
      <WeatherContextProvider>
      <WeatherComponent/>
      </WeatherContextProvider>
      
    </div>
    <div className="random-quote">
    <RandomQuote/>
    </div>
  </div>
  </>
  );
  

}