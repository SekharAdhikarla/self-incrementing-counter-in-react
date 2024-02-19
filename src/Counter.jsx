import {useState,useEffect} from "react";
import './Styles.css';

function App(){
    const [ counter,setCounter] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=> {
            setCounter(counter + 1);
        },1000);
        return() => {
            clearInterval(interval);
        }
    })

   

  
    return(
        <div className="App">
            <h1>{counter}</h1>
            <p>Start editing to see some magic happen!</p>

        </div>
    )

}
export default App;