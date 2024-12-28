import React from "react";
import "../styles/Visualizer.css"

function Visualizer({array, sorted}){
    return(
        <div className="array-container">
            {array.map((value, index) => (
                <div
                    key={index}
                    className={sorted ? "array-bar-complete" : "array-bar"}
                    style={{ height: `${value}px` }}
                ></div>
            ))}
        </div>
    );
}

export default Visualizer