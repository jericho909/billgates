import React from 'react'

export default function MoneyDisplay(props) {
    const style = {
        color: "red",
        textAlign: "center"
    }

  return (
    <>  
        <h2 style={style}>THE CSS IS NOT COMPLETE, SORRY FOR THE ASSAULT ON YOUR EYES</h2>
        <h3 style={style}>But the functionality is complete, so hurray?</h3>
        <h2 className='money-display'>${props.amount}</h2>
    </>
    
  )
}
