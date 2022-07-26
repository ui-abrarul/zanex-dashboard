import React from 'react'
import './timeline.css'
import TimelineData from './TimelineData';



const TimelineActivity = (props) => {
    return (
        <div className='timeline__info d-flex'>
            <div className={`timeline__img d-flex ${props.item.background} ${props.item.color} `}>
                {props.item.icon}
            </div>
            <div className='timeline__details d-flex'>
            <div>
                <b>
                    <span className="text-dark">{props.item.name} </span>
                </b>
               {props.item.activity}
                <span className="t-date d-flex text-muted fs-11">{props.item.date}</span>
            </div>
                <div>
                <span className={`badge ${props.item.timebg} text-white`}>{props.item.time}</span>
                </div>
            </div>
        </div>
    )
}


const Timeline = () => {
    return (
        <div className='card'>
            <div className="card__header">
                <h3 className='card__title '>Timeline</h3>
            </div>
            <div className="card__body timeline">
                {TimelineData.map((item,index) => {
                    return <TimelineActivity
                        key={index}
                        item = {item}
                    />
                })}
            </div>
        </div>
    )
}

export default Timeline