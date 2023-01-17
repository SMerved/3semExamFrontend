import React from 'react';
import {useEffect, useState} from "react";
import userFacade from "../utils/userFacade.js";
import '../styles/owners.css';

function Owners() {
    const [owners, setOwners] = useState([])
    useEffect(()=> {
        userFacade.fetchOwners()
            .then(res => setOwners(res))
    }, [])
    return (
        <div className={"owner_table"}>
            {owners?.map((owner)=>
                <ul>{owner.name} {owner.address} {owner.phone}</ul>
            )}
        </div>
    );
}

export default Owners;