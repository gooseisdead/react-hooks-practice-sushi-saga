import React from 'react'

function Table({ moneyInWallet, emptyPlates }) {

  const renderPlates = emptyPlates.map((beef, index) => (
        <div key={index} className="empty-plate" style={{ top: -7 * index }}></div>
    ))

  // let renderMorePlates

  // if (emptyPlates.length >= 11 && index >= 11) {
  //   renderMorePlates = emptyPlates.map((x, index) => ( <div key={index} className="empty-plate-more" style={{ top: -7 * index }}></div>
  //   ))} else {
  //     renderMorePlates = emptyPlates.map((x, index) => (
  //       <div key={index} className="empty-plate" style={{ top: -7 * index }}></div>
  //   ))}


  return (
    <>
      <h1 className="remaining">
        You have: ${ moneyInWallet } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          { renderPlates }
        </div>
      </div>
    </>
  )
}

export default Table