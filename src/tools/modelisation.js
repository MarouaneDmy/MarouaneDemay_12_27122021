import getActivity from "./getActivity";
import getAverageSessions from "./getAverageSessions";
import getPerformance from "./getPerformance"
import getMainData from "./getMainData"

export default async function transformateur(dataType) {
    let data = null;

    switch(dataType){
        case "barChart": {
            data = await getActivity();
            break;
        } 
        case "lineChart" : {
            data = await getAverageSessions();
            break;
        } 
        case "radarChart" : {
            data = await getPerformance();
            break;
        } 
        case "keyData" :
        case "pieChart" : {
            data = await getMainData();
            break;
        } 
        default: {
            break;
        }
    } return data
}