import React, { useState } from 'react'
import { Counter } from './Counter';
import { NavBar } from './NavBar';


export const Principal = () => {
    const [contador, setContador] = useState(0);
    const [error, setError] = useState('No hay error');

    const aumentar = ()=>{
        setContador(contador+1)
        setError('No hay error')

    }
    const disminuir = ()=>{
        contador>0?(
            setContador(contador-1)
            ):(
                setError('Esto no es permitido')
                )
        // if (contador>0) {
        //     setContador(contador-1)
        // }
    }

  return (
    <>  
        <NavBar
         carrito={contador}
        />
        <Counter
        aumentar={aumentar}
        disminuir={disminuir}
        contador={contador}
        error={error}
        />
    </>
  )
}
