import { fetchWeather } from "@/utils/fetchWeather";
import { useQuery } from "@tanstack/react-query";
import { createContext, useReducer, ReactNode, useEffect } from "react";

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

interface WeatherState{
    weatherData: object |  undefined
}
interface WeatherContextType
{
    state: WeatherState,
    dispatch: React.Dispatch<any>;
}

function weatherContextReducer(state:WeatherState, action:any):WeatherState{
    if(action.type == "UPDATE_WEATHER"){
            return {...state,weatherData: action.payload};
    }
   
        return state;
    
}

interface WeatherContextProviderProps{
    children: ReactNode;
}

const  WeatherContextProvider:React.FC<WeatherContextProviderProps> = ({children})=>{
 const [state, dispatch ] = useReducer(weatherContextReducer, {weatherData: undefined}); 

 const {data, error, isLoading, isError} = useQuery({
    queryKey: ['weatherData'],
    queryFn: fetchWeather
 });
 useEffect(()=>{
   
       if(!isLoading){
        dispatch({type: "UPDATE_WEATHER", payload: data})
       }
  
 },[isLoading])
 

 return <WeatherContext.Provider value={{state, dispatch}}>
    {children}
 </WeatherContext.Provider>
}

export default WeatherContextProvider;




