import React from 'react';
import {useEffect, useState} from "react";
import userFacade from "../utils/userFacade.js";
import "../styles/boats.css"
import Boat from "../components/Boat.jsx";

function Boats() {
    const [boats, setBoats] = useState([])
    const [harbour, setHarbour] = useState(0)
    const [dropdown, setDropdown] = useState(false)
    const harbours = [1, 2]
    if (harbour !== 0) {
        useEffect(() => {
            userFacade.fetchBoatsFromHarbour(harbour)
                .then(res => setBoats(res))
        }, [harbour])
    }
    if (harbour === 0) {
        useEffect(() => {
            userFacade.fetchBoats()
                .then(res => setBoats(res))
        }, [harbour])
    }
    const handleDropdown = () => {
        setDropdown(!dropdown);
    };
    const handleItem = (harb) => {
        setHarbour(harb)
        setDropdown(!dropdown)
    };
    return (
        <div className={"outer_div"}>
            <div className={"dropdown"}>
                <button className={"dropdown_button"} onClick={handleDropdown}>Harbours</button>
                {dropdown ? (
                    <ul className="menu">
                        <li className="menu-item">
                            <button onClick={() => handleItem(0)}>All</button>
                        </li>
                        {harbours?.map((harb) =>
                            <li className="menu-item">
                                <button onClick={() => handleItem(harb)}>{harb}</button>
                            </li>
                        )}
                    </ul>
                ) : null}
            </div>
            <div className={"boats_outer_div"}>
                {boats?.map((boat) =>
                    <Boat boat={boat}/>
                )}
            </div>
        </div>
    );
}

export default Boats;