import React, {useState} from 'react';
import userFacade from "../utils/userFacade.js";

function Boat({boat}) {
    const [seeOwners, setSeeOwners] = useState(false)
    const [owners, setOwners] = useState([])
    const handleSeeOwners = (id) => {
        if (!seeOwners){
        userFacade.fetchOwnersFromBoat(id)
            .then(res => {
                setOwners(res)
            })
    }
        return setSeeOwners(!seeOwners)
    }
    return (
        <div className={"boat_divs"} key={boat.id}>
            <h3 style={{padding: 5, margin: 5}}>{boat.name}</h3>
            <img className={"boat_image"} src={boat.image}/>
            <div className={"boat_bottom_div"}>
                <p style={{margin: "auto"}}>Brand: {boat.brand}</p>
                <p style={{margin: "auto"}}>Make: {boat.make}</p>
            </div>
            <button className={"boat_owner_button"} onClick={() => handleSeeOwners(boat.id)}>{seeOwners ? <>Hide</> : <>See Owners</>}</button>
            {seeOwners ? <ul> {owners?.map((owner)=>
                <li>{owner.name}</li> )}</ul>
                : <></>
                }

        </div>
    );
}

export default Boat;