// import React from 'react';
// import axios from 'axios';
// import {Error, SongCard, Loader} from '../components';
// import {genres} from '../assets/constants';
// import {useGetTopChartsQuery} from '../redux/services/Deezer';



// const Discover = () => {
//   // const {data, isFetching, error}= useGetTopChartsQuery();

//   const options = {method: 'GET', url: 'https://api.deezer.com/chart/0/artists'};

//   const [data, setData] = React.useState({})
//   React.useEffect(() => {
//     axios.request(options)
//     .then((response) => 
//       setData(response.data)
//       );
//       .catch((error) => 
//       console.log(error)
//     );
//   }
//     )

//   const genreTitle = 'pop';
//   console.log(data);

//   // if (isFetching) return <Loader title='loading songs'/>;

//   // if (error) return <Error/>
// return (
// <div className='flex flex-col'>
//     <div className='w-full flex justify-between
//      items-center sm:flex-row flex-col mt-4 mb-10'>
//         <h2 className='font-bold text-3xl text-white text-left'>Discover {genreTitle}</h2>
//          <select
//          onChange={()=>{}}
//          value=''
//          className='bg-black text-gray-300 p-3 text-sm rounded-lg
//          outline-none sm:mt-0 mt-5'>
//           {genres.map((genre)=>

//           <option key={genre.value}
//           value={genre.value}
//           >{genre.title}</option>
//           )}
//          </select>
//     </div>
//     <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
//         // 
//         {[1,2,3,4,5,6,7,8,9,10, 11,12,13,14,
//         15,16,17,18,19,20,21,22,23,24,25,26,27,28
//         ].map((song)=>
//          { return
//         <SongCard key={song.key} song={song}i={i}/>
// })}
//     </div>
//      </div>
// );
// };
// export default Discover;

import { Error, SongCard, Loader } from '../components';
import React from 'react';
import axios from 'axios';
import { genres } from '../assets/constants';
// import SongCard from '../components/SongCard';
import { useGetTopChartsQuery } from '../redux/services/Deezer';
import { useEffect } from 'react';

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  const genreTitle = 'pop';
  // const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://api.deezer.com/chart/0/artists')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isFetching) return <Loader title='loading songs'/>;

  // if (error) return <Error/>
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
        <select className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((song) => (
          <SongCard song={song} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
