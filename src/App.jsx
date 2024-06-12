
// import Main from "./myreactfiles/main";
// import Minus from "./myreactfiles/minscount";
// import Sum from './myreactfiles/sum';
// import First from './myreactfiles/firstclass';
// import Map from './myreactfiles/map';
// import Calc from "./myreactfiles/Calc";
// import Task from './myreactfiles/Task';
// import Eff from './myreactfiles/useEffect';
// import Maincon from './myreactfiles/usecontext/maincon';
// import Image from './myreactfiles/image';
// import Memo from './myreactfiles/memo';
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Memo from "./myreactfiles/memo";
// import Ref from "./myreactfiles/Ref";
// import Map from "./myreactfiles/map";
// import Post from "./myreactfiles/CrudApplication/Post";
// import Start from "./myreactfiles/CrudApplication/Start";
// import Edit from "./myreactfiles/CrudApplication/edit";
// import Post from "./myreactfiles/CrudApplication/post";
// import Update from "./myreactfiles/CrudApplication/Update";
// import Get from "./myreactfiles/CrudApplication/Get";
// import Imagetask from "./myreactfiles/Imagetask";
import './App.css';

import Aboutdetail from "./myreactfiles/myproject1/About";
import Contact from "./myreactfiles/myproject1/Contact";
import Foot from "./myreactfiles/myproject1/Foot";
import Header from "./myreactfiles/myproject1/Header";
import Map from "./myreactfiles/myproject1/Map";
import Service from "./myreactfiles/myproject1/Service";
import Testimonial from "./myreactfiles/myproject1/Testimonial";
import Top from "./myreactfiles/myproject1/Top";
import Projectslider from "./myreactfiles/myproject1/project";
import "bootstrap/dist/css/bootstrap.min.css"

// import Ref from './myreactfiles/Ref';
function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      {/* <Sum/> */}
      {/* <First /> */}
      {/* <Minus></Minus> */}
      {/* <Calc></Calc> */}
      {/* <Map></Map> */}
      {/* <Task></Task> */}
      {/* <Eff></Eff> */}
      {/* <Maincon></Maincon> */}
      {/* <Image></Image> */}
      {/* <Memo/> */}
      {/* <Ref></Ref> */}
      {/* <Imagetask></Imagetask> */}
      {/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Memo></Memo>}/>
  <Route path="/ref" element={<Ref></Ref>}/>
  <Route path="/map" element={<Map></Map>}/>
   <Route path="/createe" element={<Start></Start>}/>
  <Route path="/edit" element={<Edit></Edit>}/>
  <Route path="/post" element={<Post></Post>}/>
  <Route path="/get" element={<Get></Get>}/>
  <Route path="/update" element={<Update></Update>}/>
 </Routes>
</BrowserRouter> */}

 <Top></Top>
 <Header></Header>
 <Service></Service>
<Aboutdetail></Aboutdetail>
<Projectslider></Projectslider>
<Testimonial></Testimonial>
<Contact></Contact>
<Map></Map>
<Foot></Foot>
    </div>
  );
}

export default App;
