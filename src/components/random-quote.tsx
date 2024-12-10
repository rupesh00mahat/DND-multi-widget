import { fetchQuote } from '@/utils/fetchQuote'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

function RandomQuote() {

    const {data, error, isLoading, isError} = useQuery({
        queryKey: ['stoic-quote'],
        queryFn: fetchQuote
    })
    console.log(data);
    return (
        <div className='p-4 rounded-md bg-blue-400'>
            {data &&  (<><span className='text-white'>{data.data.quote}</span> -<span className='text-lg'> {data.data.author}</span></>)}
        </div>
    )
}

export default RandomQuote