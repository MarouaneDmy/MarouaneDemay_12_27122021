import React, { useEffect, useState } from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis } from "recharts";
import transformateur from '../tools/modelisation';
/* import transformateur from '../tools/modelisationOff'; */

export default function TinyLineChart(props) {

    /* let data = transformateur("lineChart") */

    const [dataSessions, setDataSessions] = useState([]);
  
    // Récupération de la donnée des sessions de l'utilisateur via le transformateur
    useEffect(() => {
    async function fetchData() {
        const data = await transformateur("lineChart")
        setDataSessions(data)
        return data
    }
    fetchData();
    }, []);

    // Données à afficher le tooltip actif
    const InfoToolTip = ({ payload, active }) => {
        if (active) {
            return (
                <div className="custom-tooltip_lineChart">
                    <span>{payload[0].value} min</span>
                </div>
            )
        }
        return null
    }

    // Jours affichés sur XAxis
    const days = ["L", "M", "M", "J", "V", "S", "D"]

    return (
        <div className="lineChartSection">
            <p className="titleLineChart">Durée moyenne des sessions</p>
            <ResponsiveContainer className="lineChart" height={250}> 
                <LineChart data={dataSessions} margin={{ top: 5, right: 0, left: 0, bottom: 5 }} >
                    <XAxis padding={{left:15, right:15}} tickFormatter={(d)=>days[d]} tickMargin={10} tickLine={false} stroke="white"/>
                    <Tooltip
                        content={<InfoToolTip/>}
                        isAnimationActive={false}
                    />
                    <Line type="monotone" dataKey="sessionLength" dot={false} stroke="white" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
