//import useNavigate hook to help navigate
import { useNavigate } from "react-router-dom"; //This is formally "import { useHistory } from "react-router-dom";"


  

const HouseFilter = ({allHouses}) => {
    const navigate = useNavigate(); //Call the hook
    const countries = allHouses
    ? Array.from(new Set(allHouses.map((h) => h.country)))
    : [];
    countries.unshift(null);
    //Declare the function for the onSearchChange i.e the onChange handle
    const onSearchChange = (e) => {  
        const country = e.target.value //Where e is same as onSearchChange and This will extract the value from the handlers
        // navigate.push(`/searchresults/${country}`);// Previously
        navigate(`/searchresults/${country}`); // Presently
    }
    return ( 
        <div className="row mt-3">
            <div className="offset-md-2 col-md-4">
                Look for your dream house in country:
            </div>
            {/* the onChange handler will search for countries */}
            <div className="col-md-4 mb-3" onChange={onSearchChange}> 
                <select className="form-select">
                    {countries.map((c) => (
                        <option key ={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>

            </div>

        </div>
     );
}
 
export default HouseFilter;