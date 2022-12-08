import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Case1 from '../pages/Case1'
import Case2 from '../pages/Case2'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/case-study" element={<Case1/>}/>
                <Route exact path="/case-study-1" element={<Case1/>}/>
                <Route exact path="/case-study-2" element={<Case2/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;