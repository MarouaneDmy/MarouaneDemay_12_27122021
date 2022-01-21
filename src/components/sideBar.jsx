import React from 'react'
import bike from '../images/bike-icon.svg'
import meditation from '../images/meditation-icon.svg'
import swim from '../images/swim-icon.svg'
import workout from '../images/workout-icon.svg'

export default function SideBar(props) {
  return (
    <aside className='sideBar'>
        <ul>
            <li>
                <img src={meditation} alt="medidation-icon" className="meditationIcon"></img>
            </li>
            <li>
                <img src={swim} alt="swim-icon" className="swimIcon"></img>
            </li>
            <li>
                <img src={bike} alt="bike-icon" className="bikeIcon"></img>
            </li>
            <li>
                <img src={workout} alt="workout-icon" className="workoutIcon"></img>
            </li>
        </ul>
        <p className='copyright'>Copyright, SportSee 2020</p>
    </aside>
  )
}