import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const options = {method: 'GET'};

// fetch('https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/track/autocomplete?limit=1&q=eminem')

// fetch('https://api.deezer.com/chart/0/artists', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

  export const Deezer = createApi({
    reducerPath:'Deezer',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0'
        // prepareHeaders:()=>{
        //     Headers.set
        
    }),
    endpoints:(builder) =>({
        getTopCharts: builder.query({
            query:()=>'/artists'
        }),
    })
    //name of api
  });

  export const {
    useGetTopChartsQuery,
  }=Deezer;