import { useState } from "react"


function App() {
  const [color, setcolor]=useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap gap-3 justify-center shadow-lg px-3 py-2 rounded-xl bg-white">
        <button onClick={()=>{setcolor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>
          RED
        </button>
        <button onClick={()=>{setcolor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>
          GREEN
        </button>
        <button onClick={()=>{setcolor("yellow")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow"}}>
          YELLOW
        </button>
        <button onClick={()=>{setcolor("olive")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "olive"}}>
          OLIVE
        </button>
        <button onClick={()=>{setcolor("black")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>
          BLACK
        </button>
        <button onClick={()=>{setcolor("gray")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "gray"}}>
          GRAY
        </button>
      </div>
      </div>
    </div>
  )
}

export default App
