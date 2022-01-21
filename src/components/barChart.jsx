import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import transformateur from '../tools/modelisation';
/* import transformateur from '../tools/modelisationOff'; */


export default function SimpleBarChart(props) {

    /* let data = transformateur("barChart") */

    const [dataActivity, setDataActivity] = useState([]);
  
    useEffect(() => {
    async function fetchData() {
        const data = await transformateur("barChart")
        setDataActivity(data)
        return data
    }
    fetchData();
    }, []);

    const InfoToolTip = ({ payload, active }) => {
        if (active) {
          return (
            <div className="custom-tooltip_barChart">
              <span>{payload[0].value}kg</span>
              <span>{payload[1].value}Kcal</span>
            </div>
          )
        }
        return null
    }

    const jourX = (tickItem) => {
        return tickItem + 1;
    };

    return (
        <section className='barChartSection'>
            <p>Activité quotidienne</p>
            <ul>
                <li className='poids'>Poids (kg)</li>
                <li className='calories'>Calories brûlées (kCal)</li>
            </ul>
            <ResponsiveContainer className="barChartContainer" width={835} height={260} >
                <BarChart
                    data={dataActivity}
                    margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                    }}
                    barGap={8}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis tickFormatter={jourX} tickMargin={10} tickLine={false} />
                    <YAxis orientation="right" tickLine={false} axisLine={false} />
                    <Tooltip
                    content={<InfoToolTip />}
                    isAnimationActive={false}
                    />
                    <Bar dataKey="kilogram" fill="black" barSize={7} radius={[3.5, 3.5, 0, 0]}/>
                    <Bar dataKey="calories" fill="red" barSize={7} radius={[3.5, 3.5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
}
