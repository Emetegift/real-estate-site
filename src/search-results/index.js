import SearchResultsRow from "./search-results-row";
import {useParams} from 'react-router-dom'; // This is used to get a value from searching



const SearchResults = ({allHouses}) => {
    const {country} = useParams();
    const filterHouses = allHouses.filter((h) => h.country === country)
    return ( 
        <div className="mt-2">
            <h4>Results for {country}:</h4>
            <table className="table table-hover">
                <tbody>
                    {filterHouses.map((h) => (
                        <SearchResultsRow KEY ={h.id} house={h}/>
                    ))}
                </tbody>

            </table>

        </div>
     );
};
 
export default SearchResults;