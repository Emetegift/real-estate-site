// import {useEffect, useState, useMemo} from "react" //This is an example of a hook
// import {
//   BrowserRouter as Router,
//   Routes, // instead of "Switch"
//   Route,
// } from "react-router-dom";
// import './main-page.css';
// import Header from "./header";
// import FeaturedHouse from "./featured-house";

// function App() {
//   //When a component is rendered, all houses will be in an empty array ([])
//   const [allHouses, setAllHouses] = useState([]); //This will return two array

//   useEffect(() => {
//     //The houses are loaded asynchronuously (async) meaning the rest of the code continues while the houses are loading
//     const fetchHouses = async () => {
//       const rsp = await fetch("/houses.json");
//       const houses = await rsp.json();
//       setAllHouses(houses); //When houses are loaded
//     };
//     fetchHouses();
//   }, []);
 
//   // the memo uses a technique known as memorization also known as caching 
//   const featuredHouse = useMemo(() => {
//     if (allHouses.length) {
//       const randomIndex = Math.floor(Math.random() * allHouses.length);
//       return allHouses[randomIndex];
//     }

//   }, [allHouses]);


  
//   return (
//     <Router>
//       <div className="container">
//         <Header subtitle= "Providing comfortable homes all over the world"/>
//       <Routes> 
//         <Route path="/">
//           <FeaturedHouse house={featuredHouse}/>
//         </Route>

//       </Routes>


//        </div>
//     </Router>
//   );
// }

// export default App;





import { useEffect, useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './main-page.css';
import Header from "./header";
import FeaturedHouse from "./featured-house";

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing comfortable homes all over the world" />
        <Routes>
          <Route path="/" element={<FeaturedHouse house={featuredHouse}/>}>
            {/* <FeaturedHouse house={featuredHouse} /> */}
          </Route>
          {/* Add more Route components as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
