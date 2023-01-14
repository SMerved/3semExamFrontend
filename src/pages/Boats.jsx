import React from 'react';
import {useEffect, useState} from "react";
import userFacade from "../utils/userFacade.js";

function Boats() {
    const [boats, setBoats] = useState([])
    useEffect(()=> {
        userFacade.fetchBoatsFromHarbour(1)
            .then(res => setBoats(res))
    }, [])
    return (
        <div>
            {boats?.map((boat)=>
                <ul>{boat.name} {boat.brand} {boat.make}</ul>
            )}
        </div>
    );
}

export default Boats;