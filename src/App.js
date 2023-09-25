import Video from "./components/Video";
import "./App.css"
import array from "./data/data"
import PlayButton from "./components/PlayButton";
import Chapter4 from "./components/Chapter4";
import { Resume, NameComponent } from "./components/Resume";
import { useState } from "react";
import Clock from "./components/Clock";
function App() {
  const [video, setVideo] = useState(array)
  function handleClick(){
         setVideo([...video,
          {
            title:"new mongo",
             views:'10k',
              time:"1 month ago",
               channel:"mammyFish",
               verified: true
          }])
  }

  return (
    <>
      <div className="App">
        <button onClick={handleClick}>add</button>
      {video.map((obj, index)=>(
        <Video {...obj} id={index} key={index}>
        <div style={{clear:'both'}}>
      <PlayButton></PlayButton>
      </div>
      </Video>
      ))}
      
      
      </div>
      
    </>
  )
}

export default App;
