// import React, { useState } from 'react'

// function App() {
// const[count,setCount]=useState(0)

//   return (
//     <div>
//       {count}
//       <button onClick={()=>setCount(count+1)}>+</button>
//       <button onClick={()=>setCount(count-1)}>-</button>
//       <button onClick={()=>setCount(count=0)}>clear</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react'

// function App() {
//   const[color,setcolor]=useState("red")
//   const handler =()=>{
//     if(color==="red"){
//       setcolor("blue")
//     }else if(color==="blue"){
//       setcolor("green")
//     }else if(color==="green"){
//       setcolor("yellow")
//     }else{
//       setcolor("red")
//     }
//   }
//   return (
//     <div style={{
// backgroundColor:color,
// height:"100vh"
// }}>
//   <button  onClick={handler}>dfsd</button>
      
//     </div>
//   )
// }

// export default App





// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';

// function App() {
//   const color =["red","yellow","green"];
// const[light,setLight]=useState(0)

// useEffect(()=>{

//   setInterval(()=>{
//     setLight((prev) => (prev +1) % 3)
//   },[2000])

// },[])
//   return (
//    <div>
//       <div style={{
//         background:"black",
//         width:"120px",
//         padding:"20px",
//         border:"10px",
//         margin:"50px auto"
//       }}>trafic</div>
  
//     <div style={{
//       width:"80px",
//       height:"80px",
//       borderRadius:"50px",
//       margin:"50px auto",
//       background: light===0?"red":"grey",
//     }}></div>

//     <div   style={{
//       width:"80px",
//       height:"80px",
//       margin:"50px auto",
//       borderRadius:"50px",
//       background:light === 2? "yellow" : "grey",

//     }}></div>

//     <div  style={
//       {
//         width:"80px",
//         height:"80px",
//         margin:"50px auto",
//         borderRadius:"50px",
//         background:light===1?"green":"grey",
//       }
//     }></div>

     
      
//   </div>
//   )
// }

// export default App
