import data from '../data/data'
/* import axios from 'axios' */

export default function getUserActivityById(){
    let url = document.location.href;
    let id_url = url.substring (url.lastIndexOf( "/" ) + 1);
    /* mock data */
    const foundUserActivityById = data.USER_ACTIVITY.find(el => el.id = id_url)
    /* const foundUserActivityById = await (await axios("http://localhost:3000/user/" + id_url + "/activity")).data.data */
    return foundUserActivityById.sessions
}