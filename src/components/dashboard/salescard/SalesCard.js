import React from 'react'
import './salescard.css'
import { FaChevronCircleUp } from "react-icons/fa";
import SalesCardData from './SalesCardData';




const Sales = (props) => {

    return (
        <div className='card sales__card d-flex'>
            <div className="sales__info">
                <h6 className='sales__heading'>{props.item.title}</h6>
                <h3 className='sales__data'>{props.item.data}</h3>
                <p className='sales__date text-muted'>
                    <span className='text-primary'> <FaChevronCircleUp/>  {props.item.hike}  </span>
                    {props.item.duration}
                </p>
            </div>
            <div className={`sales__icon d-flex box-shadow-primary ${props.item.color}`}>
              {props.item.icon}
            </div>
        </div>)
}


const SalesCard = () => {
    return (
        <div className='sales grid grid-4 gap25'>
            {SalesCardData.map((item,index) => {

                return <Sales
                    key = {index}
                    item = {item}
                />
            })}
        </div>
    )
}

export default SalesCard