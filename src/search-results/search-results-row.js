// To make the searched results reponsive when clicked
import { useNavigate } from "react-router-dom";

import "./search-result.css";


const SearchResultsRow = ({house}) => {
    const navigate = useNavigate();
    const setActive =() =>{
        navigate(`/house/${house.id}`)
    };
    return ( 
        <tr onClick={setActive}>
            <td>{house.address}</td>
            <td>{house.price}</td>
            <td>{house.likes}</td>
        </tr>

     );
};
 
export default SearchResultsRow;