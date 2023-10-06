
import { useState } from "react";
import Delivery from "./Delivery";
import Featured from "./Featured";
import Footer from "./Footer";
import Meal from "./Meal";
import NewsLetter from "./NewsLetter";
import TopNav from "./TopNav";
import TopPicks from "./TopPicks";
import { topPicks } from "./data/data";


function App() {
const[search,setSearch]=useState('')

  return (
    <div className="App">
       <TopNav 
       search={search}
       setSearch={setSearch}
       />
       <Featured />
       <Delivery />
       <TopPicks/>
       <Meal topPicks={topPicks.filter(item=>((item.title).toLowerCase()).includes(search.toLowerCase()))}/>
       <NewsLetter />
       <Footer />
    </div>
  );
}

export default App;
