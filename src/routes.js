import  Home from "./pages/Home";
import Details from "./pages/Details";
import { BrowserRouter, Routes,  Route} from "react-router-dom";

const Router = (() => {
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Details />} exact/>
        </Routes>
    </BrowserRouter> 
    )
})

export default Router;