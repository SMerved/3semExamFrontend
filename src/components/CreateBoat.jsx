import React, {useState} from 'react';
import adminFacade from "../utils/adminFacade.js";

function CreateBoat() {
    const [newBoat, setNewBoat] = useState({})
    const onChange = (evt) => {
        setNewBoat({...newBoat, [evt.target.id]: evt.target.value})
    }
    const submitNewBoat = () => {
        adminFacade.createBoat(newBoat).then((res) => setNewBoat({}))
    }
    return (
        <div className={"create_boat_div"}>
            <h3>Fill out boat details:</h3>
            <form>
                <label>Name: </label>
                <input id={"name"} className={"create_boat_input"} required/>
                <label>Brand: </label>
                <input id={"brand"} className={"create_boat_input"} required/>
                <label>Make: </label>
                <input id={"make"} className={"create_boat_input"} required/>
                <input id={"harbour"} className={"create_boat_input"} required/>
                <input className={"create_boat_input"} required/>
                <button className={"create_boat_submit"} type={"submit"} onSubmit={submitNewBoat}>Submit</button>
            </form>
        </div>
    );
}

export default CreateBoat;