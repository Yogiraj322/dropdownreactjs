import React from "react";
import "./Dropdown.css";
function Dropdown(props) {
    // iterating over the array passed as prop
    const mindit = props.arr.map((item) => {
        return (
            <option className="written" onClick={props.disappear}>
                {item}
            </option>
        )
    })
    return (
        <div className="ele">
            {mindit}
        </div>
    )
}
export default Dropdown;