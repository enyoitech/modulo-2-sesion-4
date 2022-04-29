import React, { useState } from 'react'



export const Counter = (props) => {
    const {contador, aumentar, disminuir, error} = props
    return (
      <>
          <h1>Contador:  { contador } </h1>
          <p>{error}</p>
          <button onClick={ aumentar } type='button'>+</button>
          <button onClick={ disminuir } type='button'>-</button>
      </>
    )
   }

// export const Counter = (props) => {
    
//  return (
//    <>
//        <h1>Contador:  { props.contador } </h1>
//        <p>{props.error}</p>
//        <button onClick={ props.aumentar } type='button'>+</button>
//        <button onClick={ props.disminuir } type='button'>-</button>
//    </>
//  )
// }

// export const Counter = () => {
//      const [contador, setContador] = useState(0);
//   return (
//     <>
//         <h1>Contador:  { contador } </h1>
//         <button onClick={
//              ()=>setContador(contador+1)
//             } type='button'>+</button>
//     </>
//   )
// }
