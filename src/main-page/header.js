import React from "react";
import logo from "./Home.png";
import "./header.css"; // Import your CSS file with custom styles

const Header = ({subtitle}) => (
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className="logo" alt="Real Estate" />
            <div className="col-md-12 mt">
                <span className="real-homes">RealHomes</span>
        </div>
        </div>
        <div className="col-md-7 mt-3 subtitle" style={{ color: "orange" }}>
            <i>{subtitle}</i>
        </div>
        {/* <div className="col-md-12 mt-0.2">
            <span className="real-homes">RealHomes</span>
        </div> */}
    </header>
);

export default Header;
