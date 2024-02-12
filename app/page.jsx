
'use client'

import AddButton from "@/components/AddButton";
import { useState } from "react";

export default function Home() {
  const [firstNumbs , setFirstNumbs] = useState()
  const [secondNumbs , setSecondNumbs] = useState()
     

  return (
    <>
      <main className="container">
        <h1>Adding Two Numbers</h1>

        <section className="numInputs">
          <input 
            type='number' 
            id='firstNums' 
            placeholder="First Number" 
            onChange={(e)=> setFirstNumbs(e.target.valueAsNumber)}/>
            {/* e.target.value returns a string, using valueAsNumber returns it as a number*/}
          <input 
            type='number' 
            id='secondNums' 
            placeholder="Second Number" 
            onChange={(e)=> setSecondNumbs(e.target.valueAsNumber)}/>
        </section>

        <AddButton firstNumbs={firstNumbs} secondNumbs={secondNumbs}  />
      </main>


    </>
  );
}
