import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context';

const Favourites = () => {
  const { state, setActiveNavlink }= useGlobalContext();
  
  useEffect(()=>{
    setActiveNavlink(3);
  }, []);

  return (
    <section className='favourites'>
      Favourites
    </section>
  )
}

export default Favourites
