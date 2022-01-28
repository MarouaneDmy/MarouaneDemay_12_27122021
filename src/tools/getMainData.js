/* import data from '../data/data' */
import axios from 'axios'

export default async function getUserMainDataById(){
    let url = document.location.href;
    let id_url = url.substring (url.lastIndexOf( "/" ) + 1);
    /* mock data */
    /* const mainData = data.USER_MAIN_DATA */
    /* const foundUserMainDataById = mainData.find(el => el.id = id_url)  */
    const foundUserMainDataById = await (await axios("http://localhost:3000/user/" + id_url)).data.data
    return foundUserMainDataById
}