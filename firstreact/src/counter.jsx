import {useState} from 'react';

function Counter(){
    const [counter,setcounter] = useState(15) 
    const add=()=>{
            setcounter(counter+1);
    }
    const remove=()=>{
            setcounter(counter-1);
    }

    return(
        <>
        <h1>Counter={counter}</h1>
        <button
        onClick={add}
        >ADD counter</button><br/>
        <button 
        onClick={remove}
        >REMOVE counter</button>
        </>
    )
}

export {Counter};