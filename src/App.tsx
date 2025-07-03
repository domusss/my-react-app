import {Header} from "./component/Header/Header"
import { About } from "./component/Main/About/About"
import { Bridging } from "./component/Main/Bridging/Bridging"
import {Service} from "./component/Main/Service/Service"
import {Portfolio} from "./component/Main/Portfolio/Portfolio"
import {Company} from "./component/Main/Company/Company"
import {Testimonial} from "./component/Main/Testimonial/Testimonial"
import { Book } from "./component/Main/Book/Book"
import { Print } from "./component/Main/Print/Print"
import { Footer } from "./component/Footer/Footer"


export function App() {

  return (
    <div className="container">
  <Header/>
  <Bridging/>
  <About/>
  <Service/>
  <Portfolio/>
  <Company/>
  <Testimonial/>
  <Book/>
  <Print/>
  <Footer/>
    </div>
  )
}

