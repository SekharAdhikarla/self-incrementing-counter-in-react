import React,{useState} from "react";

function App({items}){
    const [activeIndex ,setActiveIndex] = useState(-1);

   const handleClicke = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index)
   };
    return (
        <div>
           {items.map((item, index) => (
              <div key={item.title}>
                 <button onClick={() =>handleClicke(index)}>{item.title}</button>
                 {index === activeIndex && <p>{item.content}</p>}
              </div>
           ))}
        </div>
     );
  }

export default App;


