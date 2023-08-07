import React from 'react';
import House from'../house';
import "./featured.css";

const FeaturedHouse = ({house}) => {
    if (house)
    return (  
        <div>
            <div className="row featuredHouse">
                <h3 className="col-md-12 text-center"> Featured House</h3>
            </div>
            <House house={house}/>
        </div>
        );
        return <div> No featured house at this time</div>;
};
 
export default FeaturedHouse;




// import React from 'react';
// import House from '../house';
// import './featured.css';

// const FeaturedHouse = ({ house }) => {
//   if (house) {
//     return (
//       <div className="featuredHouse">
//         <h3 className="featuredTitle">Featured House</h3>
//         <House house={house} />
//       </div>
//     );
//   }
//   return <div className="noFeaturedHouse">No featured house at this time</div>;
// };

// export default FeaturedHouse;
