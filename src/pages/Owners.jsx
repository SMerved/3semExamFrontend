import React from 'react';
import {useEffect, useState} from "react";
import userFacade from "../utils/userFacade.js";

function Owners() {
    const [owners, setOwners] = useState([])
    useEffect(()=> {
        userFacade.fetchOwners()
            .then(res => setOwners(res))
    }, [])
    return (
        <div>
            {owners?.map((owner)=>
                <ul>{owner}</ul>
            )}
        </div>
    );
}

export default Owners;