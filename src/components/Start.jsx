import { useRef } from "react";
import title from '../assets/title.png'; 

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div style={{ 
      backgroundImage: `url("https://i.ytimg.com/vi/7mq7wXH8hNo/maxresdefault.jpg")`, width: '100%', height: '100%'
    }}>
    <div className="start" >
      <img className="titleImage" src={title} />
      <input
        className="startInput"
        placeholder="Please enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
    </div>
  );
}
