import { Routes,Route } from "react-router";
import { Home } from "./Components/Home/Home";
import { Single } from "./Components/Single Car/Single";
import { Cars } from "./Components/Cars/Cars";
import { Admin } from "./Components/Admin/Admin";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={ <Home/>}/>
        <Route path={'/car/:id'} element={<Single/>}/>
        <Route path={'/cars'} element={<Cars/>}/>
        <Route path={"/admin-dashboard"} element={<Admin/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
