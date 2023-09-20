import PlayPause from '../components/PlayPause'

const SongCard = () =>  {
  
return (
  <>
  
  <div className="flex flex-row w-[250px] p-4 bg-white/50 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="relative w-full h-56 group">
      <PlayPause/>
    </div>
  </div>
  </>
  
  )
}

export default SongCard;

