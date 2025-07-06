import { BrowserRouter,Routes, Route } from "react-router";
import { Layout } from "./Layout";
import { Pithily } from "./Pithily";
import { Header } from "./component/Header/Header";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";



export const App = () => {
  return (    
<BrowserRouter>
    <Routes>
    <Route path = "/" element = {<Layout/>}>
    <Route index element={<Pithily/>}/> 

    </Route> 

      <Route path = '*' element={<NotFoundPage/>}/>

    </Routes>
</BrowserRouter>
  );
};