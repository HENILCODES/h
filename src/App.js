import React, { useEffect, useState } from "react";
export default function App() {
  const [count, setCount] = useState(5);
  const [color, setcolor] = useState("");

  useEffect(() => {
    // setcolor("red");
    setInterval(() => {
        let d = ["green","blue","#9306f7"];

        let r = Math.floor(Math.random()*3);
        setCount(()=>  r );
        setcolor((color)=> d[r])
    },5000);
  }, [color,count]);
  return (
    <>
      <h1 className={`colso asj aas ${color}`} style={{color:color}}>Hello {count} </h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </>
  );
}
