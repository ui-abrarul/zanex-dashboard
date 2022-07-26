import React from 'react'
import './browser.css'
import BrowserData from './BrowserData'



const BrowserActivity = (props) => {
    return (
        <div className='browser__info d-flex'>
            <div className='browser__name d-flex'>
                <div className={`browser__img d-flex ${props.item.background} text-white`}>
                    {props.item.icon}
                </div>
                <p className="text-dark"> {props.item.name} </p>
            </div>
            <div className='browser__details d-flex'>
                <div>
                   {props.item.visits}
                </div>
                <div className={`browser__hike ${props.item.hikeColor}`}>
                    <span>{props.item.hikeIcon}</span>
                    <span>{props.item.hike}</span>
                </div>
            </div>
        </div>
    )
}


const Browser = () => {
    return (
        <div className='card'>
            <div className="card__header">
                <h3 className='card__title '>Browser Usage</h3>
            </div>
            <div className="card__body browser">
                {BrowserData.map((item,index) => {
                 return <BrowserActivity
                 
                    key = {index}
                    item ={item}
                 
                 />
                })}
            </div>
        </div>
    )
}

export default Browser