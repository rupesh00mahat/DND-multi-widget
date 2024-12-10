import { TodoContext } from '@/store/todo-context';
import React, { useContext, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';

function TodoComponent() {
    const taskInput = useRef(null);
    const { state,dispatch } = useContext(TodoContext);
    const { todo } = state;
    return (
        <div className='bg-white rounded-lg shadow-lg p-4'>
            <div className="task-input flex gap-5">
                <input ref={taskInput} type="text" name="task" id="task" className='w-3/4 border-2 p-2 rounded-md' />
                <button
                onClick={()=>{
                        if(taskInput.current.value != ""){
                            dispatch({type: 'ADD_TASK', payload: {id:uuidv4(),text: taskInput.current.value}})

                        }
                }}
                className='w-1/4 bg-blue-500 rounded-md text-white'>Add Task</button>
            </div>
            <ul className="task-list m-2 mt-10 overflow-x-hidden h-[250px]">
                {todo.length > 0 && (
                    <>
                        {todo.map(({ id, text }) => {
                            return <li key={id} className='w-full bg-[#e4e4e4] p-4 rounded-md mb-4 flex justify-between'>
                                <span>{text}</span>
                                <button
                                onClick={()=>{dispatch({type: 'DELETE_TASK', payload: id})}}
                                className='bg-red-500 rounded-md text-white p-4'>Delete Task</button>
                            </li>
                        })}

                    </>
                )}
            </ul>
        </div>
    )
}

export default TodoComponent