import getActivity from "./getActivity";
import getAverageSessions from "./getAverageSessions";
import getPerformance from "./getPerformance"
import getMainData from "./getMainData"

export default function transformateur(dataType) {
    let data = null;

    switch(dataType){
        case "barChart": {
            data = getActivity();
            break;
        } 
        case "lineChart" : {
            data = getAverageSessions();
            break;
        } 
        case "radarChart" : {
            data = getPerformance();
            break;
        } 
        case "keyData" :
        case "pieChart" : {
            data = getMainData();
            break;
        } 
        default: {
            break;
        }
    } return data
}