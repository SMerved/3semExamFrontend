import settings from "../settings.js";
import apiFacade from "./apiFacade.js";

const URL = settings;


function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}

function adminFacade() {

    const createBoat = (boat) => {
        const options = apiFacade.makeOptions("POST", true, boat);
        return fetch( URL + "/api/admin/boat", options)
            .then(handleHttpErrors)
    }

    return {
        createBoat
    }
}

const facade = adminFacade();
export default facade;
