import data from '../data/data'
/* import axios from 'axios'; */

export default function getUserPerformanceById(){
    let url = document.location.href;
    let id_url = url.substring (url.lastIndexOf( "/" ) + 1);
    /* mock data */
    const foundUserPerformanceById = data.USER_PERFORMANCE.find(el => el.id = id_url)
    /* const foundUserPerformanceById = await (await axios("http://localhost:3000/user/" + id_url + "/performance")).data.data */
    return foundUserPerformanceById.data
}