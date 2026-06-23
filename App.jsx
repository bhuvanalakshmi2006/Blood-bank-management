import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import Donors from "./pages/Donors";
import Requests from "./pages/Requests";

function App(){
  return(
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/donors"> Donors</Link> |
        <Link to="/requests"> Requests</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/donors" element={<Donors/>}/>
        <Route path="/requests" element={<Requests/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
