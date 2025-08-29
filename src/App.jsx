import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
     
      <Navbar />

      
      <Routes>
       
        <Route path="/" element={<><Hero /></>} />
      </Routes>

     
   
    </>
  );
}

export default App;
