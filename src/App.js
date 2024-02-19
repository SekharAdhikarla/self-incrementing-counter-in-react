import React from "react";
import Accordion from "./Accordion";

const items = [
  { 
      title:'section1',
      content: "This is the content of section 1"
  },
  {
title : "Section2",
content: 'This is the content of section 2'
  },
  {
    title: 'Secton3',
    content: 'This is the content of section 3'
  }
]
function App(){
  return(
    <div>
     <Accordion items={items} />
    </div>

  )
}
export default App;