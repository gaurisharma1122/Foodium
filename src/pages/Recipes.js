import React from 'react'
import { useEffect } from 'react';
import { useGlobalContext } from '../context/context';

const Recipes = () => {
  const { state, setActiveNavlink } = useGlobalContext();

  useEffect(() => {
    setActiveNavlink(2);
  }, []);
  
  return (
    <section className='recipes'>
      Recipes
    </section>
  )
}

export default Recipes
