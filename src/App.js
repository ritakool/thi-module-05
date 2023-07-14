import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import List from "./component/List";
import Detail from "./component/Detail";
import CreateTour from "./component/CreateTour";
import EditTour from "./component/EditTour";

function App() {
  return (
   <>
    <Routes>
        <Route path={'/'} element={<Home/>}>
            <Route path={'/list'} element={<List/>}/>
            <Route path={'/detail/:id'} element={<Detail/>}/>
            <Route path={'/create'} element={<CreateTour/>}/>
            <Route path={'/edit/:id'} element={<EditTour/>}/>
        </Route>
    </Routes>
   </>
  );
}

export default App;
