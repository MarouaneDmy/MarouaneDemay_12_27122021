/* import data from '../data/data' */
import axios from "axios";

export default async function getUserAverageSessionsById(){
    let url = document.location.href;
    let id_url = url.substring (url.lastIndexOf( "/" ) + 1);
    /* mock data */
    /* const foundUserAverageSessionsById = data.USER_AVERAGE_SESSIONS.find(el => el.id = id_url) */
    const foundUserAverageSessionsById = await (await axios("http://localhost:3000/user/" + id_url + "/average-sessions")).data.data
    return foundUserAverageSessionsById.sessions
}