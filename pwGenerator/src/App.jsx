
import { useCallback, useState,useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [password,setPassword] = useState("");
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed]= useState(false);

  // useRef hook
  const passwordRef = useRef(null);
  
  const passwordGenerator = useCallback( ()=>{
    let pass ='';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(isNumberAllowed){
      str += '1234567890';
    }
    if(specialCharAllowed){
      str += '!@#$%^&*()_+=<>/?|-';
    }


    for (let i = 0; i < length; i++) {
      const randomVal =str.charAt(Math.floor(Math.random() *str.length +1));
      pass +=randomVal;
      
    }
    setPassword(pass);
  },[length, isNumberAllowed, specialCharAllowed, setPassword]);

  const copyPasswordToClipBoard = ()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  

   useEffect (() => {
    passwordGenerator();
  
    
  }, [length, isNumberAllowed, specialCharAllowed]);

  

  return (
    <div className='flex flex-wrap justify-center px-4 py-3 bg-black w-full h-full'>
      <div className="flex flex-wrap justify-center px-4 py-3 bg-red-200 rounded-xl">
       
        <input  
        value={password} 
        type="text" 
        placeholder='password' 
        readOnly 
        className='outline-none text-orange-500 py-2 px-3 '
        ref={passwordRef}
        />
      <button 
      className='bg-blue-500 text-white px-2 py-2'
      onClick={copyPasswordToClipBoard}
      >copy</button>
      <div className='flex flex-wrap justify-center'>
        <input type="range" name='length' min={8} max={100} value={length} onChange={(e)=> setLength(e.target.value)}/>
        <label htmlFor="length">length: {length}</label>
        <input type="checkbox" name='number' value={isNumberAllowed} onChange={()=>setIsNumberAllowed((prev)=> !prev)}/>
        <label htmlFor="number">number allowed</label>
        <input type="checkbox" name='char' value={specialCharAllowed} onChange={()=>setSpecialCharAllowed((prev)=>!prev)} />
        <label htmlFor="char">Special charactor</label>

      </div>
       
        
      </div>

    </div>
  )
}

export default App
