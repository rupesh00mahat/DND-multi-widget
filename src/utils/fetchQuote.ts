export const fetchQuote = async () =>{
    let data =  await fetch('api/stoic-quote') // api for the get request
      .then(response => response.json())
      .then(data => {return(data)});
      return data;
  }