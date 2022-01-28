import React, { useEffect, useState } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer
  } from "recharts";
import transformateur from '../tools/modelisation';
/* import transformateur from '../tools/modelisationOff'; */

export default function TinyLineChart(props) {

    /* let dataPerformance = transformateur("radarChart") */

    const [dataPerformance, setDataPerformance] = useState([]);
  
    // Récupération de la donnée de performance de l'utilisateur via le transformateur
    useEffect(() => {
    async function fetchData() {
        const data = await transformateur("radarChart")
        setDataPerformance(data)
        return data
    }
    fetchData();
    }, []);
    
    let type = ["Cardio", "Énergie", "Endurance", "Force", "Vitesse", "Intensité"]
    
    return (
    <div className="radarChartSection">
        <ResponsiveContainer className="radarChartContainer" width={400} height={400} >
            <RadarChart
                data={dataPerformance}
                innerRadius="5%"
                outerRadius="50%"
            >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis tickLine={false} dataKey="kind" stroke="white" dy={4} tick={{ fontSize: 12 }} tickFormatter={(t)=>type[t - 1]} />
                <Radar
                    dataKey="value"
                    fill="red"
                    fillOpacity={0.6}
                />
                </RadarChart>
        </ResponsiveContainer>
    </div>
    )
}
