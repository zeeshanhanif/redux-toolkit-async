import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { increment, decrement, incrementByAmount, counterUpdate } from '../store/counterSlice';


function Counter() {
    //const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const {counter , isLoading} = useSelector( (state)=> {
        console.log(state);
        return {
            counter: state.counter.count,
            isLoading: state.counter.isLoading
        }

    });

    if(isLoading) return <div>Loading....</div>


  return (
    <div >
        <div>Counter: {counter}</div>
        <div>
            <button onClick={()=>{
                //setCounter(counter+1);
                //dispatch( {type:"INCREMENT"} );
                dispatch( increment() );
            }}>Increment</button>
            <br/>
            <button onClick={()=>{
                //setCounter(counter-1);
                dispatch( decrement()  );
            }}>Decrement</button>
        </div>
        <div>
            <input type="text" onChange={(e)=> {
                setValue(e.target.value);
            }} />
            <br/>
            <button onClick={()=>{
                //setCounter(counter+ Number(value))
                //dispatch( {type: "INCREMENT_BY_AMOUNT", payload:Number(value) } )
                dispatch(incrementByAmount(Number(value)))
            }}>Increment By Value</button>
        </div>
        <div>
            
            <button onClick={()=>{
                dispatch(counterUpdate())
            }}>Increment From Server</button>
        </div>
    </div>
  );
}

export default Counter;
