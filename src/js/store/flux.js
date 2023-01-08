import { getPlanets } from "../services/planets.services.js";
import { getPeople } from "../services/people.services.js";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
        },
        actions: {
            loadSomeData: ()=>{
                getPlanets().then(data => setStore({"foo":data.results}))
            }
        }
    }
}

export default getState;