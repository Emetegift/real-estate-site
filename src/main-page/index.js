import {useEffect, useState, useMemo} from "react" //This is an example of a hook
import './main-page.css';
import Header from "./header";

function App() {
  //When a component is rendered, all houses will be in an empty array ([])
  const [allHouses, setAllHouses] = useState([]); //This will return two array

  useEffect(() => {
    //The houses are loaded asynchronuously (async) meaning the rest of the code continues while the houses are loading
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses); //When houses are loaded
    };
    fetchHouses();
  }, []);
 
  // the memo uses a technique known as memorization also known as caching 
  const featuredHouse = useMemo(() => {
    if (allHouses.length){
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }

  }, [allHouses])


  
  return (
    <div className="container">
      <Header subtitle= "Providing comfortable homes all over the world"/>
    </div>
  );
}

export default App;
