import { useState } from 'react'
import './App.css'

function App() {
  const[color,setcolor]=useState('olive')

  return (
      <div className="w-full h-screen duration-200" 
        style={{backgroundColor:color}}
        >
          <div className="fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
              <button onClick={()=>setcolor("red")} className='outline-none px-4 py-1 rounded-full  text-white bg-amber-950 '>Red</button>
              <button onClick={()=>setcolor("yellow")} className='outline-none px-4 py-1 rounded-full  text-white bg-amber-950 '>Yellow</button>
              <button onClick={()=>setcolor("blue")} className='outline-none px-4 py-1 rounded-full  text-white bg-amber-950 '>Blue</button>
              <button onClick={()=>setcolor("black")} className='outline-none px-4 py-1 rounded-full  text-white bg-amber-950 '>Black</button>
              <button onClick={()=>setcolor("pink")} className='outline-none px-4 py-1 rounded-full text-white bg-amber-950 '>Pink</button>
              <button onClick={()=>setcolor("green")} className='outline-none px-4 py-1 rounded-full text-white bg-amber-950 '>Green</button>
            </div>
          </div>
      </div>
  )
}

export default App
