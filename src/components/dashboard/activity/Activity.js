import React from 'react'
import './activity.css'
import ActivityData from './ActivityData'

const DailyActivity = (props) => {
    return (
        <div className='activity__info'>
            <div className='activity__icon bg-primary-transparent text-primary'>
            <i className={`task-icon ${props.item.icon}`}></i>
            </div>
            <div className='activity__details'>
                <div>

                    <h6>{props.item.task}
                        <span className="text-muted fs-11 mx-2">{props.item.date}</span>
                    </h6>
                    <p className="text-muted activity__name">{props.item.user}
                        <a href="#" className="fw-semibold"> {props.item.course}
                        </a>
                    </p>
                </div>

            </div>
        </div>
    )
}

const Activity = () => {
    return (
        <div className='card'>
            <div className="card__header">
                <h3 className='card__title '>Daily Activity</h3>
            </div>
            <div className="card__body activity">

                {ActivityData.map((item,index) => {
                    return <DailyActivity
                        key = {index}
                        item = {item}
                    />
                })}

                {/* <DailyActivity />
                <DailyActivity />
                <DailyActivity />
                <DailyActivity />
                <DailyActivity /> */}
            </div>
        </div>
    )
}

export default Activity