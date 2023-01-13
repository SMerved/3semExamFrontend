
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
        return fetch(URL + "/api/owners", options).then(handleHttpErrors);
    }

    return {
       fetchOwners
    }
}

const facade = userFacade();
export default facade;
