import React from 'react'



const Widget1Card = () => {

    return (
        <div className='card'>
        <div className="card__header">
                <div className="card__title">

                </div>
        </div>
        <div className="card__body">

        </div>
    </div>
    )

}

const Widget1 = () => {
  return (
    <div className='widget1'>
   <Widget1Card/>
   <Widget1Card/>
   <Widget1Card/>
   <Widget1Card/>
   </div>
  )
}

export default Widget1