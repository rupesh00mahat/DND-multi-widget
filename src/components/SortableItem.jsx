import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import WeatherComponent from "@/components/WeatherComponent"
import WeatherContextProvider from '@/store/weather-context';

export function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div className='shadow-2xl rounded-lg ' ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <WeatherContextProvider>
      <WeatherComponent/>
      </WeatherContextProvider>
    </div>
  );
}