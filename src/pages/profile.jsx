import React, { useState, useEffect } from 'react'
import getData from '../tools/getMainData'
import BarChart from '../components/barChart'
import LineChart from '../components/lineChart'
import RadarChart from '../components/radarChart'
import PieChart from '../components/pieChart'
import KeyData from '../components/keyData'
import Calories from '../images/calories.svg'
import Proteines from '../images/proteines.svg'
import Glucides from '../images/glucides.svg'
import Lipides from '../images/lipides.svg'


export default function Profile(props) {

  const [firstName, setFirstName] = useState([]);
  const [typeKeyData, setTypeKeyData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const data = await getData()
      setFirstName(data.userInfos.firstName)
      setTypeKeyData(data.keyData)
      return data
    }
    fetchData();
  }, []);

  return (
    <div className='dashboard'>
      <h1 className='titleProfile'>Bonjour <span>{firstName}</span> </h1>
      <p className='subtitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className='allChart'>
        <BarChart/>
        <LineChart/>
        <RadarChart/>
        <PieChart/>
      </div>
      <div>
        <KeyData categorie="Calories" icone={Calories} nombre={typeKeyData.calorieCount} type="kCal"></KeyData>
        <KeyData categorie="Proteines" icone={Proteines} nombre={typeKeyData.proteinCount} type="g"></KeyData>
        <KeyData categorie="Glucides" icone={Glucides} nombre={typeKeyData.carbohydrateCount} type="g"></KeyData>
        <KeyData categorie="Lipides" icone={Lipides} nombre={typeKeyData.lipidCount} type="g"></KeyData>
      </div>
    </div>
  )
}