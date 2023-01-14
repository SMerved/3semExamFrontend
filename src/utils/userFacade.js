
import settings from "../settings.js";
import apiFacade from "./apiFacade.js";

const URL = settings;


function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}

function userFacade() {

    const fetchOwners = () => {
        const options = apiFacade.makeOptions("GET", true);
        return fetch(URL + "/api/boats/owners", options).then(handleHttpErrors);
    }
    const fetchBoatsFromHarbour = (harbourId) => {
        const options = apiFacade.makeOptions("GET", true);
        return fetch(URL + "/api/boats/" + harbourId, options).then(handleHttpErrors);
    }

    return {
        fetchOwners,
        fetchBoatsFromHarbour
    }
}

const facade = userFacade();
export default facade;
