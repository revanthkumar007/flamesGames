import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Declaration from './component/components/Declaration';
import Sections from './component/Sections';
function App() {
  const [show, setShow] = useState(false);
  let images = ``;
  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), 5 * 1000);
      return () => {
        clearTimeout(timer1);
      };
    },[]);
  
  return (
   <>
    {show ? 
    <>
      <Sections/>
      <Declaration/>
    </>
    :
    < div className='text-center perloader'>
         <img src={`https://bestanimations.com/uploads/gifs/1697162351rotating-red-heart-gif-animation61.gif`} alt="..."  width={200} height={100} className="rounded img-fluid"/>
         <p className='lead text-center'>loading...</p>
    </div>
    }
     
   </>
  );
}

export default App;
 