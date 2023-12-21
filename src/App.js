import Navbar from "./Component/Navbar/Navbar"
import './App.css'
const App = ()=>{
  return(
    <div className="home-container">

      <Navbar/>

      <p className="text-light text-center home-heading ">Optimize digital experiences <br/>& maximize conversions</p>
       <p className="text-center text-light px-5 fs-5">Your customer is evolving every day. Decode their evolving behaviors, fine-tune with robust A/B testing,<br/> and personalize experiences that hit home. Boost conversions across your websites and mobile apps<br/> through data-driven UI and server-side enhancements.</p>
    </div>
  )}
  
export default App