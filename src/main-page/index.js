// import { useEffect, useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './main-page.css';
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import Housefilter from "./house-filter"; 
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);
 


  

  return (
    <Router>
      <div className="container">
      <Header subtitle="Providing comfortable homes all over the world" />
        <Housefilter allHouses={allHouses}/>
        <Routes>
          <Route path="/searchresults/:country" element= {<SearchResults allHouses={allHouses}/>}>
            {/* <SearchResults allHouses={allHouses}/> */}
          </Route>
          <Route path="/house/:id" element={<HouseFromQuery allHouses={allHouses}/>}>

          </Route>
          <Route path="/" element={<FeaturedHouse house={featuredHouse}/>}>
            
          </Route>
          {/* Add more Route components as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
