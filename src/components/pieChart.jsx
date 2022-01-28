import React, {useEffect, useState} from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import transformateur from '../tools/modelisation';
/* import transformateur from '../tools/modelisationOff'; */

export default function LevelPieChart(props) {

    /* let data = transformateur("pieChart")
    const todayScore = data.todayScore */

    const [todayScore, setTodayScore] = useState([]);
  
    // Récupération de la donnée du score du jour de l'utilisateur via le transformateur
    useEffect(() => {
    async function fetchData() {
        const data = await transformateur("pieChart")
        setTodayScore(data.todayScore)
        return data
    }
    fetchData();
    }, []);

    // Pourcentages du score actuel et restant de l'utilisateur
    const percent = todayScore * 100;
    const remainingPercent = 100 - percent;

    // Valeur des pourcentages données au diagramme de score
    const score = [
        { name: "percent", value: percent, fillColor: "#e60000" },
        { name: "remaining", value: remainingPercent, fillColor: "white" },
    ]

    return (
        <div className="userScore">
            <p className="titleScore">Score</p>
            <p><span>{percent}%</span> de votre objectif</p>
            <ResponsiveContainer className="pieChart" width={300} height={300} >
                <PieChart>
                    <Pie
                    data={score}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={90}
                    fill="red"
                    startAngle={90}
                    endAngle={480}
                    >
                    {score.map((entry, index) => (
                            <Cell
                            key={`cell-${index}`}
                            fill={entry.fillColor}
                            cornerRadius="50%"
                            />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
