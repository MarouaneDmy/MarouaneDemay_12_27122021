import React from 'react'

export default function KeyData(props) {   

    return (
        <div className='keyData'>
            <section className={"icon" + props.categorie}>
                <img src={props.icone} alt=""/>
            </section>
            <div className='unit'>
                <p>{props.nombre}</p>
                <p>{props.type}</p>
            </div>
            <p className="subtitleCategorie">{props.categorie}</p>
        </div>
    )
}