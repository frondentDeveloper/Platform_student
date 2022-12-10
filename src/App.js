import React from "react";
import {Routes, Route} from "react-router-dom"
import Loading from "./components/loading";
import "./components/main_style.scss"

function App() {
  return (
   <div className="routes-still">
       <Routes>
           {/*loading_page_first_one*/}
           <Route path="/" element={<Loading/>}/>
       </Routes>
   </div>
  );
}

export default App;
