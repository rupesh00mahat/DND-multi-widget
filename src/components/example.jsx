import React from 'react';

import WeatherContextProvider from '@/store/weather-context.tsx';
import WeatherComponent from './WeatherComponent.jsx';
import RandomQuote from './random-quote.tsx';
import TodoComponent from "@/components/TodoComponent.jsx";
import TodoContextProvider from '@/store/todo-context.jsx';

export default function Example() {
  return (
    <>

      <div className='p-2  font-mono  border-black grid gap-4'>
        <div className='shadow-2xl rounded-lg ' >
          <WeatherContextProvider>
            <WeatherComponent />
          </WeatherContextProvider>

        </div>
        <div className="below-widgets w-full flex gap-10">
          <div className="random-quote w-1/4">
            <RandomQuote />
          </div>
          <div className="todo-wrapper w-3/4">
           <TodoContextProvider>
           <TodoComponent />
           </TodoContextProvider>
          </div>
        </div>
      </div>
    </>
  );


}